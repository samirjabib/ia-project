"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/design-system";

const testimonials = [
  {
    name: "Juan",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Samir",
    avatar: "A",
    title: "Designer",
    description: "I use this all days for get inspiration!",
  },
  {
    name: "Julian",
    avatar: "M",
    title: "Product Manager",
    description:
      "This app has changed the life of my team,  cannot imagine working without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-foreground/80 font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-card border-none text-foreground"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-foreground/40 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 text-foreground/80">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
