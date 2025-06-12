// EmailJS Configuration
// This file should be updated with your actual EmailJS credentials
window.EmailJSConfig = {
    publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
    serviceId: process.env.EMAILJS_SERVICE_ID || "",
    templateId: process.env.EMAILJS_TEMPLATE_ID || ""
};

// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (window.EmailJSConfig.publicKey) {
        emailjs.init(window.EmailJSConfig.publicKey);
        console.log('EmailJS initialized successfully');
    } else {
        console.warn('EmailJS public key not found');
    }
});
