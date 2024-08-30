import React from 'react';
import './CustomerService.css'; // Import the CSS file for styling

const CustomerService = () => {
    return (
        <div className="customer-service">
            <div className="customer-service-image left">
                <img src='src/assets/img/user1.png' alt="User" />
            </div>
            <div className="customer-service-content">
                <h2>Deliver Gold Standard Customer Service</h2>
                <p>
                    Bid farewell to customer tolerance for long waiting times. Our AI chatbots provide immediate
                    responses 24/7, ensuring no customer is left waiting. They tirelessly address queries and handle
                    complaints, resolving over 92% of customer support questions. Empowered by machine learning, they
                    continuously learn and improve, constantly setting new benchmarks in customer service excellence.
                </p>
            </div>
            <div className="customer-service-image right">
                <img src='src/assets/img/robo1.png' alt="Robot" />
            </div>
        </div>
    );
};

export default CustomerService;
