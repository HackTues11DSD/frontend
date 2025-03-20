import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <Card className="shadow-md rounded-xl bg-white border border-green-500">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-4xl font-bold text-center text-green-700">
            About Us
          </h1>
          <Separator className="bg-green-500" />
          <p className="text-gray-700 text-lg text-center">
            We are a passionate team dedicated to delivering high-quality products and services.
            Our goal is to create innovative solutions that empower businesses and individuals.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative, user-friendly, and impactful solutions that help businesses and individuals succeed.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-700">Our Vision</h2>
              <p className="text-gray-600">
                To be a leader in our industry, recognized for excellence, innovation, and commitment to our customers.
              </p>
            </div>
          </div>

          <Separator className="bg-green-500" />

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-700">Join Us</h2>
            <p className="text-gray-600">
              Want to be part of something amazing? Let’s build the future together.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
