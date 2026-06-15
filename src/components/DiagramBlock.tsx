"use client";

import React from "react";

type DiagramBlockProps = {
  type: "funnel" | "bars" | "timeline" | "cycle" | "flow";
  title?: string;
  items: string[];
  values?: number[];
  description?: string;
};

/* ── Funnel ──────────────────────────────────────────────────────────── */
function FunnelDiagram({ items }: { items: string[] }) {
  const capped = items.slice(0, 6);
  const n = capped.length;
  const W = 500;
  const stepH = 64;
  const H = n * stepH + 20;
  const topWidth = W * 0.9;
  const bottomWidth = W * 0.2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {capped.map((label, i) => {
        const t = n === 1 ? 0 : i / (n - 1);
        const nextT = n === 1 ? 1 : (i + 1) / (n - 1);
        const wTop = topWidth - (topWidth - bottomWidth) * t;
        const wBottom = topWidth - (topWidth - bottomWidth) * Math.min(nextT, 1);
        const xLeft = (W - wTop) / 2;
        const xRight = xLeft + wTop;
        const xBotLeft = (W - wBottom) / 2;
        const xBotRight = xBotLeft + wBottom;
        const y = 10 + i * stepH;
        const opacity = 0.8 - (0.6 / Math.max(n - 1, 1)) * i;
        const pts = `${xLeft},${y} ${xRight},${y} ${xBotRight},${y + stepH - 4} ${xBotLeft},${y + stepH - 4}`;
        return (
          <g key={i}>
            <polygon
              points={pts}
              style={{
                fill: `var(--accent)`,
                opacity,
                stroke: "var(--background)",
                strokeWidth: 3,
              }}
            />
            <text
              x={W / 2}
              y={y + stepH / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fill: "var(--accent-foreground)",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Bars ────────────────────────────────────────────────────────────── */
function BarsDiagram({ items, values }: { items: string[]; values?: number[] }) {
  const n = items.length;
  const barH = 36;
  const gap = 14;
  const labelW = 140;
  const chartW = 300;
  const W = labelW + chartW + 60;
  const H = n * (barH + gap) + 20;

  const resolvedValues: number[] = values
    ? values.map((v) => Math.min(Math.max(v, 0), 100))
    : items.map((_, i) => (n === 1 ? 100 : Math.round(100 - (70 / (n - 1)) * i)));

  const maxVal = Math.max(...resolvedValues, 1);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {items.map((label, i) => {
        const barW = (resolvedValues[i] / maxVal) * chartW;
        const y = 10 + i * (barH + gap);
        return (
          <g key={i}>
            <text
              x={labelW - 8}
              y={y + barH / 2}
              textAnchor="end"
              dominantBaseline="middle"
              style={{ fill: "var(--foreground)", fontSize: 13 }}
            >
              {label}
            </text>
            <rect
              x={labelW}
              y={y}
              width={barW}
              height={barH}
              rx={4}
              style={{ fill: "var(--accent)", opacity: 0.85 }}
            />
            {resolvedValues[i] > 0 && (
              <text
                x={labelW + barW + 6}
                y={y + barH / 2}
                dominantBaseline="middle"
                style={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              >
                {resolvedValues[i]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ── Timeline ────────────────────────────────────────────────────────── */
function TimelineDiagram({ items }: { items: string[] }) {
  const W = 480;
  const rowH = 70;
  const H = items.length * rowH + 20;
  const cx = 48;
  const r = 14;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      {/* vertical line */}
      <line
        x1={cx}
        y1={10 + r}
        x2={cx}
        y2={10 + (items.length - 1) * rowH + r}
        style={{ stroke: "var(--border)", strokeWidth: 2 }}
      />
      {items.map((label, i) => {
        const cy = 10 + i * rowH + r;
        return (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={r}
              style={{ fill: "var(--accent)", stroke: "var(--background)", strokeWidth: 2 }}
            />
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fill: "var(--accent-foreground)", fontSize: 12, fontWeight: 700 }}
            >
              {i + 1}
            </text>
            <rect
              x={cx + 26}
              y={cy - 18}
              width={W - cx - 36}
              height={36}
              rx={6}
              style={{ fill: "var(--card)", stroke: "var(--border)", strokeWidth: 1 }}
            />
            <text
              x={cx + 36}
              y={cy}
              dominantBaseline="middle"
              style={{ fill: "var(--foreground)", fontSize: 13 }}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Cycle ───────────────────────────────────────────────────────────── */
function CycleDiagram({ items }: { items: string[] }) {
  const capped = items.slice(0, 6);
  const n = capped.length;
  const W = 480;
  const H = 420;
  const cx = W / 2;
  const cy = H / 2;
  const radius = 150;
  const nodeRx = 58;
  const nodeRy = 26;

  const nodePositions = capped.map((_, i) => {
    const angle = (2 * Math.PI * i) / n - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      angle,
    };
  });

  const arrows = capped.map((_, i) => {
    const from = nodePositions[i];
    const to = nodePositions[(i + 1) % n];
    const fromAngle = Math.atan2(to.y - from.y, to.x - from.x);
    const toAngle = Math.atan2(from.y - to.y, from.x - to.x);
    const sx = from.x + nodeRx * Math.cos(fromAngle);
    const sy = from.y + nodeRy * Math.sin(fromAngle);
    const ex = to.x + nodeRx * Math.cos(toAngle);
    const ey = to.y + nodeRy * Math.sin(toAngle);
    const midX = (sx + ex) / 2 + (-(ey - sy) * 0.25);
    const midY = (sy + ey) / 2 + ((ex - sx) * 0.25);
    return { sx, sy, ex, ey, midX, midY, i };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      <defs>
        <marker
          id="arrowhead-cycle"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" style={{ fill: "var(--accent)" }} />
        </marker>
      </defs>
      {arrows.map(({ sx, sy, ex, ey, midX, midY, i }) => (
        <path
          key={i}
          d={`M ${sx} ${sy} Q ${midX} ${midY} ${ex} ${ey}`}
          fill="none"
          style={{ stroke: "var(--accent)", strokeWidth: 2, opacity: 0.7 }}
          markerEnd="url(#arrowhead-cycle)"
        />
      ))}
      {nodePositions.map(({ x, y }, i) => (
        <g key={i}>
          <ellipse
            cx={x}
            cy={y}
            rx={nodeRx}
            ry={nodeRy}
            style={{ fill: "var(--card)", stroke: "var(--accent)", strokeWidth: 2 }}
          />
          <text
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fill: "var(--foreground)", fontSize: 12, fontWeight: 600 }}
          >
            {capped[i].length > 14 ? capped[i].slice(0, 13) + "…" : capped[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Flow ────────────────────────────────────────────────────────────── */
function FlowDiagram({ items }: { items: string[] }) {
  const W = 400;
  const boxW = 280;
  const boxH = 44;
  const gap = 36;
  const arrowLen = gap - 8;
  const H = items.length * (boxH + gap) - gap + 20;
  const bx = (W - boxW) / 2;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
      <defs>
        <marker
          id="arrowhead-flow"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" style={{ fill: "var(--border)" }} />
        </marker>
      </defs>
      {items.map((label, i) => {
        const y = 10 + i * (boxH + gap);
        return (
          <g key={i}>
            <rect
              x={bx}
              y={y}
              width={boxW}
              height={boxH}
              rx={8}
              style={{ fill: "var(--card)", stroke: "var(--accent)", strokeWidth: 2 }}
            />
            <text
              x={W / 2}
              y={y + boxH / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fill: "var(--foreground)", fontSize: 13, fontWeight: 600 }}
            >
              {label}
            </text>
            {i < items.length - 1 && (
              <line
                x1={W / 2}
                y1={y + boxH}
                x2={W / 2}
                y2={y + boxH + arrowLen}
                style={{ stroke: "var(--border)", strokeWidth: 2 }}
                markerEnd="url(#arrowhead-flow)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────────────── */
export default function DiagramBlock({
  type,
  title,
  items,
  values,
  description,
}: DiagramBlockProps) {
  const renderDiagram = () => {
    switch (type) {
      case "funnel":
        return <FunnelDiagram items={items} />;
      case "bars":
        return <BarsDiagram items={items} values={values} />;
      case "timeline":
        return <TimelineDiagram items={items} />;
      case "cycle":
        return <CycleDiagram items={items} />;
      case "flow":
        return <FlowDiagram items={items} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        margin: "1.5rem 0",
        padding: "1rem 1.25rem",
        background: "var(--background)",
        border: "1px solid var(--border)",
        borderRadius: 10,
      }}
    >
      {title && (
        <p
          style={{
            margin: "0 0 0.75rem 0",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "var(--foreground)",
          }}
        >
          {title}
        </p>
      )}
      {renderDiagram()}
      {description && (
        <p
          style={{
            margin: "0.75rem 0 0 0",
            fontSize: "0.85rem",
            color: "var(--muted-foreground)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
