import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const servicesMap: Record<string, string[]> = {
    "Start a Project": [
        "Web Development",
        "AI & Machine Learning",
        "System Design & Architecture",
        "Mobile App Development",
        "UI/UX Design",
        "Other"
    ],
    "Join AglenX Academy": [
        "O Level Tutoring",
        "A Level Tutoring",
        "University Mentoring",
        "Other"
    ],
    "Research Collaboration": [
        "Research & Data Science",
        "AI & Machine Learning",
        "System Design & Architecture",
        "Other"
    ]
};

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    const [inquiryType, setInquiryType] = useState("Start a Project");

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        country: "",
        whatsapp: "",
        service: "",
        currency: "USD",
        budget: "",
        notSure: false,
        timeline: "",
        description: "",
    });

    // Validation State
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({ ...formData, [name]: checked });
            if (checked && name === "notSure") {
                setErrors({ ...errors, budget: "" });
            }
        } else {
            setFormData({ ...formData, [name]: value });
            if (errors[name]) setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Please provide your full name.";
        if (!formData.email.trim()) {
            newErrors.email = "Email address is missing.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format. It must contain an '@' symbol and a valid domain.";
        }
        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = "WhatsApp number is missing.";
        } else if (!/^\+\d{10,15}$/.test(formData.whatsapp.replace(/[\s-]/g, ''))) {
            newErrors.whatsapp = "Invalid format. Must start with a '+' sign, your country code, and contain 10-15 digits (e.g., +923191079594).";
        }
        if (!formData.service) newErrors.service = "Please select a required service from the dropdown.";
        if (!formData.description.trim()) newErrors.description = "Please describe your project or request.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "0503d36a-a134-4487-954d-db946be0f2f1",
                    subject: `New Inquiry: ${formData.service || inquiryType}`,
                    ...formData
                })
            });
            
            if (response.ok) {
            
            setIsSuccess(true);
            setFormData({
                name: "", email: "", company: "", country: "", whatsapp: "", service: "", 
                currency: "USD", budget: "", notSure: false, timeline: "", description: ""
            });
            setErrors({});
            
            
                setTimeout(() => setIsSuccess(false), 6000);
            } else {
                const data = await response.json().catch(() => ({}));
                setSubmitError(data.message || "Something went wrong. Please try emailing us directly.");
                console.error("Form submission failed", data);
            }
        } catch (error) {
            console.error(error);
            setSubmitError("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };



    const inputStyles = {
        width: "100%",
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid #f5efe650",
        color: "#f5efe6",
        fontFamily: "Work Sans, sans-serif",
        fontSize: "16px",
        padding: "12px 0",
        outline: "none",
        transition: "border-color 0.2s",
    };

    const labelStyles = {
        fontFamily: "Work Sans, sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        color: "#f5efe6a0",
        marginBottom: "4px",
        display: "block",
    };

    return (
        <section
            id="contact"
            style={{
                backgroundColor: "#1c1814",
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
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px",
                    }}
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
                            maxWidth: "800px",
                        }}
                    >
                        Let's build something together.
                    </h2>

                    {/* Inquiry Type Tabs */}
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                        {[
                            { title: "Start a Project", subtitle: "For commercial clients" },
                            { title: "Join AglenX Academy", subtitle: "For tutoring/students" },
                            { title: "Research Collaboration", subtitle: "For universities and researchers" },
                        ].map((tab) => (
                            <button
                                key={tab.title}
                                onClick={() => {
                                    setInquiryType(tab.title);
                                    setFormData(prev => ({ ...prev, service: "", timeline: "", company: "", budget: "", notSure: false }));
                                }}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    padding: "16px 24px",
                                    background: inquiryType === tab.title ? "#f5efe6" : "transparent",
                                    border: `1.5px solid ${inquiryType === tab.title ? "#f5efe6" : "#f5efe640"}`,
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                            >
                                <span style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: inquiryType === tab.title ? "#1c1814" : "#f5efe6",
                                }}>
                                    {tab.title}
                                </span>
                                <span style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "13px",
                                    color: inquiryType === tab.title ? "#1c1814a0" : "#f5efe6a0",
                                }}>
                                    {tab.subtitle}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Form & Direct Contact Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.65, delay: 0.2, ease: [0.44, 0, 0.56, 1] }}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "64px",
                        width: "100%",
                    }}
                    className="contact-layout"
                >
                    {/* Form Area */}
                    <form onSubmit={handleEmailSubmit} style={{ flex: "1", display: "flex", flexDirection: "column", gap: "32px" }}>
                        
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }} className="form-grid">
                            <div>
                                <label style={labelStyles}>Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    style={{ ...inputStyles, borderBottomColor: errors.name ? "red" : "#f5efe650" }}
                                    placeholder="John Doe"
                                />
                                {errors.name && <span style={{ color: "red", fontSize: "12px", fontFamily: "Work Sans", marginTop: "4px", display: "block" }}>{errors.name}</span>}
                            </div>
                            <div>
                                <label style={labelStyles}>Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={{ ...inputStyles, borderBottomColor: errors.email ? "red" : "#f5efe650" }}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <span style={{ color: "red", fontSize: "12px", fontFamily: "Work Sans", marginTop: "4px", display: "block" }}>{errors.email}</span>}
                            </div>
                            {inquiryType !== "Join AglenX Academy" && (
                                <div>
                                    <label style={labelStyles}>Company / Organization</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        style={inputStyles}
                                        placeholder="Company Name"
                                    />
                                </div>
                            )}
                            <div>
                                <label style={labelStyles}>Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    style={inputStyles}
                                    placeholder="e.g. Pakistan"
                                />
                            </div>
                            <div>
                                <label style={labelStyles}>WhatsApp Number *</label>
                                <input
                                    type="text"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleInputChange}
                                    style={{ ...inputStyles, borderBottomColor: errors.whatsapp ? "red" : "#f5efe650" }}
                                    placeholder="+92 300 1234567"
                                />
                                {errors.whatsapp && <span style={{ color: "red", fontSize: "12px", fontFamily: "Work Sans", marginTop: "4px", display: "block" }}>{errors.whatsapp}</span>}
                            </div>
                            <div>
                                <label style={labelStyles}>Service Required *</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    style={{ ...inputStyles, borderBottomColor: errors.service ? "red" : "#f5efe650", backgroundColor: "transparent", cursor: "pointer" }}
                                >
                                    <option value="" disabled>Select a service</option>
                                    {(servicesMap[inquiryType] || []).map((svc) => (
                                        <option key={svc} value={svc}>{svc}</option>
                                    ))}
                                </select>
                                {errors.service && <span style={{ color: "red", fontSize: "12px", fontFamily: "Work Sans", marginTop: "4px", display: "block" }}>{errors.service}</span>}
                            </div>
                            {inquiryType !== "Join AglenX Academy" && (
                                <div>
                                    <label style={labelStyles}>Project Budget</label>
                                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                        <select
                                            name="currency"
                                            value={formData.currency}
                                            onChange={handleInputChange}
                                            style={{ ...inputStyles, width: "80px", backgroundColor: "transparent", cursor: "pointer" }}
                                            disabled={formData.notSure}
                                        >
                                            <option value="USD">USD</option>
                                            <option value="AUD">AUD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                            <option value="PKR">PKR</option>
                                            <option value="CAD">CAD</option>
                                            <option value="SGD">SGD</option>
                                            <option value="AED">AED</option>
                                        </select>
                                        <input
                                            type="text"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            style={inputStyles}
                                            placeholder="Amount"
                                            disabled={formData.notSure}
                                        />
                                    </div>
                                    <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                                        <input
                                            type="checkbox"
                                            name="notSure"
                                            id="notSure"
                                            checked={formData.notSure}
                                            onChange={handleInputChange}
                                            style={{ accentColor: "#f5efe6", width: "16px", height: "16px" }}
                                        />
                                        <label htmlFor="notSure" style={{ fontFamily: "Work Sans", fontSize: "14px", color: "#f5efe6", cursor: "pointer" }}>Not Sure Yet</label>
                                    </div>
                                </div>
                            )}
                            <div>
                                <label style={labelStyles}>{inquiryType === "Join AglenX Academy" ? "Duration of Tutoring" : "Project Timeline"}</label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    style={{ ...inputStyles, backgroundColor: "transparent", cursor: "pointer" }}
                                >
                                    {inquiryType === "Join AglenX Academy" ? (
                                        <>
                                            <option value="" disabled>Select duration</option>
                                            <option value="Crash Course">Crash Course</option>
                                            <option value="1 Month">1 Month</option>
                                            <option value="3 Months">3 Months</option>
                                            <option value="6 Months">6 Months</option>
                                            <option value="Full Academic Year">Full Academic Year</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="" disabled>Select timeline</option>
                                            <option value="ASAP">ASAP</option>
                                            <option value="Within 1 Month">Within 1 Month</option>
                                            <option value="Within 3 Months">Within 3 Months</option>
                                            <option value="Long-Term Partnership">Long-Term Partnership</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyles}>{inquiryType === "Join AglenX Academy" ? "Subject Details *" : "Project Description *"}</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                style={{ ...inputStyles, minHeight: "120px", resize: "vertical", borderBottomColor: errors.description ? "red" : "#f5efe650" }}
                                placeholder={inquiryType === "Join AglenX Academy" ? "Please list the subjects you wish to study and any specific areas of focus." : "Tell us about your project, goals, requirements, and any relevant details."}
                            />
                            {errors.description && <span style={{ color: "red", fontSize: "12px", fontFamily: "Work Sans", marginTop: "4px", display: "block" }}>{errors.description}</span>}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#1c1814",
                                    backgroundColor: "#f5efe6",
                                    padding: "16px 32px",
                                    border: "none",
                                    borderRadius: "100px",
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                    width: "fit-content",
                                    transition: "opacity 0.2s",
                                    opacity: isSubmitting ? 0.7 : 1,
                                }}
                                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.opacity = "0.9")}
                                onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.opacity = "1")}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                            </button>
                            {isSuccess && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "15px",
                                        color: "#25D366",
                                        margin: 0,
                                    }}
                                >
                                    Your request has been recorded. We will get back to you shortly.
                                </motion.p>
                            )}
                            {submitError && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "15px",
                                        color: "red",
                                        margin: 0,
                                    }}
                                >
                                    {submitError}
                                </motion.p>
                            )}
                            {Object.keys(errors).length > 0 && (
                                <motion.p
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "14px",
                                        color: "red",
                                        margin: 0,
                                        maxWidth: "400px",
                                    }}
                                >
                                    Unable to submit: Please fix the {Object.keys(errors).length} error{Object.keys(errors).length > 1 ? "s" : ""} highlighted in red above.
                                </motion.p>
                            )}
                        </div>
                    </form>

                    {/* Direct Contact Side */}
                    <div
                        style={{
                            width: "360px",
                            backgroundColor: "#1c181410",
                            padding: "40px",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "32px",
                            height: "fit-content",
                        }}
                        className="direct-contact-card"
                    >
                        <div>
                            <h3 style={{ fontFamily: "Fraunces Variable, serif", fontSize: "28px", fontWeight: 400, color: "#f5efe6", marginBottom: "8px" }}>
                                Prefer a direct conversation?
                            </h3>
                            <p style={{ fontFamily: "Work Sans", fontSize: "15px", color: "#f5efe6b0", lineHeight: "1.5" }}>
                                Many clients prefer WhatsApp over forms. Reach out directly or schedule a call.
                            </p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <a
                                href="https://wa.me/923191079594"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    backgroundColor: "#25D366", // WhatsApp Green
                                    color: "#ffffff",
                                    fontFamily: "Work Sans",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    padding: "16px 20px",
                                    borderRadius: "8px",
                                    border: "none",
                                    cursor: "pointer",
                                    width: "100%",
                                    textDecoration: "none",
                                    transition: "opacity 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.13.551 4.2 1.597 6.03L0 24l6.097-1.593A11.95 11.95 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22c-1.83 0-3.623-.49-5.2-1.42l-.37-.22-3.86 1.01 1.03-3.76-.24-.38A9.97 9.97 0 012.031 12c0-5.514 4.486-10 10-10 5.514 0 10 4.486 10 10s-4.486 10-10 10zm5.49-7.51c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.95 1.18c-.18.2-.35.23-.65.08-1.52-.75-2.83-1.63-3.88-3.08-.12-.17-.01-.27.14-.42.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.48-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.15 4.55.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"/>
                                </svg>
                                💬 WhatsApp Business
                            </a>
                            
                            <a
                                href="mailto:contact@aglenx.com"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    backgroundColor: "rgba(245, 239, 230, 0.1)",
                                    color: "#f5efe6",
                                    fontFamily: "Work Sans",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    padding: "16px 20px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(245, 239, 230, 0.2)",
                                    textDecoration: "none",
                                    width: "100%",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(245, 239, 230, 0.15)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(245, 239, 230, 0.1)")}
                            >
                                📧 contact@aglenx.com
                            </a>

                            <a
                                href="#contact"
                                onClick={(e) => { e.preventDefault(); alert("Calendar integration coming soon!"); }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    backgroundColor: "rgba(245, 239, 230, 0.1)",
                                    color: "#f5efe6",
                                    fontFamily: "Work Sans",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    padding: "16px 20px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(245, 239, 230, 0.2)",
                                    textDecoration: "none",
                                    width: "100%",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(245, 239, 230, 0.15)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(245, 239, 230, 0.1)")}
                            >
                                📅 Schedule a Discovery Call
                            </a>
                        </div>
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
                        marginTop: "20px",
                    }}
                    className="contact-footer-row"
                >
                    {/* Logo */}
                    <span
                        style={{
                            fontFamily: "Fraunces Variable, serif",
                            fontSize: "24px",
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
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                )
                            },
                            {
                                label: "LinkedIn",
                                href: "https://linkedin.com",
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                )
                            },
                            {
                                label: "X",
                                href: "https://x.com/aglenxtech",
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                )
                            },
                            {
                                label: "Instagram",
                                href: "https://instagram.com/aglenxtech",
                                icon: (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                )
                            },
                        ].map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#f5efe6c0",
                                    textDecoration: "none",
                                    transition: "color 0.2s, transform 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#f5efe6";
                                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#f5efe6c0";
                                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                                }}
                            >
                                {s.icon}
                            </a>
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
                            fontSize: "15px",
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
                    .contact-layout { flex-direction: column !important; gap: 48px !important; }
                    .form-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
                    .direct-contact-card { width: 100% !important; padding: 24px !important; }
                    .contact-footer-row { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
                }
                
                /* Remove default outline and add custom styling for autofill and focus */
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus,
                textarea:-webkit-autofill,
                textarea:-webkit-autofill:hover,
                textarea:-webkit-autofill:focus,
                select:-webkit-autofill,
                select:-webkit-autofill:hover,
                select:-webkit-autofill:focus {
                    -webkit-text-fill-color: #f5efe6;
                    -webkit-box-shadow: 0 0 0px 1000px #1c1814 inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
                
                input:focus, textarea:focus, select:focus {
                    border-bottom-color: #f5efe6 !important;
                }
                
                /* Ensure dropdown options are readable and distinct from background */
                option {
                    background-color: #1c1814;
                    color: #f5efe6;
                }
            `}</style>
        </section>
    );
}
