import React from "react";
import styles from "../Styles/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
    return (
        <section className={styles.policyPage}>

            {/* 🔥 BANNER */}
            <div className={styles.banner}>
                <div className={styles.overlay}></div>

                <div className={styles.bannerContent}>
                    <h1>Privacy Policy</h1>
                    <p>Your trust and privacy matter to us</p>
                </div>
            </div>

            {/* 📄 CONTENT */}
            <div className={styles.container}>

                {/* INTRO */}
                <div className={styles.card}>
                    <h2>Privacy Policy</h2>
                    <p>
                        At <strong>Master Traders Academy</strong>, we respect and value the privacy of every individual who interacts with us.
                        We deeply appreciate the trust you place in our relationship. By becoming our client or using our website,
                        you can be assured that we are fully committed to protecting your personal information.
                        This Privacy Policy applies to all current, former, and prospective clients, subscribers, and visitors who engage with
                        <a
                            href="https://mastertradersacademy.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.websiteLink}
                        >
                            www.mastertradersacademy.in →
                        </a>
                        .
                    </p>
                </div>

                {/* 1 */}
                <div className={styles.card}>
                    <h2>1. Information We Collect</h2>
                    <p>
                        We may collect personal information from you when you:
                        <br />• Register on our website
                        <br />• Subscribe to our newsletter
                        <br />• Fill out a contact or inquiry form
                        <br />• Enroll in a course or service
                        <br /><br />
                        Depending on the activity, you may be asked to provide details such as your name, email address, phone number, and mailing address.
                        You can, however, visit our website anonymously without providing personal data.
                    </p>
                </div>

                {/* 2 */}
                <div className={styles.card}>
                    <h2>2. How We Use Your Information</h2>
                    <p>
                        The information we collect may be used in the following ways:
                        <br />• To improve our customer service and respond efficiently to your queries
                        <br />• To process course enrollments or service requests
                        <br />• To send periodic updates, offers, and important information related to your enrollment or our services
                        <br />• To administer promotions, surveys, or special events
                        <br /><br />
                        Your personal information will never be sold, traded, or shared with any outside organization without your consent,
                        except for the purpose of delivering the products or services you requested.
                    </p>
                </div>

                {/* 3 */}
                <div className={styles.card}>
                    <h2>3. How We Protect Your Information</h2>
                    <p>
                        We prioritize your privacy and safeguard your data using secure third-party systems.
                        <br />• Mailing lists and user data are treated as confidential intellectual property.
                        <br />• No visitor or external user can access your private information.
                        <br />• We do not collect or store any payment information directly; all payments are securely processed through trusted third-party gateways.
                    </p>
                </div>

                {/* 4 */}
                <div className={styles.card}>
                    <h2>4. Use of Cookies</h2>
                    <p>
                        Our website uses cookies to enhance user experience.
                        Cookies are small files stored on your computer that help us:
                        <br />• Remember your preferences for future visits
                        <br />• Process shopping cart items
                        <br />• Analyze website traffic and user behavior
                        <br /><br />
                        We also use Google Analytics and Google Remarketing to understand visitor activity and improve our advertising efforts.
                        You can customize or opt out of these services by adjusting your Google Ads settings.
                    </p>
                </div>

                {/* 5 */}
                <div className={styles.card}>
                    <h2>5. Sharing of Information</h2>
                    <p>
                        We do not sell or rent your personal information. However, we may share data with:
                        <br />• Trusted third-party partners who help us operate our website or provide services (under strict confidentiality agreements)
                        <br />• Legal authorities, when required to comply with applicable laws, enforce policies, or protect our rights or the safety of others
                        <br /><br />
                        Non-personally identifiable data (such as aggregated site usage statistics) may be used for marketing or analytics purposes.
                    </p>
                </div>

                {/* 6 */}
                <div className={styles.card}>
                    <h2>6. Third-Party Links</h2>
                    <p>
                        Occasionally, our website may include links to third-party websites or services.
                        Please note that these external sites have their own privacy policies, and we are not responsible for their content or activities.
                        However, we welcome feedback about such links to ensure a safe user experience.
                    </p>
                </div>

                {/* 7 */}
                <div className={styles.card}>
                    <h2>7. Terms and Conditions</h2>
                    <p>
                        For more information on the use of our website and services, please review our Terms and Conditions.
                    </p>
                </div>

                {/* 8 */}
                <div className={styles.card}>
                    <h2>8. Your Consent</h2>
                    <p>
                        By using our website, you acknowledge and consent to this Privacy Policy.
                    </p>
                </div>

                {/* 9 */}
                <div className={styles.card}>
                    <h2>9. Policy Updates</h2>
                    <p>
                        We may update or modify this Privacy Policy from time to time.
                        Any changes will be reflected on this page, with the date of the latest revision indicated.
                    </p>
                </div>

                {/* 10 */}
                <div className={styles.card}>
                    <h2>10. Contact Us</h2>
                    <p>
                        📍 Address:<br />
                        2nd Floor, R Narayana Complex, A.N. Nagawara Main Road,<br />
                        Near Manyata Tech Park Road, Beside DX Max Properties,<br />
                        Brindavan Nagar, HBR Layout, Bengaluru, Karnataka 560043
                        <br /><br />
                        📧 Email: info@mastertradersacademy.in
                        <br />
                        🌐 Website: www.mastertradersacademy.in
                    </p>
                </div>

                {/* DISCLAIMER */}
                <div className={styles.card}>
                    <h2>Disclaimer</h2>
                    <p>
                        The course by Master Traders Academy is intended purely for educational purposes.
                        We do not offer stock tips, trading calls, or investment advice.
                        All opinions shared by instructors or participants are their own.
                        Participants are encouraged to conduct independent research, seek guidance from SEBI-registered financial advisors,
                        and comply with SEBI regulations before making investment decisions.
                        Master Traders Academy assumes no responsibility for any financial losses incurred.
                    </p>
                </div>

            </div>
        </section>
    );
}
