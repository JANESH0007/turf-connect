import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import {
  Plus,
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  Clock,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  TrendingUp,
  Eye
} from "lucide-react";

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState("2024-07-24");

  // Mock data
  const stats = [
    { icon: Calendar, title: "Total Bookings", value: "127", change: "+12%" },
    { icon: IndianRupee, title: "Revenue Today", value: "₹45,600", change: "+8%" },
    { icon: Users, title: "Active Turfs", value: "8", change: "0%" },
    { icon: TrendingUp, title: "Success Rate", value: "96%", change: "+2%" }
  ];

  const bookings = [
    {
      id: "1",
      playerName: "Rahul Sharma",
      turf: "Green Valley Complex",
      date: "2024-07-24",
      time: "18:00 - 19:00",
      amount: 1500,
      status: "confirmed",
      phone: "+91 9876543210"
    },
    {
      id: "2",
      playerName: "Team Alpha",
      turf: "Champions Ground",
      date: "2024-07-24",
      time: "19:00 - 20:00",
      amount: 1800,
      status: "pending",
      phone: "+91 9876543211"
    },
    {
      id: "3",
      playerName: "FC Warriors",
      turf: "Urban Arena",
      date: "2024-07-24",
      time: "20:00 - 21:00",
      amount: 1200,
      status: "confirmed",
      phone: "+91 9876543212"
    }
  ];

  const turfs = [
    {
      id: "1",
      name: "Green Valley Sports Complex",
      location: "Sector 18, Noida",
      status: "active",
      todayBookings: 8,
      revenue: "₹12,600"
    },
    {
      id: "2",
      name: "Champions Football Ground",
      location: "Cyber City, Gurgaon",
      status: "active",
      todayBookings: 6,
      revenue: "₹15,400"
    },
    {
      id: "3",
      name: "Urban Turf Arena",
      location: "CP, Delhi",
      status: "maintenance",
      todayBookings: 0,
      revenue: "₹0"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge variant="success">Confirmed</Badge>;
      case "pending":
        return <Badge variant="warning">Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTurfStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="success">Active</Badge>;
      case "maintenance":
        return <Badge variant="warning">Maintenance</Badge>;
      case "inactive":
        return <Badge variant="destructive">Inactive</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your turfs and bookings</p>
          </div>
          <div className="space-x-3">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
            <Button variant="gradient">
              <Plus className="w-4 h-4 mr-2" />
              Add New Turf
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-success">{stat.change} from yesterday</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-400">
            <TabsTrigger value="bookings">Today's Bookings</TabsTrigger>
            <TabsTrigger value="turfs">Manage Turfs</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Today's Bookings ({bookings.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-4">
                            <h3 className="font-semibold text-foreground">{booking.playerName}</h3>
                            {getStatusBadge(booking.status)}
                          </div>
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {booking.turf}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {booking.time}
                            </div>
                            <div className="flex items-center">
                              <IndianRupee className="w-4 h-4 mr-1" />
                              {booking.amount}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {booking.status === "pending" && (
                            <>
                              <Button size="sm" variant="success">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                <XCircle className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Turfs Management Tab */}
          <TabsContent value="turfs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Your Turfs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {turfs.map((turf) => (
                      <div key={turf.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-foreground">{turf.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {turf.location}
                            </p>
                          </div>
                          {getTurfStatusBadge(turf.status)}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Today's Bookings</span>
                            <p className="font-medium">{turf.todayBookings}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Revenue</span>
                            <p className="font-medium text-primary">{turf.revenue}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Add New Turf Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Turf</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="turfName">Turf Name</Label>
                      <Input id="turfName" placeholder="Enter turf name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Enter full address" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pricePerHour">Price per Hour</Label>
                        <Input id="pricePerHour" type="number" placeholder="₹1200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input id="capacity" type="number" placeholder="22 players" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Describe your turf..." rows={3} />
                    </div>
                    
                    <Button type="submit" variant="gradient" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Turf
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Calendar Tab */}
          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Calendar View</h3>
                  <p className="text-muted-foreground">
                    Advanced calendar functionality coming soon!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;