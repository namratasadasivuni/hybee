import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission - in production, connect to backend API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/50 to-background">
          <div className="container relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you. Send us a message!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                {/* Email */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:hello@hybee.com" className="hover:text-foreground transition-colors">
                      hello@hybee.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-foreground transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monday - Friday, 10am - 6pm IST
                  </p>
                </div>

                {/* Address */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    Hybee Fashion Headquarters<br />
                    Mumbai, Maharashtra<br />
                    India
                  </p>
                </div>

                {/* Social */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Facebook
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border/50 rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-800">
                      Something went wrong. Please try again later.
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-sm hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "What is your return policy?",
                  a: "We offer 30-day returns on all items in original condition. Free return shipping on orders over ₹5000.",
                },
                {
                  q: "How long does delivery take?",
                  a: "Standard delivery takes 5-7 business days. Express delivery available for ₹199 extra.",
                },
                {
                  q: "Do you ship internationally?",
                  a: "Currently, we ship within India only. International shipping coming soon!",
                },
                {
                  q: "How can I track my order?",
                  a: "You'll receive a tracking link via email once your order ships. Check your profile for order status.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-background p-6 rounded-sm border border-border/50 hover:shadow-sm transition-shadow">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
