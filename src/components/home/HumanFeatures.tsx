import { Coffee, Gamepad2, Shield, Award, Sparkles } from "lucide-react";

export default function HumanFeatures() {
  const features = [
    {
      icon: Coffee,
      color: "text-amber-500 bg-amber-500/10",
      title: "The Morning Coffee Habit",
      desc: "Bite-sized, 3-to-5 minute lessons designed for busy schedules. Learn one practical marketing concept every morning without cognitive fatigue.",
      tag: "Micro-learning",
    },
    {
      icon: Gamepad2,
      color: "text-indigo-500 bg-indigo-500/10",
      title: "Tactile Simulators, Not Textbooks",
      desc: "Manipulate live ROAS and CAC sliders, evaluate headlines with real-time feedback, and test real A/B split scenarios. You learn by doing.",
      tag: "Active Sandboxes",
    },
    {
      icon: Shield,
      color: "text-emerald-500 bg-emerald-500/10",
      title: "Built-In Streak Protection",
      desc: "Life happens. Equipped with automatic Streak Freezes and rapid recovery challenges, so a busy day never ruins your hard-earned learning momentum.",
      tag: "Loss Aversion",
    },
    {
      icon: Award,
      color: "text-purple-500 bg-purple-500/10",
      title: "Verified Portfolio Proof",
      desc: "800+ hands-on projects tied directly to real company teardowns. Save completed exercises directly to your verified growth portfolio.",
      tag: "Career Ready",
    },
  ];

  return (
    <section className="py-16 sm:py-20 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} /> The Learner Experience
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-balance">
            Education crafted for human curiosity, not algorithm checklists.
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted-foreground)] font-ui-sans">
            Why thousands of founders and practitioners choose to learn here every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group p-6 rounded-3xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${feat.color}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--muted-foreground)] leading-relaxed font-ui-sans">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
