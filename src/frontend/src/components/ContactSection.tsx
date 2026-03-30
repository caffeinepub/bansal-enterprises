import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const mutation = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form, {
      onSuccess: () => setForm({ name: "", email: "", phone: "", message: "" }),
    });
  };

  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Visit or Contact Us
          </h2>
          <p className="text-white/60 text-lg">We'd love to hear from you</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
              <h3 className="font-display font-bold text-xl text-gold mb-6">
                Shop Information
              </h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="text-gold" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Address</p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Jalandhar Rd, Krishan Nagar,
                    <br />
                    Nakodar, Punjab 144040
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-gold" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:09814102261"
                    className="text-white/60 text-sm hover:text-gold transition-colors block"
                  >
                    098141 02261
                  </a>
                  <a
                    href="https://wa.me/919814102261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400/80 text-sm hover:text-green-400 transition-colors mt-1 block"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold" size={18} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Store Hours</p>
                  <p className="text-white/60 text-sm">
                    Open daily · Closes 8 PM
                  </p>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-lg overflow-hidden border border-white/10 mt-4">
                <iframe
                  title="Bansal Enterprises Location"
                  src="https://maps.google.com/maps?q=Jalandhar+Rd+Krishan+Nagar+Nakodar+Punjab+144040&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-gold mb-6">
                Send a Message
              </h3>

              <div className="space-y-2">
                <Label className="text-white/80 text-sm">Full Name</Label>
                <Input
                  data-ocid="contact.name_input"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  required
                  className="bg-white/8 border-white/20 text-white placeholder:text-white/30 focus:border-gold"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white/80 text-sm">Email Address</Label>
                  <Input
                    data-ocid="contact.email_input"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="bg-white/8 border-white/20 text-white placeholder:text-white/30 focus:border-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/80 text-sm">Phone Number</Label>
                  <Input
                    data-ocid="contact.phone_input"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="+91 98141 02261"
                    className="bg-white/8 border-white/20 text-white placeholder:text-white/30 focus:border-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/80 text-sm">Message</Label>
                <Textarea
                  data-ocid="contact.message_textarea"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  className="bg-white/8 border-white/20 text-white placeholder:text-white/30 focus:border-gold resize-none"
                />
              </div>

              <Button
                data-ocid="contact.submit_button"
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-gold text-navy font-bold hover:bg-gold-light py-3 rounded-sm text-base"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {mutation.isSuccess && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-center gap-2 p-3 rounded-sm bg-green-500/15 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={16} />
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {mutation.isError && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-2 p-3 rounded-sm bg-red-500/15 border border-red-500/30 text-red-400 text-sm"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
