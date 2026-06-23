import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
    {
        name: "Starter",
        price: "From $8k",
        freq: "/ project",
        desc: "For early-stage founders who need to move fast. A focused scope — brand, landing page, or MVP feature — delivered in 4–6 weeks.",
        includes: [
            "One defined deliverable",
            "Weekly check-ins",
            "2 rounds of revisions",
            "Figma or code handoff",
        ],
    },
    {
        name: "Studio",
        price: "From $20k",
        freq: "/ project",
        desc: "For teams ready to go deep. Full product design or engineering engagement, with strategy baked in throughout.",
        includes: [
            "Full-scope engagement",
            "Embedded collaboration",
            "Unlimited revisions in scope",
            "Post-launch support (30 days)",
        ],
        featured: true,
    },
    {
        name: "Retainer",
        price: "From $5k",
        freq: "/ month",
        desc: "Ongoing partnership for teams that need a trusted partner on call. Ideal for post-launch iteration and strategic advisory.",
        includes: [
            "Up to 40 hours / month",
            "Priority response",
            "Monthly strategy sessions",
            "Flexible scope",
        ],
    },
];

export default function Pricing() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="pricing"
            style={{
                backgroundColor: "#c9952c",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "100px 48px",
            }}
            className="pricing-section"
        >
            <div
                ref={ref}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    width: "100%",
                    maxWidth: "1120px",
                }}
            >
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
                    style={{ display: "flex", flexDirection: "column", gap: "14px" }}
                >
                    <p
                        style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#f5efe660",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        Transparent Pricing
                    </p>
                    <h2
                        style={{
                            fontFamily: "Fraunces Variable, serif",
                            fontSize: "clamp(32px, 3.5vw, 48px)",
                            fontWeight: 400,
                            fontStyle: "italic",
                            lineHeight: "1.15",
                            letterSpacing: "-0.01em",
                            color: "#f5efe6",
                            fontVariationSettings: '"opsz" 48, "wght" 400',
                        }}
                    >
                        No surprises, no games.
                    </h2>
                </motion.div>

                {/* Tiers */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "16px",
                    }}
                    className="pricing-grid"
                >
                    {tiers.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.55,
                                ease: [0.44, 0, 0.56, 1],
                                delay: 0.12 + i * 0.1,
                            }}
                            style={{
                                background: t.featured ? "#f5efe6" : "#c9952c",
                                border: t.featured ? "none" : "1.5px solid #f5efe630",
                                borderRadius: "4px",
                                padding: "36px 32px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "24px",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: t.featured ? "#c9952c" : "#f5efe670",
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        marginBottom: "10px",
                                    }}
                                >
                                    {t.name}
                                </p>
                                <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                                    <span
                                        style={{
                                            fontFamily: "Fraunces Variable, serif",
                                            fontSize: "36px",
                                            fontWeight: 400,
                                            fontStyle: "italic",
                                            color: t.featured ? "#1c1814" : "#f5efe6",
                                            fontVariationSettings: '"opsz" 36, "wght" 400',
                                            lineHeight: "1",
                                        }}
                                    >
                                        {t.price}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "Work Sans, sans-serif",
                                            fontSize: "15px",
                                            fontWeight: 400,
                                            color: t.featured ? "#1c181460" : "#f5efe650",
                                        }}
                                    >
                                        {t.freq}
                                    </span>
                                </div>
                            </div>

                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    lineHeight: "1.6",
                                    color: t.featured ? "#1c181490" : "#f5efe6a0",
                                }}
                            >
                                {t.desc}
                            </p>

                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                                {t.includes.map((item) => (
                                    <li
                                        key={item}
                                        style={{
                                            fontFamily: "Work Sans, sans-serif",
                                            fontSize: "14px",
                                            fontWeight: 400,
                                            color: t.featured ? "#1c1814" : "#f5efe6",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                                            <circle cx="7" cy="7" r="6" stroke={t.featured ? "#c9952c" : "#f5efe660"} strokeWidth="1.5" />
                                            <path d="M4 7l2 2 4-4" stroke={t.featured ? "#c9952c" : "#f5efe6"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: t.featured ? "#f5efe6" : "#f5efe6",
                                    textDecoration: "none",
                                    background: t.featured ? "#1c1814" : "transparent",
                                    border: t.featured ? "1.5px solid #1c1814" : "1.5px solid #f5efe660",
                                    borderRadius: "100px",
                                    padding: "12px 24px",
                                    textAlign: "center",
                                    display: "block",
                                    transition: "opacity 0.2s ease",
                                    marginTop: "auto",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.8")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                            >
                                Get started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .pricing-section { padding: 64px 24px !important; }
                    .pricing-grid { grid-template-columns: 1fr !important; }
                }
                @media (min-width: 810px) and (max-width: 1199.98px) {
                    .pricing-grid { grid-template-columns: 1fr 1fr !important; }
                }
            `}</style>
        </section>
    );
}
