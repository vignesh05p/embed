import React from 'react';
import './Footer.css'; // Make sure to create and link your CSS file correctly

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="path/to/your-logo.png" alt="embedchat.ai" /> {/* Replace with your logo */}
                    <p>
                        Unlock the <a href="#">embedchat.ai</a> advantage: boost customer engagement, grow revenue, and cut costs while ensuring data privacy and accuracy. That’s the embedchat.ai promise.
                    </p>
                    <div className="newsletter">
                        <input type="email" placeholder="Your email..." />
                        <button>Subscribe</button>
                    </div>
                    <p>
                        Stay up to date with all <a href="#">embedchat.ai news</a> and updates by subscribing to our newsletter.
                    </p>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Meet embedchat</a></li>
                            <li><a href="#">Why embedchat</a></li>
                            <li><a href="#">embedchat Agents</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Demo</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Agents</h4>
                        <ul>
                            <li><a href="#">Sales Support</a></li>
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">HR Support</a></li>
                            <li><a href="#">IT & Tech Support</a></li>
                            <li><a href="#">R&D Support</a></li>
                            <li><a href="#">Admin & Operations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Recent Blog Posts</h4>
                        <ul>
                            <li><a href="#">Is AI the Secret Sauce for...</a></li>
                            <li><a href="#">AI in the Hot Seat:...</a></li>
                            <li><a href="#">Is AI the Secret Sauce for...</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-xing"></i></a>
                </div>
                <p>&copy; embedchat.ai 2024. All rights reserved.</p>
                <div className="footer-legal">
                    <a href="#">Privacy policy</a> | <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
