import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const news = [
  {
    title: "2025 Mumbai Marathon at the Airport",
    date: "Nov 27, 2025",
    excerpt: "Experience a unique course through the airport runways and terminals.",
  },
  {
    title: "New Direct Flights to European Destinations",
    date: "Nov 18, 2025",
    excerpt: "Mumbai International Airport announces new direct services connecting to major European cities...",
  },
  {
    title: "New Airport Dining and Shopping Unveiled",
    date: "Nov 17, 2025",
    excerpt: "International brands announced for new terminal expansion, including premium retail and dining...",
  },
];

const NewsSection = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-navy mb-4 tracking-widest">
          WHAT'S HAPPENING AT MUMBAI
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          There is a lot going on at our airport. We have categorized a newsfeed for your convenience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {news.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="border-l-4 border-accent pl-4 mb-4">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
              </div>
              <p className="text-sm text-navy font-semibold mb-3">{item.date}</p>
              <p className="text-muted-foreground mb-4">{item.excerpt}</p>
              <a href="#" className="text-primary hover:underline font-semibold">
                Read More
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 border-navy text-navy hover:bg-navy hover:text-white">
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
