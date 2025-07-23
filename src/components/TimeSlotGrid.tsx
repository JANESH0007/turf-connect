import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  price: number;
  available: boolean;
  bookedBy?: string;
}

interface TimeSlotGridProps {
  date: string;
  slots: TimeSlot[];
  onSlotSelect: (slotId: string) => void;
  selectedSlot?: string;
}

const TimeSlotGrid = ({ date, slots, onSlotSelect, selectedSlot }: TimeSlotGridProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Available Time Slots</h3>
        <Badge variant="secondary">{date}</Badge>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {slots.map((slot) => (
          <Card
            key={slot.id}
            className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
              selectedSlot === slot.id
                ? "ring-2 ring-primary border-primary"
                : slot.available
                ? "hover:border-primary/50"
                : "opacity-60 cursor-not-allowed"
            }`}
            onClick={() => slot.available && onSlotSelect(slot.id)}
          >
            <div className="text-center space-y-2">
              <div className="font-semibold text-foreground">
                {slot.startTime} - {slot.endTime}
              </div>
              <div className="text-lg font-bold text-primary">
                ₹{slot.price}
              </div>
              <Badge
                variant={slot.available ? "success" : "destructive"}
                className="text-xs"
              >
                {slot.available ? "Available" : "Booked"}
              </Badge>
              {slot.bookedBy && (
                <div className="text-xs text-muted-foreground">
                  Booked by {slot.bookedBy}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      {slots.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No time slots available for this date
        </div>
      )}
    </div>
  );
};

export default TimeSlotGrid;