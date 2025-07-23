import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Users } from "lucide-react";

interface TurfCardProps {
  turf: {
    id: string;
    name: string;
    location: string;
    pricePerHour: number;
    rating: number;
    image: string;
    amenities: string[];
    capacity: number;
    available: boolean;
  };
  onBook: (turfId: string) => void;
}

const TurfCard = ({ turf, onBook }: TurfCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={turf.image}
            alt={turf.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4">
            <Badge variant={turf.available ? "success" : "destructive"}>
              {turf.available ? "Available" : "Booked"}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-1 bg-background/80 rounded-full px-3 py-1 backdrop-blur-sm">
              <Star className="w-4 h-4 text-warning fill-warning" />
              <span className="text-sm font-medium">{turf.rating}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">{turf.name}</h3>
        
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{turf.location}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">Up to {turf.capacity} players</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {turf.amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {turf.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{turf.amenities.length - 3} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">₹{turf.pricePerHour}</span>
            <span className="text-sm text-muted-foreground ml-1">/hour</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onBook(turf.id)}
          disabled={!turf.available}
          className="w-full"
          variant={turf.available ? "gradient" : "outline"}
        >
          <Clock className="w-4 h-4 mr-2" />
          {turf.available ? "Book Now" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TurfCard;