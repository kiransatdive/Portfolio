"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Kiran Satdive', // Replace with your name
            };

            console.log('Sending email with params:', templateParams);

            // Replace with your EmailJS service ID, template ID, and public key
            const response = await emailjs.send(
                'service_wzd2stk',    // Replace with your EmailJS service ID
                'template_ar6dl49',   // Replace with your EmailJS template ID
                templateParams,
                'NTVqx0olrfHpp4xau'     // Replace with your EmailJS public key
            );

            console.log('EmailJS response:', response);
            
            if (response.status === 200) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error(`Failed to send message: ${response.text}`);
            }
        } catch (error: any) {
            console.error('EmailJS error details:', error);
            console.error('Error status:', error.status);
            console.error('Error text:', error.text);
            
            // More specific error handling
            if (error.text?.includes('template ID not found')) {
                toast.error("Template ID not found. Check your EmailJS template.");
            } else if (error.text?.includes('service ID not found')) {
                toast.error("Service ID not found. Check your EmailJS service.");
            } else if (error.text?.includes('public key')) {
                toast.error("Public key invalid. Check your EmailJS public key.");
            } else if (error.text?.includes('User ID not found')) {
                toast.error("User ID not found. Check your EmailJS account.");
            } else {
                toast.error(`EmailJS Error: ${error.text || 'Unknown error'}`);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-5 py-10">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium tracking-tight text-neutral-600">Full Name</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" placeholder="Kiran Satdive" className="text-sm rounded-md shadow-input px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium tracking-tight text-neutral-600">Email Address</label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" placeholder="kiran.satdive@example.com" className="text-sm rounded-md shadow-input px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium tracking-tight text-neutral-600">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message" className="text-sm rounded-md shadow-input px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Send Message</button>
        </form>
    );
};