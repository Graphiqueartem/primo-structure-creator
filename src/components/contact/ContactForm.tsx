import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  organization: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Please provide a few more details"),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please accept our privacy policy",
  }),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
      consent: false,
    },
    mode: "onSubmit",
  });

  const onSubmit = (values: ContactFormValues) => {
    // For now, just show a success toast and reset the form
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
    // In the future, integrate with Supabase or an email service.
    console.log("Contact form submission", values);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Company, NGO, School..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="How can we help?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Message</FormLabel>
                <FormControl>
                  <Textarea rows={6} placeholder="Tell us a bit about your project or inquiry..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-border"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                  <div>
                    <FormLabel htmlFor="consent" className="font-normal">
                      I agree to be contacted about my inquiry and accept the privacy policy.
                    </FormLabel>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Button type="submit" size="lg">Send Message</Button>
            <span className="text-sm text-muted-foreground">
              We'll get back to you within 2–3 business days.
            </span>
          </div>
        </form>
      </Form>
    </div>
  );
}
