import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:t.rossitto@yahoo.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label className="block text-cyber-blue mb-2 font-semibold">Name</Label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-cyber-dark border border-cyber-green/30 rounded-lg px-4 py-3 text-cyber-gray focus:border-cyber-green focus:outline-none transition-colors duration-300"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <Label className="block text-cyber-blue mb-2 font-semibold">Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-cyber-dark border border-cyber-green/30 rounded-lg px-4 py-3 text-cyber-gray focus:border-cyber-green focus:outline-none transition-colors duration-300"
          placeholder="your.email@domain.com"
          required
        />
      </div>

      <div>
        <Label className="block text-cyber-blue mb-2 font-semibold">Subject</Label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-cyber-dark border border-cyber-green/30 rounded-lg px-4 py-3 text-cyber-gray focus:border-cyber-green focus:outline-none transition-colors duration-300"
          placeholder="What's this about?"
          required
        />
      </div>

      <div>
        <Label className="block text-cyber-blue mb-2 font-semibold">Message</Label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-cyber-dark border border-cyber-green/30 rounded-lg px-4 py-3 text-cyber-gray focus:border-cyber-green focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Your message..."
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-cyber-green hover:bg-cyber-green/80 text-cyber-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <Mail className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
