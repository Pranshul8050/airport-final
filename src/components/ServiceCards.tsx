import { Card } from "@/components/ui/card";
import { Hotel, Car, Plane, Package, Calendar as CalendarIcon, MapPin } from "lucide-react";

const services = [
  {
    icon: Hotel,
    title: "BOOK HOTELS",
    description: "GREAT DEALS ON HOTELS WORLDWIDE",
    color: "text-primary",
  },
  {
    icon: Car,
    title: "RENT A CAR",
    description: "GET EXPRESS DEALS ON RENTAL CARS",
    color: "text-primary",
  },
  {
    icon: Plane,
    title: "BOOK FLIGHTS",
    description: "COMPARE THOUSANDS OF FLIGHT DEALS",
    color: "text-primary",
  },
  {
    icon: Package,
    title: "BOOK PACKAGES",
    description: "GREAT DEALS ON VACATION PACKAGES",
    color: "text-primary",
  },
  {
    icon: CalendarIcon,
    title: "SEARCH LOCAL EVENTS",
    description: "SEE THINGS TO DO AROUND MUMBAI",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "RESERVE PARKING",
    description: "RESERVE ONLINE IN ADVANCE FOR THE BEST DEAL",
    color: "text-primary",
  },
];

const ServiceCards = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon className={`h-16 w-16 ${service.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
