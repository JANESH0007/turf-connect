import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import TimeSlotGrid from "@/components/TimeSlotGrid";
import BookingModal from "@/components/BookingModal";
import Navbar from "@/components/Navbar";
import { 
  MapPin, 
  Star, 
  Users, 
  Wifi, 
  Car, 
  ShirtIcon, 
  Droplets,
  Phone,
  Clock,
  Calendar,
  Shield
} from "lucide-react";
import turfHero1 from "@/assets/turf-hero-1.jpg";

const TurfDetail = () => {
  const [selectedDate, setSelectedDate] = useState("2024-07-24");
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Mock turf data
  const turf = {
    id: "1",
    name: "Green Valley Sports Complex",
    location: "Sector 18, Noida, Uttar Pradesh",
    description: "Premium football turf with natural grass feel artificial surface. Perfect for professional matches and casual games. Well-maintained facilities with modern amenities.",
    pricePerHour: 1200,
    rating: 4.8,
    totalReviews: 142,
    image: turfHero1,
    images: [turfHero1, turfHero1, turfHero1],
    amenities: [
      { icon: Wifi, name: "Free WiFi" },
      { icon: Car, name: "Free Parking" },
      { icon: ShirtIcon, name: "Changing Rooms" },
      { icon: Droplets, name: "Drinking Water" },
      { icon: Shield, name: "Security" },
      { icon: Clock, name: "Floodlights" }
    ],
    capacity: 22,
    surface: "Artificial Grass",
    dimensions: "100m x 60m",
    contact: "+91 9876543210"
  };

  // Mock time slots
  const timeSlots = [
    { id: "1", startTime: "06:00", endTime: "07:00", price: 1000, available: true },
    { id: "2", startTime: "07:00", endTime: "08:00", price: 1000, available: false, bookedBy: "Team Alpha" },
    { id: "3", startTime: "08:00", endTime: "09:00", price: 1200, available: true },
    { id: "4", startTime: "09:00", endTime: "10:00", price: 1200, available: true },
    { id: "5", startTime: "10:00", endTime: "11:00", price: 1200, available: false, bookedBy: "FC Warriors" },
    { id: "6", startTime: "17:00", endTime: "18:00", price: 1500, available: true },
    { id: "7", startTime: "18:00", endTime: "19:00", price: 1500, available: true },
    { id: "8", startTime: "19:00", endTime: "20:00", price: 1800, available: true },
    { id: "9", startTime: "20:00", endTime: "21:00", price: 1800, available: false, bookedBy: "United FC" },
    { id: "10", startTime: "21:00", endTime: "22:00", price: 1500, available: true },
  ];

  const handleSlotSelect = (slotId: string) => {
    setSelectedSlot(slotId);
  };

  const handleBookNow = () => {
    if (selectedSlot) {
      setIsBookingModalOpen(true);
    }
  };

  const handleBookingConfirm = (bookingData: any) => {
    console.log("Booking confirmed:", bookingData);
    // Here you would typically send the booking to your backend
    setSelectedSlot(undefined);
  };

  const selectedSlotData = timeSlots.find(slot => slot.id === selectedSlot);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-xl overflow-hidden mb-6">
              <img
                src={turf.image}
                alt={turf.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge variant="success" className="text-lg px-4 py-2">
                  Available Today
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{turf.name}</h1>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{turf.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-warning fill-warning" />
                    <span className="font-medium">{turf.rating}</span>
                    <span className="ml-1">({turf.totalReviews} reviews)</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {turf.description}
              </p>
            </div>
          </div>

          {/* Booking Summary Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Quick Booking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">₹{turf.pricePerHour}</span>
                  <span className="text-muted-foreground ml-1">/hour</span>
                </div>
                
                {selectedSlotData && (
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                    <div className="font-medium text-foreground">Selected Slot</div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {selectedSlotData.startTime} - {selectedSlotData.endTime}
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedDate}
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span>Total Amount</span>
                      <span className="font-bold text-primary">₹{selectedSlotData.price}</span>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleBookNow}
                  disabled={!selectedSlot}
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                >
                  {selectedSlot ? "Book Now" : "Select a Time Slot"}
                </Button>
                
                <div className="text-center">
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call {turf.contact}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Turf Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Time Slots */}
            <Card>
              <CardHeader>
                <CardTitle>Available Time Slots</CardTitle>
              </CardHeader>
              <CardContent>
                <TimeSlotGrid
                  date={selectedDate}
                  slots={timeSlots}
                  onSlotSelect={handleSlotSelect}
                  selectedSlot={selectedSlot}
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Turf Information */}
            <Card>
              <CardHeader>
                <CardTitle>Turf Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Surface</span>
                    <span className="font-medium">{turf.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-medium">{turf.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capacity</span>
                    <span className="font-medium flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {turf.capacity} players
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {turf.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <amenity.icon className="w-4 h-4 text-primary" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {selectedSlotData && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          onConfirm={handleBookingConfirm}
          turf={{
            name: turf.name,
            location: turf.location,
            image: turf.image,
          }}
          slot={{
            date: selectedDate,
            startTime: selectedSlotData.startTime,
            endTime: selectedSlotData.endTime,
            price: selectedSlotData.price,
          }}
        />
      )}
    </div>
  );
};

export default TurfDetail;