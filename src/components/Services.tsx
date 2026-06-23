import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        title: "Product Design",
        desc: "From wireframe to polished UI — we design products people want to use. UX research, interaction design, prototyping, and a complete handoff design system.",
    },
    {
        title: "Web Engineering",
        desc: "Modern, performant web applications built with React, Next.js, and TypeScript. We write code that scales and teams can maintain.",
    },
    {
        title: "Brand & Identity",
        desc: "Logos, typography, colour systems, and the visual language that ties everything together. Strategy-led, execution-focused.",
    },
    {
        title: "Strategy & Advisory",
        desc: "For founders who need a thinking partner. Product strategy, technical diligence, hiring plans, and roadmap workshops.",
    },
    {
        title: "Backend & APIs",
        desc: "Reliable server-side architecture, database design, and third-party integrations — built for the long term, not just the demo.",
    },
    {
        title: "Content & Editorial",
        desc: "Copywriting, content strategy, and editorial direction for founders who want words that work as hard as their product.",
    },
];

export default function Services() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="services"
            style={{
                backgroundColor: "#c75b39",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "100px 48px",
            }}
            className="services-section"
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
                {/* Heading row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                    className="services-head-row"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                        }}
                    >
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#f5efe670",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            What we do
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
                            Services we offer.
                        </h2>
                    </div>

                    <p
                        style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "17px",
                            fontWeight: 400,
                            lineHeight: "1.65",
                            color: "#f5efe6b0",
                            maxWidth: "400px",
                            textAlign: "right",
                        }}
                        className="services-sub"
                    >
                        We keep our scope tight so every engagement gets our full attention.
                    </p>
                </motion.div>

                {/* Service grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1px",
                        background: "#f5efe620",
                        borderRadius: "2px",
                        overflow: "hidden",
                    }}
                    className="services-grid"
                >
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.55,
                                ease: [0.44, 0, 0.56, 1],
                                delay: 0.15 + i * 0.07,
                            }}
                            style={{
                                background: "#c75b39",
                                padding: "36px 32px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                                transition: "background 0.25s ease",
                            }}
                            whileHover={{ backgroundColor: "#b34e2f" }}
                        >
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
                                {s.title}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    lineHeight: "1.6",
                                    color: "#f5efe6b0",
                                }}
                            >
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .services-section { padding: 64px 24px !important; }
                    .services-head-row { flex-direction: column !important; gap: 16px !important; }
                    .services-sub { text-align: left !important; max-width: 100% !important; }
                    .services-grid { grid-template-columns: 1fr !important; }
                }
                @media (min-width: 810px) and (max-width: 1199.98px) {
                    .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
}
