import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="bg-dark-navy relative -mt-24 z-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Flight Status */}
          <Card className="bg-navy border-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Flight Status</h3>
            <Input
              placeholder="ENTER FLIGHT NUMBER"
              className="mb-4 bg-dark-navy border-muted text-white placeholder:text-muted-foreground"
            />
            <Tabs defaultValue="departures" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-primary">
                <TabsTrigger value="departures" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                  DEPARTURES
                </TabsTrigger>
                <TabsTrigger value="arrivals" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                  ARRIVALS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="departures" className="text-white space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span>14:25 SAN SALVADOR - N3 4327</span>
                  <span>A14</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span>14:25 DENVER - UA 726</span>
                  <span>C17</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-muted">
                  <span>14:30 ISTANBUL - TK 188</span>
                  <span>B37</span>
                </div>
              </TabsContent>
              <TabsContent value="arrivals" className="text-white">
                <p className="text-muted-foreground">Arrivals information...</p>
              </TabsContent>
            </Tabs>
            <Button className="w-full mt-4 bg-dark-navy hover:bg-dark-navy/80 border border-muted text-white">
              VIEW TODAY'S FLIGHTS
            </Button>
          </Card>

          {/* Reserve Parking */}
          <Card className="bg-navy border-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Reserve Parking</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-white" />
                <Input
                  type="date"
                  className="bg-dark-navy border-muted text-white"
                  defaultValue="2025-11-02"
                />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-white" />
                <Input
                  type="time"
                  className="bg-dark-navy border-muted text-white"
                  defaultValue="13:00"
                />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-white" />
                <Input
                  type="date"
                  className="bg-dark-navy border-muted text-white"
                  defaultValue="2025-11-05"
                />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-white" />
                <Input
                  type="time"
                  className="bg-dark-navy border-muted text-white"
                  defaultValue="13:00"
                />
              </div>
              <Input
                placeholder="Promo/Voucher Code"
                className="bg-dark-navy border-muted text-white placeholder:text-muted-foreground"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                RESERVE NOW FOR BEST RATES
              </Button>
              <p className="text-sm text-white text-center italic">
                Guarantee your parking space at the lowest possible rate.
              </p>
            </div>
          </Card>

          {/* Parking Availability */}
          <Card className="bg-navy border-0 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Parking Availability</h3>
            <div className="space-y-3">
              {[
                { name: "Valet", available: "OPEN", total: "2022" },
                { name: "Terminal Lot", available: "445 out of 2022", total: "Available" },
                { name: "Garage1", available: "491 out of 4508", total: "Available" },
                { name: "Garage 2", available: "1090 out of 3727", total: "Available" },
                { name: "Economy Lot", available: "3699 out of 11431", total: "Available" },
              ].map((lot, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-muted"
                >
                  <span className="text-white font-medium">{lot.name}</span>
                  <span className="text-right">
                    <span className="text-green-400 font-semibold block">OPEN</span>
                    <span className="text-white text-sm">{lot.available} {lot.total}</span>
                  </span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent border-white text-white hover:bg-white hover:text-navy">
              LEARN MORE
            </Button>
            <p className="text-sm text-white text-center mt-4 italic">
              In the event that a facility fills, reservations will still be honored.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
