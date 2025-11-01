import { Shield, Wifi, HelpCircle, PawPrint } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Security Checks",
    description: "What to expect.",
    link: "#",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected on your travel",
    link: "#",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions?",
    description: "Did you know we have an FAQ section?",
    link: "#",
  },
  {
    icon: PawPrint,
    title: "Traveling with a Pet?",
    description: "Learn more about airport pet accommodations...",
    link: "#",
  },
];

const GoodToKnow = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-navy mb-12 tracking-widest">GOOD TO KNOW</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="border-l-4 border-accent pl-4 hover:pl-6 transition-all">
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodToKnow;
