import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf, Building, Mail, Lock, Phone, MapPin } from "lucide-react";

const polymerTypes = [
  { id: "PET", label: "PET (Polyethylene Terephthalate)" },
  { id: "HDPE", label: "HDPE (High-Density Polyethylene)" },
  { id: "PVC", label: "PVC (Polyvinyl Chloride)" },
  { id: "LDPE", label: "LDPE (Low-Density Polyethylene)" },
  { id: "PP", label: "PP (Polypropylene)" },
  { id: "PS", label: "PS (Polystyrene)" },
];

export default function CompanyRegistration() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    serviceAreas: "",
    polymers: [] as string[],
  });

  const togglePolymer = (polymerId: string) => {
    setFormData({
      ...formData,
      polymers: formData.polymers.includes(polymerId)
        ? formData.polymers.filter(id => id !== polymerId)
        : [...formData.polymers, polymerId]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Company registration:", formData);
    alert("Registration submitted! Your account will be reviewed within 24 hours.");
    setLocation("/portal");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link href="/">
            <div className="flex items-center justify-center gap-2 mb-4 cursor-pointer">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="font-display font-bold text-2xl">EcoPlastics</h1>
            </div>
          </Link>
          <h2 className="font-display text-2xl font-bold mb-2">Recycler Registration</h2>
          <p className="text-muted-foreground">Join our network of verified recycling partners</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Your application will be reviewed before approval</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="company-name"
                      type="text"
                      placeholder="GreenCycle Inc."
                      className="pl-10"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                      data-testid="input-company-name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@company.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      data-testid="input-password"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Business Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="address"
                    type="text"
                    placeholder="123 Green Street, City, State, ZIP"
                    className="pl-10"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    data-testid="input-address"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service-areas">Service Areas</Label>
                <Textarea
                  id="service-areas"
                  placeholder="e.g., Downtown, North Campus, South Campus..."
                  value={formData.serviceAreas}
                  onChange={(e) => setFormData({ ...formData, serviceAreas: e.target.value })}
                  rows={2}
                  required
                  data-testid="textarea-service-areas"
                />
              </div>

              <div className="space-y-3">
                <Label>Accepted Polymer Types</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {polymerTypes.map((polymer) => (
                    <div key={polymer.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={polymer.id}
                        checked={formData.polymers.includes(polymer.id)}
                        onCheckedChange={() => togglePolymer(polymer.id)}
                        data-testid={`checkbox-${polymer.id.toLowerCase()}`}
                      />
                      <Label
                        htmlFor={polymer.id}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {polymer.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-muted rounded-md text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Verification Required</p>
                <p>After registration, you'll need to submit business documents for KYC verification. This typically takes 1-2 business days.</p>
              </div>

              <Button type="submit" className="w-full" data-testid="button-register">
                Submit Application
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/portal">
                  <a className="text-primary hover:underline" data-testid="link-login">
                    Sign in
                  </a>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Registering as a student?</p>
          <Link href="/register/student">
            <Button variant="outline" data-testid="link-student-register">
              <Leaf className="h-4 w-4 mr-2" />
              Register as Student
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
