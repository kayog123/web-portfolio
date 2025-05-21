"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";
import {
  ADDRESS,
  EMAIL,
  GITHUB_ACCOUNT_LINK,
  INSTAGRAM_ACCOUNT_LINK,
  LINKEDIN_ACCOUNT_LINK,
  PHONE,
} from "../_lib/const";
import Link from "next/link";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in a real app, this would be an API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to discuss opportunities? I&apos;d
            love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <Card className="h-full">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 flex-grow">
                  <ContactInfo
                    icon={<Mail className="text-primary" />}
                    title="Email"
                    content={EMAIL}
                  />
                  <ContactInfo
                    icon={<Phone className="text-primary" />}
                    title="Phone"
                    content={PHONE}
                  />
                  <ContactInfo
                    icon={<MapPin className="text-primary" />}
                    title="Location"
                    content={ADDRESS}
                  />
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-medium mb-4">Follow me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href={GITHUB_ACCOUNT_LINK}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M7.5 0C3.358 0 0 3.358 0 7.5c0 3.313 2.148 6.12 5.13 7.102.375.069.51-.163.51-.362 0-.177-.006-.648-.01-1.273-2.088.452-2.526-1.006-2.526-1.006-.341-.87-.834-1.102-.834-1.102-.682-.466.052-.457.052-.457.754.053 1.15.774 1.15.774.671 1.145 1.76.815 2.19.624.068-.487.262-.815.476-.999-1.667-.19-3.421-.833-3.421-3.71 0-.82.293-1.49.772-2.015-.076-.19-.335-.951.074-1.982 0 0 .63-.2 2.07.772.6-.167 1.24-.25 1.88-.253.64.003 1.28.086 1.88.253 1.44-.972 2.07-.772 2.07-.772.41 1.031.15 1.792.075 1.982.48.525.77 1.195.77 2.015 0 2.885-1.757 3.516-3.43 3.7.27.232.51.692.51 1.394 0 1.007-.01 1.822-.01 2.068 0 .2.135.436.515.362C12.854 13.617 15 10.812 15 7.5 15 3.358 11.642 0 7.5 0z" />
                      </svg>
                    </Link>
                    <Link
                      href={INSTAGRAM_ACCOUNT_LINK}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M4.5 0C2.016 0 0 2.016 0 4.5v6C0 12.984 2.016 15 4.5 15h6c2.484 0 4.5-2.016 4.5-4.5v-6C15 2.016 12.984 0 10.5 0h-6zm0 1.5h6c1.656 0 3 1.344 3 3v6c0 1.656-1.344 3-3 3h-6c-1.656 0-3-1.344-3-3v-6c0-1.656 1.344-3 3-3zm7.5 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM7.5 3C5.016 3 3 5.016 3 7.5S5.016 12 7.5 12 12 9.984 12 7.5 9.984 3 7.5 3zm0 1.5c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z" />
                      </svg>
                    </Link>
                    <Link
                      href={LINKEDIN_ACCOUNT_LINK}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M0 1.5C0 .675.675 0 1.5 0h12c.825 0 1.5.675 1.5 1.5v12c0 .825-.675 1.5-1.5 1.5h-12c-.825 0-1.5-.675-1.5-1.5v-12zm4.5 3h-3v7.5h3v-7.5zm-1.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm9 3h-3v3.75c0 .825.675 1.5 1.5 1.5s1.5-.675 1.5-1.5v-3.75zm-3 7.5h3V7.827a3.751 3.751 0 0 0-6 0V12h3V8.25a1.5 1.5 0 0 1 3 0V12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="h-full shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-muted-foreground">{content}</p>
    </div>
  </div>
);

export default ContactSection;
