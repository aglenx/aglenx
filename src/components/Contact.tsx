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
                            Tell us about your project. We respond to every inquiry within
                            one business day.
                        </p>
                        <a
                            href="mailto:hello@aglenx.com"
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
                            hello@aglenx.com
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
                    <div style={{ display: "flex", flexDirection: "row", gap: "24px", alignItems: "center" }}>
                        {[
                            { label: "Twitter", href: "https://twitter.com" },
                            { label: "LinkedIn", href: "https://linkedin.com" },
                            { label: "GitHub", href: "https://github.com" },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 400,
                                    color: "#f5efe670",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f5efe6")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f5efe670")}
                            >
                                {s.label}
                            </a>
                        ))}

                        {/* Arrow circle */}
                        <a
                            href="mailto:hello@aglenx.com"
                            aria-label="Email us"
                            style={{
                                width: "52px",
                                height: "52px",
                                borderRadius: "50%",
                                border: "1.5px solid #f5efe6",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textDecoration: "none",
                                transition: "background 0.25s ease",
                                flexShrink: 0,
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.background = "#f5efe6";
                                (el.querySelector("svg path") as SVGPathElement).style.stroke = "#c75b39";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.background = "transparent";
                                (el.querySelector("svg path") as SVGPathElement).style.stroke = "#f5efe6";
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path
                                    d="M4 14L14 4M14 4H7M14 4V11"
                                    stroke="#f5efe6"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ transition: "stroke 0.25s" }}
                                />
                            </svg>
                        </a>
                    </div>
                </motion.div>
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
