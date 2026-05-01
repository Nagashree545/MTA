import React from "react";
import styles from "../Styles/PrivacyPolicy.module.css";

export default function TermsAndConditions() {
    return (
        <section className={styles.policyPage}>

            {/* 🔥 BANNER */}
            <div className={styles.banner}>
                <div className={styles.overlay}></div>

                <div className={styles.bannerContent}>
                    <h1>Terms & Conditions</h1>
                    <p>Please read carefully before enrolling</p>
                </div>
            </div>

            {/* 📄 CONTENT */}
            <div className={styles.container}>

                <div className={styles.card}>
                    <h2>Terms & Conditions</h2>
                    <p>We encourage you to review these Terms and Conditions to better understand how Master Traders Academy operates and how we can serve you effectively. By enrolling in our courses or using our website and services, you agree to these terms. We’re committed to providing a valuable learning experience, and these guidelines help ensure a smooth and fair environment for everyone.                    </p>
                </div>

                <div className={styles.card}>
                    <h2>1. Course Purpose & Disclaimer</h2>
                    <p>
                        All programs and materials provided by Master Traders Academy are intended solely for educational purposes.
                        We do not provide stock tips, trading calls, or investment recommendations.
                        Any views expressed by instructors, mentors, or participants are their own and do not represent the official views of Master Traders Academy.

                    </p>

                    <ul>
                        <li>Conduct independent research before investing</li>
                        <li>Take advice only from SEBI-registered advisors</li>
                        <li>Comply with SEBI regulations when engaging in market activities.</li>
                    </ul>

                    <p>
                        Trading and investing in the stock market involve significant financial risk.
                        Past performance is not indicative of future results, and Master Traders Academy does not guarantee profits or outcomes.

                    </p>
                    <p>                        All decisions made based on course content are solely your responsibility.
                    </p>
                </div>

                <div className={styles.card}>
                    <h2>2. SEBI Registration Disclaimer</h2>
                    <p>
                        <strong> Master Traders Academy</strong> is not registered with SEBI (Securities and Exchange Board of India) for providing any financial advisory or brokerage services.
                        Our courses and sessions focus strictly on financial education and skill development.

                    </p>
                </div>

                <div className={styles.card}>
                    <h2>3. Copyright & Intellectual Property</h2>
                    <p>
                        All content, videos, materials, designs, and resources available on,  <a href="https://www.mastertradersacademy.in" target="_blank" rel="noopener noreferrer">
                            https://www.mastertradersacademy.in
                        </a> are the exclusive property of <strong>Master Traders Academy</strong> </p>

                    <h4>You may:</h4>
                    <ul>
                        <li>Access and use materials for personal educational purposes only.</li>
                        <li>Download or print one copy of content for your own learning.</li>
                    </ul>

                    <h4>You may not:</h4>
                    <ul>
                        <li>Republish, upload, modify, distribute, or share materials publicly or privately.</li>
                        <li>Use company content without prior written consent.</li>
                    </ul>

                    <p>Unauthorized use or redistribution of content will lead to legal action under Indian copyright law.</p>
                </div>

                <div className={styles.card}>
                    <h2>4. User ID, Password, and Account Security</h2>
                    <p>
                        If you are provided with a User ID and Password, you are responsible for maintaining its confidentiality.</p>
                    <p>Do not share your credentials with anyone.</p>
                    <p>Master Traders Academy reserves the right to disable or revoke access at its discretion, without prior notice, if misuse or breach is detected.</p>
                </div>

                <div className={styles.card}>
                    <h2>5.Enrollment, Communication & Data Consent </h2>
                    <p>
                        By enrolling in a course, joining our mailing list, or submitting any form on our website or advertisements (including Facebook, Instagram, or other platforms), you:                    </p>
                    <ul>
                        <li>Consent to receive updates, notifications, and communications from Master Traders Academy / Anand Patil through email, SMS, phone calls, or other communication channels.</li>
                        <li>Agree that such communications may include course updates, offers, webinars, or other educational announcements.</li>
                        <li>Acknowledge that Master Traders Academy may contact you within 12 months of your initial inquiry.</li>
                    </ul>
                    <p>All communication will remain strictly related to educational services and your expressed interest.</p>
                </div>

                <div className={styles.card}>
                    <h2>6. Modifications to Terms</h2>
                    <p>
                        Master Traders Academy reserves the right to amend or update these Terms and Conditions at any time.  </p>
                    <p>Continued use of our services after any modification constitutes your acceptance of the revised terms.</p>
                </div>

                <div className={styles.card}>
                    <h2>7.External Links & Third-Party Content</h2>
                    <p>
                        Our website or learning platforms may contain links to third-party websites or resources.                    </p>
                    <p>We do not own, control, or endorse such sites and are not responsible for their content, accuracy, legality, or reliability.</p>
                    <p>Any reliance on external links is at your own risk.</p></div>

                <div className={styles.card}>
                    <h2>8. Termination of Access</h2>
                    <p>
                        This Agreement remains in effect until terminated.
                        Master Traders Academy may suspend or terminate your access immediately, with or without cause, if any terms are violated or at the company’s discretion.
                        Upon termination, all rights granted to you shall cease immediately.
                    </p>
                </div>

                <div className={styles.card}>
                    <h2>9.Financial Risk & Liability Limitation</h2>
                    <p>
                        Investing in securities and trading carries inherent financial risks, including possible loss of principal.</p><p>
                        Users should verify all claims and conduct independent research before making any financial decision.
                    </p>
                    <p>Neither Master Traders Academy nor its founders, team members, mentors, or employees shall be held responsible for:</p>
                    <ul>
                        <li>Any losses or damages resulting from the use of course materials or advice.</li>
                        <li>The accuracy, completeness, or timeliness of any market-related information shared.</li>
                    </ul>
                    <p>Team members or contributors may hold positions in securities mentioned during the course, which may change without notice.</p>
                </div>

                <div className={styles.card}>
                    <h2>10. Reference to Refund Policy</h2>
                    <p>
                        Please also refer to our official  <a href="https://www.mastertradersacademy.in/refundpolicy" target="_blank" rel="noopener noreferrer">
                            Refund & Course Policy</a>  for detailed information on cancellations, non-refundability, and related conditions.                    </p>
                </div>

                <div className={styles.card}>
                    <h2>Acknowledgment</h2>
                    <p>
                        By enrolling in any course, you confirm that you have read, understood, and accepted these Terms and Conditions in full.                    </p>
                </div>

            </div>
        </section>
    );
}
