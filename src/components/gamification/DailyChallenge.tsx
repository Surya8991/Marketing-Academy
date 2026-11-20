"use client";

import { useState, useEffect } from "react";
import { useEngagement } from "@/hooks/useEngagement";
import { CheckCircle2, XCircle, Flame, Sparkles, Share2, HelpCircle } from "lucide-react";

type ChallengeOption = {
  id: string;
  label: string;
  isWinner: boolean;
  communityPct: number;
  explanation: string;
};

type DailyTeardown = {
  id: string;
  company: string;
  category: string;
  headline: string;
  context: string;
  options: ChallengeOption[];
  takeaway: string;
};

// Daily teardown scenarios indexed by day of year or rotating pool
const DAILY_TEARDOWNS: DailyTeardown[] = [
  {
    id: "dt-basecamp-headline",
    company: "Basecamp",
    category: "Copywriting / CRO",
    headline: "Which Landing Page Headline Won?",
    context:
      "Basecamp tested two radically different H1 headlines to convert small business project managers.",
    options: [
      {
        id: "opt-a",
        label: "Option A: 'The all-in-one toolkit for working remotely.'",
        isWinner: false,
        communityPct: 62,
        explanation:
          "Sounds professional, but it focuses on features rather than visceral pain points.",
      },
      {
        id: "opt-b",
        label:
          "Option B: 'Where did that file go? Who is working on what? Basecamp fixes the mess.'",
        isWinner: true,
        communityPct: 38,
        explanation:
          "Won with +102.5% higher conversion! Calling out the exact internal panic of the customer drives intense emotional resonance.",
      },
    ],
    takeaway:
      "Specific anxiety beats generic clarity. Agitating the messy status-quo creates urgency faster than listing features.",
  },
  {
    id: "dt-duolingo-push",
    company: "Duolingo",
    category: "Lifecycle / Retention",
    headline: "Which Push Notification Saved More Churned Users?",
    context:
      "Duolingo tested multiple notification variants to re-engage users on day 7 of inactivity.",
    options: [
      {
        id: "opt-a",
        label: "Option A: 'Keep your French streak alive! 5 minutes today is all it takes.'",
        isWinner: false,
        communityPct: 71,
        explanation:
          "Positive reinforcement worked well, but plateaued for deeply disengaged users.",
      },
      {
        id: "opt-b",
        label:
          "Option B: 'These reminders don’t seem to be working. We’ll stop sending them for now.'",
        isWinner: true,
        communityPct: 29,
        explanation:
          "Won with +18.4% higher resurrection rate! Reverse psychology and loss of connection triggered FOMO and guilt.",
      },
    ],
    takeaway:
      "Reverse psychology and breaking the fourth wall interrupt pattern recognition when users ignore standard alerts.",
  },
  {
    id: "dt-booking-urgency",
    company: "Booking.com",
    category: "Psychology / CRO",
    headline: "Which Social Proof Banner Drove More Hotel Reservations?",
    context:
      "Booking.com tested two micro-copy prompts next to the room reservation button.",
    options: [
      {
        id: "opt-a",
        label: "Option A: 'Only 1 room left on our site at this price!'",
        isWinner: true,
        communityPct: 83,
        explanation:
          "Won by +24% conversions. Immediate scarcity combined with price anchoring creates high loss aversion.",
      },
      {
        id: "opt-b",
        label: "Option B: 'Booked 14 times in the last 24 hours in Amsterdam!'",
        isWinner: false,
        communityPct: 17,
        explanation:
          "Strong social proof, but lacked the direct, immediate threat of losing the room right now.",
      },
    ],
    takeaway:
      "Scarcity ('only 1 left') triggers immediate loss aversion, outperforming passive popularity signals.",
  },
];

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function DailyChallenge() {
  const { mounted, streak, award } = useEngagement();
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [todayStr, setTodayStr] = useState("");
  const [dayIndex, setDayIndex] = useState(0);

  const teardown = DAILY_TEARDOWNS[dayIndex % DAILY_TEARDOWNS.length];
  const storageKey = `ma_daily_teardown_${todayStr}`;

  useEffect(() => {
    const t = getTodayString();
    setTodayStr(t);
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
    setDayIndex(day);
    try {
      const saved = localStorage.getItem(`ma_daily_teardown_${t}`);
      if (saved) {
        setSelectedOpt(saved);
        setSubmitted(true);
      }
    } catch {
      // Ignore localStorage restrictions
    }
  }, []);

  if (!mounted || !teardown) return null;

  const handleSubmit = (optId: string) => {
    if (submitted) return;
    setSelectedOpt(optId);
    setSubmitted(true);
    try {
      localStorage.setItem(storageKey, optId);
    } catch {
      // storage unavailable
    }
    // Award daily challenge XP
    award("quiz", `daily-teardown-${todayStr}`);
  };

  const selectedChoice = teardown.options.find((o) => o.id === selectedOpt);
  const won = selectedChoice?.isWinner;

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
            <Sparkles size={16} />
          </span>
          <div>
            <div className="text-[0.7rem] uppercase tracking-wider font-semibold text-[var(--accent)]">
              Daily 2-Min Teardown
            </div>
            <div className="text-xs text-[var(--muted-foreground)]">
              {teardown.company} · {teardown.category}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[var(--warning)] font-medium text-xs">
          <Flame size={14} className="animate-pulse" />
          <span>{streak} Day Streak</span>
        </div>
      </div>

      {/* Challenge Title & Context */}
      <h3 className="text-lg sm:text-xl font-semibold font-display mb-2 text-balance">
        {teardown.headline}
      </h3>
      <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">
        {teardown.context}
      </p>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {teardown.options.map((opt) => {
          const isSelected = selectedOpt === opt.id;
          let btnClasses =
            "w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 relative text-sm ";

          if (!submitted) {
            btnClasses +=
              "border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--muted)]/50 cursor-pointer";
          } else {
            if (opt.isWinner) {
              btnClasses += "border-emerald-500/50 bg-emerald-500/10 text-[var(--foreground)]";
            } else if (isSelected && !opt.isWinner) {
              btnClasses += "border-red-500/50 bg-red-500/10 text-[var(--foreground)]";
            } else {
              btnClasses += "border-[var(--border)] opacity-60";
            }
          }

          return (
            <button
              key={opt.id}
              type="button"
              disabled={submitted}
              onClick={() => handleSubmit(opt.id)}
              className={btnClasses}
            >
              <div className="mt-0.5 shrink-0">
                {submitted ? (
                  opt.isWinner ? (
                    <CheckCircle2 size={18} className="text-[var(--success)]" />
                  ) : isSelected ? (
                    <XCircle size={18} className="text-[var(--danger)]" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-[var(--border)]" />
                  )
                ) : (
                  <div className="w-4 h-4 rounded-full border border-[var(--border)]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium">{opt.label}</div>
                {submitted && (
                  <div className="text-xs text-[var(--muted-foreground)] mt-1.5 leading-relaxed">
                    {opt.explanation}
                  </div>
                )}
              </div>

              {submitted && (
                <div className="text-xs font-mono tabular-nums text-[var(--muted-foreground)] shrink-0 self-center">
                  {opt.communityPct}% picked
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Reveal Takeaway */}
      {submitted && (
        <div className="p-4 rounded-xl bg-[var(--muted)]/40 border border-[var(--border)] text-sm space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2 font-semibold">
            {won ? (
              <span className="text-[var(--success)] flex items-center gap-1.5">
                <CheckCircle2 size={16} /> Great instinct! You scored +25 XP
              </span>
            ) : (
              <span className="text-[var(--warning)] flex items-center gap-1.5">
                <HelpCircle size={16} /> Counter-intuitive result! +20 XP
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
            <strong className="text-[var(--foreground)]">Strategic Insight:</strong>{" "}
            {teardown.takeaway}
          </p>
          <div className="pt-2 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
            <span>Next challenge unlocks in 24 hours</span>
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Marketing Academy Daily Teardown",
                    text: `I just solved today's marketing case study on Marketing Academy! Current streak: ${streak} days.`,
                    url: window.location.href,
                  });
                }
              }}
              className="flex items-center gap-1 text-[var(--accent)] hover:underline"
            >
              <Share2 size={12} /> Share teardown
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
