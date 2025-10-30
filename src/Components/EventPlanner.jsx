import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';
const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/* Section for describing the purpose or overview of the app */}
                <section className="description">
                    {/* Description content goes here */}
                    <p>
                        Plan and organize your events effortlessly with Event Planner. From
                        birthdays to corporate meetings, we've got you covered.
                    </p>
                    {/* Primary call-to-action button */}
                    <button className="get-started-button">Get Started</button>
                </section>
                {/* Section to list or categorize different types of events */}
                <section className="events_categories">
                    {/* Social event types */}
                    <ul>
                        <h2>Social Events:</h2>
                            <li>Birthday parties</li>
                            <li>Anniversary celebrations</li>
                            <li>Wedding receptions</li>
                            <li>Baby showers</li>
                            <li>Graduation parties</li>
                            <li>Family reunions</li>
                    </ul>
                    {/* Event categories content goes here */}
                    <ul>
                        <h2>Entertainment Events:</h2>
                        <li>Concerts</li>
                        <li>Music</li>
                        <li>Film</li>
                        <li>Comedy</li>
                        <li>Art</li>
                        <li>Cultural events</li>
                    </ul>
                    {/* Community-focused event types */}
                    <ul>
                        <h2>Community Events:</h2>
                        <li>Fundraising events</li>
                        <li>Charity galas</li>
                        <li>Volunteer drives</li>
                        <li>Neighborhood block parties</li>
                        <li>Community festivals</li>
                        <li>Cultural celebrations</li>
                    </ul>
                </section>
                {/* Section to highlight app features or functionalities */}
                <section className="features">
                    {/* Features content goes here */}
                    <h2>Features</h2>
                    {/* List of key platform features */}
                    <ul>
                        <li>Easy event creation and management</li>
                        <li>Customizable event templates</li>
                        <li>Guest list management</li>
                        <li>Real-time collaboration</li>
                        <li>Reminders and notifications</li>
                    </ul>
                </section>
                {/* Section to showcase user reviews or testimonials */}
                <section className="testimonials">
                    {/* Testimonials content goes here */}
                    <h2>Testimonials</h2>
                    <div className="testimonial">
                        <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                        <p className="author">- Emily Johnson</p>
                    </div>
                    <div className="testimonial">
                        <p>"I use event Planner for all my corporate events. It saves me so much time and effort!"</p>
                        <p className="author">- John Smith</p>
                    </div>
                </section>
                {/* Section to provide contact information or a contact form */}
                <section className="contact">
                    {/* Contact content goes here */}
                    <h2>Contact Us</h2>
                    {/* Contact form */}
                    <form>
                        {/* Name Input Field */}
                        <input type="text" placeholder="Name" />
                        {/* Email Input field */}
                        <input type="email" placeholder="Email" />
                        {/* Message textarea */}
                        <textarea placeholder="Message"></textarea>
                        {/* Submit button */}
                        <button className="submit-button">Send</button>
                    </form>
                </section>
                <Footer/>
        </div>
    );
};

export default EventPlanner;
