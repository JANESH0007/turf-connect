import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import TurfCard from "@/components/TurfCard";
import { Search, MapPin, Clock, Shield, Star, Users, Trophy } from "lucide-react";
import turfHero1 from "@/assets/turf-hero-1.jpg";
import turfHero2 from "@/assets/turf-hero-2.jpg";
import turfHero3 from "@/assets/turf-hero-3.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for featured turfs
  const featuredTurfs = [
    {
      id: "1",
      name: "Green Valley Sports Complex",
      location: "Sector 18, Noida",
      pricePerHour: 1200,
      rating: 4.8,
      image: turfHero1,
      amenities: ["Floodlights", "Parking", "Changing Room", "Water"],
      capacity: 22,
      available: true,
    },
    {
      id: "2",
      name: "Champions Football Ground",
      location: "Cyber City, Gurgaon",
      pricePerHour: 1500,
      rating: 4.9,
      image: turfHero2,
      amenities: ["Premium Grass", "Refreshments", "Security", "WiFi"],
      capacity: 20,
      available: true,
    },
    {
      id: "3",
      name: "Urban Turf Arena",
      location: "Connaught Place, Delhi",
      pricePerHour: 1000,
      rating: 4.6,
      image: turfHero3,
      amenities: ["Indoor", "AC", "Lockers", "First Aid"],
      capacity: 18,
      available: false,
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Easy Discovery",
      description: "Find the perfect turf near you with our smart search"
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Book your slot in just 2 clicks, no more waiting"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and secure payment options for peace of mind"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "Only verified and rated turfs on our platform"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Players" },
    { icon: MapPin, value: "200+", label: "Turf Locations" },
    { icon: Trophy, value: "10K+", label: "Games Played" },
    { icon: Star, value: "4.9", label: "Average Rating" }
  ];

  const handleBookTurf = (turfId: string) => {
    console.log("Booking turf:", turfId);
    // Navigate to turf detail page or open booking modal
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-4 py-2">
                🏟️ India's #1 Turf Booking Platform
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Book Your Perfect
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
                  Turf
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover, book, and play at premium turf grounds near you. 
                No more calls, no more confusion - just pure football!
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search by location, turf name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg border-2 border-border focus:border-primary rounded-xl"
                />
                <Button variant="gradient" size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  Search Turfs
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center border-0 bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-0 space-y-2">
                    <stat.icon className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose TurfBook?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make turf booking simple, fast, and reliable for players everywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Turfs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Turfs
              </h2>
              <p className="text-xl text-muted-foreground">
                Top-rated turfs loved by players
              </p>
            </div>
            <Button variant="outline" size="lg">
              View All Turfs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTurfs.map((turf) => (
              <TurfCard key={turf.id} turf={turf} onBook={handleBookTurf} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Play?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of players who book their turf through TurfBook every day
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="xl">
              Find Turfs Near Me
            </Button>
            <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
              Register as Turf Owner
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;