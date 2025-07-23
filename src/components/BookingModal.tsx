import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, User, Phone, Calendar, Clock, MapPin } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (bookingData: BookingData) => void;
  turf: {
    name: string;
    location: string;
    image: string;
  };
  slot: {
    date: string;
    startTime: string;
    endTime: string;
    price: number;
  };
}

interface BookingData {
  playerName: string;
  phone: string;
  email: string;
  notes: string;
  paymentMethod: string;
}

const BookingModal = ({ isOpen, onClose, onConfirm, turf, slot }: BookingModalProps) => {
  const [formData, setFormData] = useState<BookingData>({
    playerName: "",
    phone: "",
    email: "",
    notes: "",
    paymentMethod: "online",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
    onClose();
  };

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Confirm Your Booking</span>
          </DialogTitle>
          <DialogDescription>
            Please fill in your details to complete the booking
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Booking Summary */}
          <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
            <h3 className="font-semibold text-foreground">Booking Summary</h3>
            
            <div className="flex items-center space-x-3">
              <img
                src={turf.image}
                alt={turf.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{turf.name}</h4>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {turf.location}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground">Date</div>
                <div className="font-medium">{slot.date}</div>
              </div>
              <div>
                <div className="text-muted-foreground">Time</div>
                <div className="font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {slot.startTime} - {slot.endTime}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Amount</span>
              <span className="text-2xl font-bold text-primary">₹{slot.price}</span>
            </div>
          </div>

          {/* Player Details Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="playerName">
                  <User className="w-4 h-4 inline mr-1" />
                  Player Name *
                </Label>
                <Input
                  id="playerName"
                  value={formData.playerName}
                  onChange={(e) => handleInputChange("playerName", e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 9876543210"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Notes (Optional)</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Any special requirements or notes..."
                rows={3}
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <Label>Payment Method</Label>
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant={formData.paymentMethod === "online" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleInputChange("paymentMethod", "online")}
                  className="flex-1"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay Online
                </Button>
                <Button
                  type="button"
                  variant={formData.paymentMethod === "cash" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleInputChange("paymentMethod", "cash")}
                  className="flex-1"
                >
                  Pay at Venue
                </Button>
              </div>
            </div>

            <DialogFooter className="space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" variant="gradient" size="lg">
                Confirm Booking
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;