import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        num: "01",
        name: "Super Outsourcing Solutions (SOS-SMSF)",
        category: "Web Development · Client Work",
        desc: "A premium business website developed for an Australian SMSF administration and compliance firm, designed to establish trust, communicate value, and generate qualified B2B leads. Built using React, Vite, Tailwind CSS, and Framer Motion, the platform combines a refined editorial design system with modern web engineering practices. Key features include responsive architecture, scroll-aware navigation, direct contact integration, performance optimization, and a custom \"Sage & Slate\" visual identity. The project demonstrates expertise in professional UI/UX design, frontend engineering, responsive development, and delivering real-world digital solutions for international clients.",
        tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "UI/UX Design"],
        meta: [
            { label: "Client", value: "Australian Audit & SMSF Administration Firm" },
            { label: "Role", value: "Full-Stack Web Developer & UI Designer" },
            { label: "Technologies", value: "React, Vite, Tailwind CSS, Framer Motion" },
        ],
    },
    {
        num: "02",
        name: "Fortis",
        category: "AI · Sports Science",
        desc: "An AI-powered athlete workload management and injury forecasting platform utilizing multimodal wearable sensor data and deep learning techniques. Built using Python, Keras, FastAPI, and React, the system analyzes athlete performance metrics to identify injury risks, optimize training workloads, and support data-driven decision-making in sports science and performance management.",
        tags: ["Python", "Keras", "FastAPI", "React", "Deep Learning"],
    },
    {
        num: "03",
        name: "Spectra",
        category: "MLOps · Cloud Engineering",
        desc: "An end-to-end MLOps image classification platform powered by Google's ResNet architecture. The system leverages Azure Cloud for deployment, PostgreSQL for prediction storage, Docker for containerization, and DVC for data and model versioning. Spectra demonstrates practical machine learning engineering, cloud deployment, automation pipelines, and scalable AI system design.",
        tags: ["ResNet", "Azure", "PostgreSQL", "Docker", "DVC", "MLOps"],
    },
    {
        num: "04",
        name: "StepWise",
        category: "Education · Algorithm Visualization",
        desc: "An interactive algorithm visualization platform developed in Flutter to help learners understand fundamental data structures and algorithms through real-time visual demonstrations. The platform transforms complex computational concepts into intuitive visual experiences, making algorithmic learning more accessible and engaging.",
        tags: ["Flutter", "Data Structures", "Algorithms", "Visualization"],
    },
    {
        num: "05",
        name: "Football Management System",
        category: "Web Development · Sports",
        desc: "A modern web application developed with React and Next.js for tracking and presenting standings, fixtures, and results from Europe's top football leagues. Data is stored and managed using T-SQL, providing efficient querying and structured data management while delivering a responsive user experience.",
        tags: ["React", "Next.js", "T-SQL", "Sports Data"],
    },
    {
        num: "06",
        name: "Penance",
        category: "Game Development",
        desc: "A story-driven 2D platformer built with C++ and Raylib. Players navigate challenging environments as a knight protagonist through handcrafted levels featuring platforming mechanics, combat elements, and narrative progression. The project showcases game design principles, physics implementation, animation systems, and interactive storytelling.",
        tags: ["C++", "Raylib", "Game Design", "Physics", "2D Platformer"],
    },
    {
        num: "07",
        name: "Chess",
        category: "Game Development · Systems",
        desc: "A fully functional chess game built in C++ with SFML, implementing complete chess rules, piece movement validation, game-state management, check/checkmate detection, and interactive user controls. The project demonstrates strong algorithmic thinking, object-oriented design, and game engine fundamentals.",
        tags: ["C++", "SFML", "OOP", "Algorithms", "Game Engine"],
    },
    {
        num: "08",
        name: "Bejewelled Blitz",
        category: "Game Development",
        desc: "A match puzzle game inspired by classic tile-matching mechanics, developed in C++ using the SFML graphics framework. The project focuses on real-time game logic, event handling, animations, score tracking, and object-oriented game architecture while delivering a smooth and engaging gameplay experience.",
        tags: ["C++", "SFML", "OOP", "Game Logic", "Animations"],
    },
    {
        num: "09",
        name: "Nudge",
        category: "Mobile Development",
        desc: "A cross-platform subscription management and payment reminder application developed using Flutter. The application helps users track recurring expenses, receive timely payment notifications, and manage subscriptions efficiently through an intuitive mobile-first interface.",
        tags: ["Flutter", "Cross-Platform", "Mobile", "Notifications"],
    },
    {
        num: "10",
        name: "MazeRunner",
        category: "Systems · Low-Level Programming",
        desc: "A Pac-Man-inspired maze navigation game developed entirely in x86 Assembly Language. The project demonstrates low-level programming expertise, memory management, hardware interaction, and performance optimization while implementing game mechanics, collision detection, and player movement from the ground up.",
        tags: ["x86 Assembly", "Low-Level", "Memory Management", "Game Mechanics"],
    },
];

type Project = {
    num: string;
    name: string;
    category: string;
    desc: string;
    tags: string[];
    meta?: { label: string; value: string }[];
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.55, ease: [0.44, 0, 0.56, 1], delay: index * 0.07 }}
            style={{
                borderTop: index === 0 ? "1px solid #f5efe620" : "none",
                borderBottom: "1px solid #f5efe620",
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
                    padding: "28px 6px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "28px",
                    }}
                    className="project-row-left"
                >
                    <span
                        style={{
                            fontFamily: "Fraunces Variable, serif",
                            fontSize: "15px",
                            fontStyle: "italic",
                            fontWeight: 400,
                            color: "#f5efe650",
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
                                color: "#f5efe6",
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
                                color: "#f5efe660",
                                marginTop: "4px",
                            }}
                        >
                            {project.category}
                        </p>
                    </div>
                </div>

                <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        border: "1.5px solid #f5efe630",
                        borderRadius: "50%",
                        flexShrink: 0,
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <line x1="6" y1="0" x2="6" y2="12" stroke="#f5efe6" strokeWidth="1.5" />
                        <line x1="0" y1="6" x2="12" y2="6" stroke="#f5efe6" strokeWidth="1.5" />
                    </svg>
                </motion.span>
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
                            className="project-expand-inner"
                        >
                            <p
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "17px",
                                    fontWeight: 400,
                                    lineHeight: "1.65",
                                    color: "#f5efe6b0",
                                    maxWidth: "560px",
                                    flex: "1 1 0",
                                }}
                            >
                                {project.desc}
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "16px", flexShrink: 0 }}>
                                {project.tags.length > 0 && (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            gap: "8px",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {project.tags.map((t) => (
                                            <span
                                                key={t}
                                                style={{
                                                    fontFamily: "Work Sans, sans-serif",
                                                    fontSize: "13px",
                                                    fontWeight: 500,
                                                    color: "#f5efe6",
                                                    border: "1px solid #f5efe630",
                                                    borderRadius: "100px",
                                                    padding: "4px 12px",
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {project.meta && (
                                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                        {project.meta.map((m) => (
                                            <p key={m.label} style={{ fontFamily: "Work Sans, sans-serif", fontSize: "13px", fontWeight: 400, color: "#f5efe670", lineHeight: "1.5" }}>
                                                <span style={{ color: "#f5efe6a0", fontWeight: 500 }}>{m.label}:</span> {m.value}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function Projects() {
    const headRef = useRef(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });

    return (
        <section
            id="projects"
            style={{
                backgroundColor: "#1c1814",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "100px 48px",
            }}
            className="projects-section"
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
                {/* Header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "24px",
                    }}
                    className="projects-header"
                >
                    <div>
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#f5efe690",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                marginBottom: "16px",
                            }}
                        >
                            Selected Work
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
                            Things we've built.
                        </h2>
                    </div>
                </motion.div>

                {/* Accordion list */}
                <div>
                    {projects.map((project, i) => (
                        <ProjectRow key={project.num} project={project} index={i} />
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .projects-section { padding: 72px 24px !important; }
                    .projects-header { flex-direction: column !important; align-items: flex-start !important; }
                    .project-row-left { gap: 16px !important; }
                    .project-expand-inner { flex-direction: column !important; padding-left: 32px !important; }
                }
            `}</style>
        </section>
    );
}
