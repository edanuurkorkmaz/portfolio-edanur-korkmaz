export const emailjsConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

// Validation function
export const validateEmailJSConfig = () => {
    const { serviceId, templateId, publicKey } = emailjsConfig;

    if (!serviceId || !templateId || !publicKey) {
        console.error(
            "EmailJS configuration incomplete. Please check your environment variables."
        );
        return false;
    }

    // if (
    //     serviceId === "service_4ja3jds" ||
    //     templateId === "template_ely79hc" ||
    //     publicKey === "LMRVez-qpQWsbrI6P"
    // ) {
    //     console.error(
    //         "Please replace placeholder values with actual EmailJS credentials."
    //     );
    //     return false;
    // }

    return true;
};

// Rate limiting helper (optional)
export const rateLimiter = {
    attempts: new Map(),

    canSend(email) {
        const now = Date.now();
        const lastAttempt = this.attempts.get(email);

        // Allow 1 email per minute per email address
        if (lastAttempt && now - lastAttempt < 60000) {
            return false;
        }

        this.attempts.set(email, now);
        return true;
    },
};

// Email template validation
export const validateEmailTemplate = (templateData) => {
    const required = ["from_name", "from_email", "subject", "message"];
    const missing = required.filter((field) => !templateData[field]);

    if (missing.length > 0) {
        throw new Error(`Missing required fields: ${missing.join(", ")}`);
    }

    return true;
};
