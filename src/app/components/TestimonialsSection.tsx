import React from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Clifford Astronomo II",
    role: "Frontend Developer",
    company: "Skyride Web and Mobile App Solutions",
    content:
      "Working with Jovanni N. Jungco has been a great experience. He is a skilled and dedicated web developer who consistently delivers high-quality work. He collaborates well with the team, communicates effectively, and is always eager to learn and improve. His problem-solving skills and attention to detail make him a valuable asset to any project.",
    avatar: "/testimonial/astro.jpg",
  },
  {
    id: 2,
    name: "Ryan Mark Supremo",
    role: "Software Engineer II",
    company: "Accelbyte",
    content:
      "One of the best developers I've worked with. He delivered our MVP on time and on budget, with impeccable code quality. His problem-solving abilities and attention to detail made a huge difference in our product.",
    avatar: "/testimonial/ryan.jpg",
  },
  {
    id: 3,
    name: "Kristal Faith Porras",
    role: "Project Manager",
    company: "Skyride Web and Mobile App Solutions",
    content:
      "The web application he built for our client campaign exceeded expectations. The interface was intuitive, the animations were smooth, and it worked flawlessly across all devices. I highly recommend his services.",
    avatar: "/testimonial/kristal.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-secondary/50 py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Testimonials</h2>
          <p className="text-lg text-muted-foreground">
            Dont just take my word for it. Heres what clients have to say about
            working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Ready to build something amazing?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Im currently available for freelance projects and full-time
              positions. Lets discuss how I can help bring your ideas to life.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Lets Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-6 text-primary">
          <Quote size={32} />
        </div>

        <p className="text-foreground mb-6 flex-grow italic">
          &quot;{testimonial.content}&quot;
        </p>

        <div className="flex items-center">
          <div className="w-15 h-15 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
