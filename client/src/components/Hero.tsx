import { Button } from "@/components/ui/button";
import { Leaf, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--background)) 100%)`
        }}
      />
      
      <div className="container relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">IoT-Enabled Campus Recycling</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            Transform Campus Waste Into{" "}
            <span className="text-primary">Environmental Impact</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Submit collections, earn EcoPoints, and track real-time impact. Connect students, coordinators, and recyclers in one intelligent platform.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/register/student">
              <Button size="lg" data-testid="button-start-collecting">
                Start Collecting
              </Button>
            </Link>
            <Link href="/register/company">
              <Button size="lg" variant="outline" data-testid="button-partner-with-us">
                Partner With Us
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">2.5K+</div>
              <div className="text-sm text-muted-foreground mt-1">kg Recycled</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">1.8K</div>
              <div className="text-sm text-muted-foreground mt-1">Students Active</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">320</div>
              <div className="text-sm text-muted-foreground mt-1">Tons CO₂ Saved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
