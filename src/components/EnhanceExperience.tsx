import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import travelerImage from "@/assets/traveler-happy.jpg";

const EnhanceExperience = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-navy mb-4 tracking-wide">
          ENHANCE YOUR EXPERIENCE
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Browse these quick links to explore the essentials at Mumbai International:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={travelerImage}
              alt="Happy traveler"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Accordion */}
          <div className="order-1 lg:order-2">
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="flying-out" className="border-0">
                <AccordionTrigger className="bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 text-lg font-semibold [&[data-state=open]]:rounded-b-none">
                  Flying Out
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 border-x-2 border-b-2 border-primary rounded-b-lg">
                  <p className="mb-4 text-muted-foreground">
                    Your experience starts the minute you arrive at our airport.
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    <li><a href="#" className="text-primary hover:underline">Travel Information</a></li>
                    <li><a href="#" className="text-primary hover:underline">Arrivals & Departures</a></li>
                    <li><a href="#" className="text-primary hover:underline">Parking & Transportation</a></li>
                    <li><a href="#" className="text-primary hover:underline">COVID</a></li>
                    <li><a href="#" className="text-primary hover:underline">Flight Information</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="flying-in" className="border-0">
                <AccordionTrigger className="bg-muted text-navy px-6 py-4 rounded-lg hover:bg-muted/80 text-lg font-semibold [&[data-state=open]]:rounded-b-none">
                  Flying In
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 border-x-2 border-b-2 border-muted rounded-b-lg">
                  <p className="text-muted-foreground">
                    Information for arriving passengers...
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="connecting" className="border-0">
                <AccordionTrigger className="bg-muted text-navy px-6 py-4 rounded-lg hover:bg-muted/80 text-lg font-semibold [&[data-state=open]]:rounded-b-none">
                  Connecting
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 border-x-2 border-b-2 border-muted rounded-b-lg">
                  <p className="text-muted-foreground">
                    Connecting flight information...
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="meet-greet" className="border-0">
                <AccordionTrigger className="bg-muted text-navy px-6 py-4 rounded-lg hover:bg-muted/80 text-lg font-semibold [&[data-state=open]]:rounded-b-none">
                  Meet & Greet
                </AccordionTrigger>
                <AccordionContent className="bg-white px-6 py-4 border-x-2 border-b-2 border-muted rounded-b-lg">
                  <p className="text-muted-foreground">
                    Meet and greet services...
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhanceExperience;
