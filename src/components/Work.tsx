import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const capabilities = [
    {
        num: "01",
        name: "AglenX Technologies",
        category: "Software Development",
        desc: "AglenX Technologies focuses on delivering high-quality software solutions for businesses and organizations. From web applications and enterprise software to cloud-based systems and custom digital platforms, we help clients transform ideas into reliable, scalable, and user-friendly products. Our goal is to combine engineering excellence with practical business value.",
        tags: ["Web Apps", "Enterprise Software", "Cloud Systems", "Digital Platforms"],
    },
    {
        num: "02",
        name: "AglenX AI",
        category: "Artificial Intelligence",
        desc: "AglenX AI is dedicated to artificial intelligence, machine learning, and data-driven innovation. We explore intelligent solutions that enable better decision-making, automation, prediction, and problem-solving. Our work spans machine learning research, predictive analytics, computer vision, and AI-powered applications designed to address real-world challenges.",
        tags: ["Machine Learning", "Predictive Analytics", "Computer Vision", "AI Applications"],
    },
    {
        num: "03",
        name: "AglenX Systems",
        category: "Systems Engineering",
        desc: "AglenX Systems specializes in the design, development, and optimization of complex software and computing infrastructures. We focus on scalable architectures, distributed systems, cloud technologies, databases, cybersecurity, and performance engineering. Our objective is to build robust systems capable of supporting modern applications at scale.",
        tags: ["Distributed Systems", "Cloud Infrastructure", "Cybersecurity", "Performance Engineering"],
    },
    {
        num: "04",
        name: "AglenX Labs",
        category: "Research & Innovation",
        desc: "AglenX Labs serves as the research and innovation arm of AglenX. It is a space for experimentation, exploration, and the development of new ideas in artificial intelligence, algorithms, systems engineering, and emerging technologies. Through research projects, open-source initiatives, and technical publications, AglenX Labs aims to contribute to the global technology community.",
        tags: ["AI Research", "Algorithms", "Open Source", "Publications"],
    },
    {
        num: "05",
        name: "AglenX Academy",
        category: "Education & Mentorship",
        desc: "AglenX Academy is committed to empowering learners through high-quality education in mathematics, computer science, artificial intelligence, and software engineering. We provide learning resources, mentorship, workshops, tutorials, and practical training designed to help students and professionals develop strong foundations and industry-ready skills.",
        tags: ["Mathematics", "Computer Science", "AI Education", "Mentorship"],
    },
];

function WorkRow({ project, index }: { project: typeof capabilities[0]; index: number }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.55, ease: [0.44, 0, 0.56, 1], delay: index * 0.08 }}
            style={{
                borderTop: index === 0 ? "1px solid #1c181429" : "none",
                borderBottom: "1px solid #1c181429",
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "30px 6px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "28px",
                    }}
                    className="work-row-left"
                >
                    <span
                        style={{
                            fontFamily: "Fraunces Variable, serif",
                            fontSize: "15px",
                            fontStyle: "italic",
                            fontWeight: 400,
                            color: "#1c181460",
                            fontVariationSettings: '"opsz" 14, "wght" 400',
                            flexShrink: 0,
                            paddingTop: "3px",
                        }}
                    >
                        {project.num}
                    </span>
                    <div>
                        <p
                            style={{
                                fontFamily: "Fraunces Variable, serif",
                                fontSize: "clamp(22px, 2.8vw, 36px)",
                                fontWeight: 400,
                                fontStyle: "italic",
                                lineHeight: "1.1",
                                color: "#1c1814",
                                fontVariationSettings: '"opsz" 36, "wght" 400',
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {project.name}
                        </p>
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: 400,
                                color: "#1c181470",
                                marginTop: "4px",
                            }}
                        >
                            {project.category}
                        </p>
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>

                    <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "32px",
                            height: "32px",
                            border: "1.5px solid #1c181430",
                            borderRadius: "50%",
                            flexShrink: 0,
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <line x1="6" y1="0" x2="6" y2="12" stroke="#1c1814" strokeWidth="1.5" />
                            <line x1="0" y1="6" x2="12" y2="6" stroke="#1c1814" strokeWidth="1.5" />
                        </svg>
                    </motion.span>
                </div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.44, 0, 0.56, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <div
                            style={{
                                padding: "0 6px 30px 52px",
                                display: "flex",
                                flexDirection: "row",
                                gap: "40px",
                                alignItems: "flex-start",
                            }}
                            className="work-expand-inner"
                        >
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "17px",
                                    fontWeight: 400,
                                    lineHeight: "1.65",
                                    color: "#1c1814",
                                    maxWidth: "560px",
                                    flex: "1 1 0",
                                }}
                            >
                                {project.desc}
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "8px",
                                    flexWrap: "wrap",
                                    flexShrink: 0,
                                }}
                                className="work-tags"
                            >
                                {project.tags.map((t) => (
                                    <span
                                        key={t}
                                        style={{
                                            fontFamily: "Work Sans, sans-serif",
                                            fontSize: "13px",
                                            fontWeight: 500,
                                            color: "#1c1814",
                                            border: "1px solid #1c181430",
                                            borderRadius: "100px",
                                            padding: "4px 12px",
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Work() {
    const headRef = useRef(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });

    return (
        <section
            id="capabilities"
            style={{
                backgroundColor: "#ebe0ce",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "110px 48px 120px",
            }}
            className="work-section"
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "56px",
                    width: "100%",
                    maxWidth: "1120px",
                }}
            >
                {/* Heading */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
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
                            color: "#c75b39",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
                        Capabilities
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
                        What we do.
                    </h2>
                </motion.div>

                {/* Accordion rows */}
                <div>
                    {capabilities.map((p, i) => (
                        <WorkRow key={p.num} project={p} index={i} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .work-section { padding: 72px 24px 80px !important; }
                    .work-year { display: none !important; }
                    .work-expand-inner { flex-direction: column !important; padding-left: 0 !important; }
                    .work-tags { flex-direction: row !important; }
                    .work-row-left { gap: 16px !important; }
                }
            `}</style>
        </section>
    );
}
