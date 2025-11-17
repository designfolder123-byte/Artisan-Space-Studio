
import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/icons/Icons';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission to a backend
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <div className="animate-fade-in pt-24 bg-brand-bg min-h-screen">
            {/* Page Header */}
            <section className="py-16 text-center bg-gray-50">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-primary">Contact Us</h1>
                    <p className="text-lg text-brand-text-muted mt-4 max-w-3xl mx-auto">
                        We're excited to hear about your project. Reach out to us for a consultation, and let's begin the journey of transforming your space.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-sm shadow-lg">
                            {isSubmitted ? (
                                <div className="text-center py-16">
                                    <h2 className="text-2xl font-serif text-brand-primary mb-4">Thank you for your message!</h2>
                                    <p className="text-brand-text-muted">We have received your inquiry and will get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-serif text-brand-primary mb-6">Send us a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <input type="text" name="name" placeholder="Your Name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                                            <input type="email" name="email" placeholder="Your Email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                                        </div>
                                         <div className="grid md:grid-cols-2 gap-6">
                                            <input type="tel" name="phone" placeholder="Your Phone (Optional)" value={formState.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                                            <input type="text" name="subject" placeholder="Subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                                        </div>
                                        <textarea name="message" placeholder="Tell us about your project..." value={formState.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50"></textarea>
                                        <button type="submit" className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-sm hover:bg-opacity-90 transition-all duration-300">
                                            Submit Inquiry
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-sm shadow-lg">
                                <h3 className="text-xl font-serif text-brand-primary mb-4">Contact Details</h3>
                                <ul className="space-y-4 text-brand-text-muted">
                                    <li className="flex items-start">
                                        <MapPinIcon className="w-6 h-6 mr-4 mt-1 text-brand-accent flex-shrink-0" />
                                        <div>
                                            <strong className="text-brand-primary">Address:</strong><br />
                                            Kolkata, West Bengal, India
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <PhoneIcon className="w-6 h-6 mr-4 text-brand-accent flex-shrink-0" />
                                        <div>
                                            <strong className="text-brand-primary">Phone:</strong><br />
                                            <a href="tel:8621824204" className="hover:text-brand-accent">8621824204</a>
                                        </div>
                                    </li>
                                    <li className="flex items-center">
                                        <MailIcon className="w-6 h-6 mr-4 text-brand-accent flex-shrink-0" />
                                        <div>
                                            <strong className="text-brand-primary">Email:</strong><br />
                                            <a href="mailto:contact@artisanspacestudio.com" className="hover:text-brand-accent">contact@artisanspacestudio.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-200 h-64 rounded-sm shadow-lg flex items-center justify-center text-brand-text-muted">
                                Map Placeholder
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
