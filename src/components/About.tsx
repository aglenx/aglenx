import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    const fadeUp: any = {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.44, 0, 0.56, 1], delay: i * 0.12 },
        }),
    };

    return (
        <section
            ref={ref}
            id="studio"
            style={{
                backgroundColor: "#f5efe6",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "110px 48px 120px",
            }}
            className="about-section"
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "78px",
                    width: "100%",
                    maxWidth: "1120px",
                }}
            >
                {/* Two-column layout */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "90px",
                        width: "100%",
                        alignItems: "flex-start",
                    }}
                    className="about-row"
                >
                    {/* Left: label + number */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "14px",
                            width: "240px",
                            flexShrink: 0,
                        }}
                        className="about-label-col"
                    >
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#c75b39",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Our Mission
                        </p>

                    </motion.div>

                    {/* Right: body */}
                    <motion.div
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "22px",
                            flex: "1 0 0",
                            maxWidth: "640px",
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "Fraunces Variable, serif",
                                fontSize: "clamp(32px, 3.5vw, 48px)",
                                fontWeight: 400,
                                fontStyle: "italic",
                                lineHeight: "1.15",
                                letterSpacing: "-0.01em",
                                color: "#1c1814",
                                fontVariationSettings: '"opsz" 48, "wght" 400',
                            }}
                        >
                            Where rigour meets real-world impact.
                        </h2>
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "18px",
                                fontWeight: 400,
                                lineHeight: "1.65",
                                color: "#1c1814",
                            }}
                        >
                            AglenX is a technology-driven venture building intelligent systems, innovative software, and impactful digital solutions. We operate at the intersection of academic excellence and real-world engineering — spanning software development, artificial intelligence, systems engineering, research, and education.
                        </p>

                        {/* Blockquote */}
                        <blockquote
                            style={{
                                borderLeft: "6px solid #c75b39",
                                paddingLeft: "40px",
                                paddingTop: "6px",
                                paddingBottom: "6px",
                                margin: "0",
                            }}
                            className="about-blockquote"
                        >
                            <p
                                style={{
                                    fontFamily: "Fraunces Variable, serif",
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    lineHeight: "1.2",
                                    color: "#c75b39",
                                    fontVariationSettings: '"opsz" 20, "wght" 500',
                                }}
                            >
                                "We exist at the boundary where research becomes product, where algorithms meet users, and where education becomes the foundation for the next generation of engineers."
                            </p>
                        </blockquote>
                    </motion.div>
                </div>

                {/* Stats row */}
                <motion.div
                    custom={2}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "100px",
                        width: "100%",
                        paddingTop: "34px",
                        borderTop: "1px solid #1c181429",
                        alignItems: "flex-end",
                    }}
                    className="about-stats"
                >
                    {[
                        { num: "5", label: "Focus areas" },
                        { num: "AI & Systems", label: "Research & engineering", numSize: "28px" },
                        { num: "∞", label: "Education & mentorship" },
                    ].map((s: { num: string; label: string; numSize?: string }) => (
                        <div
                            key={s.num}
                            className="about-stat-item"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: "Fraunces Variable, serif",
                                    fontSize: s.numSize ?? "48px",
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    lineHeight: "1",
                                    color: "#1c1814",
                                    fontVariationSettings: '"opsz" 48, "wght" 400',
                                }}
                            >
                                {s.num}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    color: "#1c181480",
                                }}
                            >
                                {s.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .about-section { padding: 72px 24px 80px !important; }
                    .about-row { flex-direction: column !important; gap: 24px !important; }
                    .about-label-col { width: 100% !important; }
                    .about-blockquote { padding-left: 24px !important; }
                    .about-stats { flex-direction: column !important; gap: 28px !important; align-items: center !important; }
                    .about-stat-item { align-items: center !important; text-align: center; }
                }
                @media (min-width: 810px) and (max-width: 1199.98px) {
                    .about-row { gap: 48px !important; }
                }
            `}</style>
        </section>
    );
}
