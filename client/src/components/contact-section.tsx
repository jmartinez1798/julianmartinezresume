import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(120),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS env vars missing', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey });
        throw new Error('Email service is not configured.');
      }

      emailjs.init(publicKey);
      const templateParams = {
        from_name: data.name.trim(),
        from_email: data.email.trim(),
        subject: data.subject.trim(),
        message: data.message.trim(),
        to_name: 'Julián Martínez',
      };

      const response = await emailjs.send(serviceId, templateId, templateParams);
      if (response.status !== 200 && response.text !== 'OK') {
        throw new Error('Unexpected response from email service');
      }

      setIsSubmitted(true);
      form.reset();
      toast({ title: "✅ Message sent successfully!", description: "Thanks for reaching out." });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback: provide a mailto link prefilled
      const mailto = `mailto:julian1798@yahoo.com?subject=${encodeURIComponent(form.getValues('subject'))}&body=${encodeURIComponent(form.getValues('message') + '\n\n— ' + form.getValues('name') + ' (' + form.getValues('email') + ')')}`;
      toast({
        title: "Email service unavailable",
        description: ("Click to send via your email client"),
        variant: "destructive",
      });
      window.location.href = mailto;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">I’m always interested in discussing opportunities and projects.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Mail className="text-primary" /></div>
                <div><div className="font-semibold">Email</div><div className="text-slate-600 dark:text-slate-300">julian1798@yahoo.com</div></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><Phone className="text-primary" /></div>
                <div><div className="font-semibold">Phone</div><div className="text-slate-600 dark:text-slate-300">787-397-4295</div></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"><MapPin className="text-primary" /></div>
                <div><div className="font-semibold">Location</div><div className="text-slate-600 dark:text-slate-300">Toa Alta, Puerto Rico</div></div>
              </div>
            </div>
          </div>
          <Card className="animate-slideInRight">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl><Input placeholder="What is this about?" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea placeholder="Tell me about your project or idea..." className="resize-none" rows={6} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isSubmitting || isSubmitted} className="w-full">
                    {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>) : isSubmitted ? (<><CheckCircle className="mr-2 h-4 w-4" />Message Sent!</>) : ("Send Message")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
