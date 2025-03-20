import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <Card className="shadow-lg rounded-xl bg-white">
        <CardContent className="p-8 space-y-6">
          <h1 className="text-4xl font-bold text-center text-green-700">
            About Us
          </h1>
          <Separator className="bg-green-700" />
          <p className="text-green-600 text-lg text-center">
            We are a dedicated team committed to helping individuals recover from their injuries.
            Our mission is to provide the best resources and support for a speedy and effective recovery.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
              <p className="text-green-600">
                To offer comprehensive, user-friendly, and impactful solutions that aid in the recovery process.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-green-700">Our Vision</h2>
              <p className="text-green-600">
                To be a leading resource in injury recovery, recognized for our excellence, innovation, and dedication to our users.
              </p>
            </div>
          </div>

          <Separator className="bg-green-700" />

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-700">Join Us</h2>
            <p className="text-green-600">
              Want to be part of something amazing? Let’s work together towards a healthier future.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}