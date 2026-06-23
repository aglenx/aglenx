import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const words = [
    "Design", "Engineering", "Strategy", "Brand", "Product", "Research",
    "Editorial", "Systems", "Identity", "Experience",
];

function MarqueeTrack() {
    const repeated = [...words, ...words, ...words];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "40px",
                alignItems: "center",
                animation: "marquee 28s linear infinite",
                width: "max-content",
                willChange: "transform",
            }}
        >
            {repeated.map((w, i) => (
                <span
                    key={i}
                    style={{
                        fontFamily: "Fraunces Variable, serif",
                        fontSize: "clamp(36px, 5vw, 72px)",
                        fontWeight: 400,
                        fontStyle: "italic",
                        color: i % 2 === 0 ? "#1c1814" : "#c75b39",
                        whiteSpace: "nowrap",
                        fontVariationSettings: '"opsz" 72, "wght" 400',
                        lineHeight: "1",
                    }}
                >
                    {w}
                </span>
            ))}
        </div>
    );
}

export default function Marquee() {
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "#f5efe6",
                overflow: "hidden",
                padding: "60px 0",
                borderTop: "1px solid #1c181415",
                borderBottom: "1px solid #1c181415",
            }}
        >
            <MarqueeTrack />
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.333%); }
                }
            `}</style>
        </div>
    );
}

export function TeamSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const members = [
        {
            name: "Alex Glen",
            role: "Founder · Design & Strategy",
            bio: "Previously at Figma and a top-four design consultancy. Obsessed with the intersection of product thinking and visual craft.",
        },
        {
            name: "Mira Kosta",
            role: "Partner · Engineering",
            bio: "Full-stack engineer with a decade of building for startups at Series A through IPO. Led engineering at two YC companies.",
        },
        {
            name: "Jude Osei",
            role: "Collaborator · Brand",
            bio: "Independent brand strategist and typographer. Brings a slow, considered approach to identity systems that outlast trends.",
        },
    ];

    return (
        <section
            id="team"
            style={{
                backgroundColor: "#28384d",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "100px 48px",
            }}
            className="team-section"
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
                            color: "#f5efe640",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        The People
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
                        Small on purpose.
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "40px",
                        flexWrap: "wrap",
                    }}
                    className="team-grid"
                >
                    {members.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.6,
                                ease: [0.44, 0, 0.56, 1],
                                delay: 0.1 + i * 0.12,
                            }}
                            style={{
                                flex: "1 1 260px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                padding: "32px",
                                border: "1px solid #f5efe615",
                                borderRadius: "2px",
                            }}
                        >
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    background: `hsl(${i * 40 + 20}, 40%, 55%)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "Fraunces Variable, serif",
                                    fontSize: "20px",
                                    fontStyle: "italic",
                                    color: "#f5efe6",
                                    fontVariationSettings: '"opsz" 20, "wght" 400',
                                    marginBottom: "4px",
                                }}
                            >
                                {m.name[0]}
                            </div>
                            <p
                                style={{
                                    fontFamily: "Fraunces Variable, serif",
                                    fontSize: "22px",
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    lineHeight: "1.2",
                                    color: "#f5efe6",
                                    fontVariationSettings: '"opsz" 20, "wght" 400',
                                }}
                            >
                                {m.name}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    color: "#f5efe640",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {m.role}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    lineHeight: "1.6",
                                    color: "#f5efe690",
                                    marginTop: "4px",
                                }}
                            >
                                {m.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .team-section { padding: 64px 24px !important; }
                    .team-grid { flex-direction: column !important; }
                }
            `}</style>
        </section>
    );
}
