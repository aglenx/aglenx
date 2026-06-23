import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <section
            id="contact"
            style={{
                backgroundColor: "#c75b39",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "110px 48px 56px",
            }}
            className="contact-section"
        >
            <div
                ref={ref}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "56px",
                    width: "100%",
                    maxWidth: "1120px",
                }}
            >
                {/* Top: headline + intro */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "40px",
                    }}
                    className="contact-top"
                >
                    <h2
                        style={{
                            fontFamily: "Fraunces Variable, serif",
                            fontSize: "clamp(40px, 6vw, 80px)",
                            fontWeight: 400,
                            fontStyle: "italic",
                            lineHeight: "1.05",
                            letterSpacing: "-0.02em",
                            color: "#f5efe6",
                            fontVariationSettings: '"opsz" 72, "wght" 400',
                            maxWidth: "600px",
                        }}
                    >
                        Let's build something together.
                    </h2>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            maxWidth: "360px",
                            paddingTop: "8px",
                        }}
                        className="contact-right"
                    >
                        <p
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "17px",
                                fontWeight: 400,
                                lineHeight: "1.65",
                                color: "#f5efe6b0",
                            }}
                        >
                            Interested in software engineering, AI solutions, research collaborations, or educational initiatives? We'd love to hear from you.
                        </p>
                        <a
                            href="mailto:contact@aglenx.com"
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "15px",
                                fontWeight: 500,
                                color: "#f5efe6",
                                textDecoration: "underline",
                                textUnderlineOffset: "3px",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                        >
                            contact@aglenx.com
                        </a>
                    </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        borderTop: "1px solid #f5efe625",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "34px",
                        paddingBottom: "0",
                    }}
                    className="contact-footer-row"
                >
                    {/* Logo */}
                    <span
                        style={{
                            fontFamily: "Fraunces Variable, serif",
                            fontSize: "18px",
                            fontWeight: 400,
                            fontStyle: "italic",
                            color: "#f5efe6",
                            fontVariationSettings: '"opsz" 20, "wght" 400',
                        }}
                    >
                        AglenX
                    </span>

                    {/* Social / links */}
                    <div style={{ display: "flex", flexDirection: "row", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                        {[
                            {
                                label: "GitHub",
                                href: "https://github.com/mirza-ahsan",
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                )
                            },
                            {
                                label: "LinkedIn",
                                href: "https://linkedin.com",
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                )
                            },
                            {
                                label: "X",
                                href: "https://x.com/aglenxtech",
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                )
                            },
                            {
                                label: "Instagram",
                                href: "https://instagram.com/aglenxtech",
                                icon: (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                )
                            },
                        ].map((s, i, arr) => (
                            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        color: "#f5efe6c0",
                                        textDecoration: "none",
                                        transition: "color 0.2s",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f5efe6")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f5efe6c0")}
                                >
                                    {s.icon}
                                    {s.label !== "X" && s.label}
                                </a>
                                {i < arr.length - 1 && (
                                    <span style={{ color: "#f5efe670" }}>•</span>
                                )}
                            </div>
                        ))}


                    </div>
                </motion.div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        width: "100%",
                        marginTop: "16px",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#f5efe6b0",
                        }}
                    >
                        © {new Date().getFullYear()} AglenX. All rights reserved.
                    </p>
                    <p
                        style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#f5efe6b0",
                        }}
                    >
                        AI • Systems • Research • Education
                    </p>
                </div>
            </div>

            <style>{`
                @media (max-width: 809.98px) {
                    .contact-section { padding: 72px 24px 40px !important; }
                    .contact-top { flex-direction: column !important; gap: 28px !important; }
                    .contact-right { max-width: 100% !important; }
                    .contact-footer-row { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
                }
            `}</style>
        </section>
    );
}
