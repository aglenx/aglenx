import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            style={{
                backgroundColor: "#f5efe6",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "96px 48px 120px",
            }}
            className="hero-section"
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "30px",
                    width: "100%",
                    maxWidth: "1120px",
                }}
            >
                {/* Tag line */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        fontFamily: "Work Sans, sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#c75b39",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                    }}
                >
                    Technology · AI · Systems · Research · Education
                </motion.p>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: 0.1 }}
                    style={{
                        fontFamily: "Fraunces Variable, serif",
                        fontSize: "clamp(48px, 7vw, 96px)",
                        fontWeight: 400,
                        fontStyle: "italic",
                        lineHeight: "1.05",
                        letterSpacing: "-0.02em",
                        color: "#1c1814",
                        fontVariationSettings: '"opsz" 72, "wght" 400',
                        maxWidth: "900px",
                    }}
                >
                    Building intelligent systems, innovative software, and impactful digital solutions.
                </motion.h1>

                {/* Bottom row: description + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1], delay: 0.22 }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingTop: "34px",
                        gap: "40px",
                    }}
                    className="hero-bottom"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0",
                            maxWidth: "480px",
                            width: "480px",
                        }}
                        className="hero-desc-col"
                    >
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "18px",
                                fontWeight: 400,
                                lineHeight: "1.65",
                                color: "#1c1814",
                            }}
                        >
                            AglenX bridges academic excellence and real-world engineering — across software development, AI, systems engineering, research, and education.
                        </p>
                    </div>


                </motion.div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .hero-section { padding: 60px 24px 72px !important; }
                    .hero-bottom {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 28px !important;
                        padding-top: 28px !important;
                    }
                    .hero-desc-col { width: 100% !important; max-width: 100% !important; }
                }
            `}</style>
        </section>
    );
}
