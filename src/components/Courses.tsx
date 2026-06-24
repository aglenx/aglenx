import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
    {
        title: "Mathematics for O-Level & A-Level",
        desc: "Develop strong analytical and problem-solving skills through comprehensive coverage of algebra, calculus, mechanics, statistics, and examination-focused preparation.",
    },
    {
        title: "Physics for O-Level & A-Level",
        desc: "Master fundamental concepts in mechanics, electricity, waves, thermal physics, and modern physics through conceptual learning, numerical problem solving, and examination strategies designed for Cambridge and equivalent curricula.",
    },
    {
        title: "Computer Science for O-Level & A-Level",
        desc: "Build a solid understanding of programming, algorithms, data representation, databases, and computational thinking with practical examples and guided learning.",
    },
    {
        title: "Programming with Python & C++",
        desc: "Learn modern programming from fundamentals to advanced concepts including object-oriented programming, problem solving, and software development best practices.",
    },
    {
        title: "Data Structures & Algorithms",
        desc: "Gain a strong foundation in algorithmic thinking, complexity analysis, and essential data structures used in software engineering and technical interviews.",
    },
    {
        title: "Machine Learning Foundations",
        desc: "Explore the fundamentals of machine learning, regression, optimization, model evaluation, and practical implementation using Python and modern ML tools.",
    },
];

export default function Courses() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            id="courses"
            style={{
                backgroundColor: "#ebe0ce",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "100px 48px",
            }}
            className="courses-section"
            ref={ref}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "64px",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        width: "100%",
                    }}
                    className="courses-head-row"
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#1c181480",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Education
                        </p>
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
                            Courses we offer.
                        </h2>
                    </div>

                    <p
                        style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "17px",
                            fontWeight: 400,
                            lineHeight: "1.65",
                            color: "#1c1814b0",
                            maxWidth: "400px",
                            textAlign: "right",
                        }}
                        className="courses-sub"
                    >
                        We build strong technical foundations through guided learning and mentorship.
                    </p>
                </motion.div>

                {/* Course grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1px",
                        background: "#1c181410",
                        borderRadius: "2px",
                        overflow: "hidden",
                    }}
                    className="courses-grid"
                >
                    {courses.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.55,
                                ease: [0.44, 0, 0.56, 1],
                                delay: 0.15 + i * 0.07,
                            }}
                            style={{
                                background: "#ebe0ce",
                                padding: "36px 32px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px",
                                transition: "background 0.25s ease",
                            }}
                            whileHover={{ backgroundColor: "#e2d6c1" }}
                        >
                            <p
                                style={{
                                    fontFamily: "Fraunces Variable, serif",
                                    fontSize: "22px",
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    lineHeight: "1.2",
                                    color: "#1c1814",
                                    fontVariationSettings: '"opsz" 20, "wght" 400',
                                }}
                            >
                                {c.title}
                            </p>
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    lineHeight: "1.6",
                                    color: "#1c1814b0",
                                }}
                            >
                                {c.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .courses-section { padding: 64px 24px !important; }
                    .courses-head-row { flex-direction: column !important; gap: 16px !important; align-items: flex-start !important; }
                    .courses-sub { text-align: left !important; max-width: 100% !important; }
                    .courses-grid { grid-template-columns: 1fr !important; }
                }
                @media (min-width: 810px) and (max-width: 1199.98px) {
                    .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
}
