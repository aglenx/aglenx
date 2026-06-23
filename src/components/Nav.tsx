import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: "Projects", href: "https://github.com/mirza-ahsan", external: true },
        { label: "Courses", href: "#" },
        { label: "Services", href: "#services" },
    ];

    return (
        <header
            className="sticky top-0 z-50 bg-bone w-full"
            style={{ borderBottom: "none" }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "22px 48px",
                }}
                className="nav-inner"
            >
                {/* Logo */}
                <a
                    href="/"
                    style={{
                        fontFamily: "\"Fraunces Variable\", serif",
                        fontSize: "26px",
                        fontWeight: 500,
                        fontStyle: "italic",
                        color: "#1c1814",
                        textDecoration: "none",
                        letterSpacing: "-0.01em",
                    }}
                >
                    Aglen<span style={{
                        fontStyle: "italic",
                        fontVariationSettings: '"opsz" 40, "wght" 800',
                        letterSpacing: "-0.02em",
                        color: "#c75b39",
                    }}>X</span>
                </a>

                {/* Desktop nav */}
                <nav
                    className="hidden-mobile"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "34px",
                    }}
                >
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            rel={l.external ? "noopener noreferrer" : undefined}
                            onClick={(e) => {
                                if (l.href === "#") e.preventDefault();
                            }}
                            style={{
                                fontFamily: "Work Sans, sans-serif",
                                fontSize: "15px",
                                fontWeight: 400,
                                color: "#1c1814",
                                textDecoration: "none",
                                transition: "color 0.25s cubic-bezier(.44,0,.56,1)",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLAnchorElement).style.color = "#c75b39")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLAnchorElement).style.color = "#1c1814")
                            }
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        style={{
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "#1c1814",
                            textDecoration: "none",
                            border: "1.5px solid #1c1814",
                            borderRadius: "100px",
                            padding: "8px 20px",
                            transition:
                                "background 0.25s cubic-bezier(.44,0,.56,1), color 0.25s cubic-bezier(.44,0,.56,1)",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.target as HTMLAnchorElement;
                            el.style.background = "#1c1814";
                            el.style.color = "#f5efe6";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.target as HTMLAnchorElement;
                            el.style.background = "transparent";
                            el.style.color = "#1c1814";
                        }}
                    >
                        Get in touch
                    </a>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="show-mobile"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "4px",
                        display: "none",
                        flexDirection: "column",
                        gap: "5px",
                    }}
                >
                    <span
                        style={{
                            display: "block",
                            width: "22px",
                            height: "1.5px",
                            background: "#1c1814",
                            transition: "transform 0.3s, opacity 0.3s",
                            transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
                        }}
                    />
                    <span
                        style={{
                            display: "block",
                            width: "22px",
                            height: "1.5px",
                            background: "#1c1814",
                            transition: "opacity 0.3s",
                            opacity: menuOpen ? 0 : 1,
                        }}
                    />
                    <span
                        style={{
                            display: "block",
                            width: "22px",
                            height: "1.5px",
                            background: "#1c1814",
                            transition: "transform 0.3s, opacity 0.3s",
                            transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
                        }}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
                        style={{
                            overflow: "hidden",
                            background: "#f5efe6",
                            borderTop: "1px solid #1c181420",
                        }}
                        className="show-mobile-block"
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0",
                                padding: "8px 22px 22px",
                            }}
                        >
                            {links.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    target={l.external ? "_blank" : undefined}
                                    rel={l.external ? "noopener noreferrer" : undefined}
                                    onClick={(e) => {
                                        if (l.href === "#") e.preventDefault();
                                        setMenuOpen(false);
                                    }}
                                    style={{
                                        fontFamily: "Work Sans, sans-serif",
                                        fontSize: "17px",
                                        fontWeight: 400,
                                        color: "#1c1814",
                                        textDecoration: "none",
                                        padding: "14px 0",
                                        borderBottom: "1px solid #1c181415",
                                    }}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    color: "#f5efe6",
                                    textDecoration: "none",
                                    background: "#1c1814",
                                    borderRadius: "100px",
                                    padding: "12px 24px",
                                    textAlign: "center",
                                    marginTop: "16px",
                                }}
                            >
                                Get in touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 809.98px) {
                    .nav-inner { padding: 18px 22px !important; }
                    .hidden-mobile { display: none !important; }
                    .show-mobile { display: flex !important; }
                    .show-mobile-block { display: block; }
                }
                @media (min-width: 810px) {
                    .show-mobile { display: none !important; }
                    .show-mobile-block { display: none !important; }
                }
            `}</style>
        </header>
    );
}
