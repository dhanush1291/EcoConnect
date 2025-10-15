import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Users, BarChart3, Leaf, QrCode, Coins } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    icon: QrCode,
    title: "Easy Collection",
    description: "Scan bin QR codes, upload photos, and submit collections in seconds",
  },
  {
    icon: Coins,
    title: "Earn Rewards",
    description: "Get EcoPoints for every collection and redeem for campus perks",
  },
  {
    icon: BarChart3,
    title: "Track Impact",
    description: "See real-time data on kg recycled, CO₂ saved, and your ranking",
  },
  {
    icon: Users,
    title: "Connect Stakeholders",
    description: "Students, coordinators, and recyclers in one intelligent platform",
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="font-display font-bold text-xl">EcoPlastics</h1>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/collect">
              <Button variant="ghost" data-testid="link-login">Login</Button>
            </Link>
            <Link href="/register/student">
              <Button data-testid="button-get-started">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <Hero />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete ecosystem connecting students, coordinators, and recyclers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students already making a difference on campus
          </p>
          <Link href="/collect">
            <Button size="lg" data-testid="button-start-now">
              <Recycle className="h-5 w-5 mr-2" />
              Start Collecting Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
