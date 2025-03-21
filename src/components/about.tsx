import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-green-100 p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 bg-green-40 p-10 rounded-lg shadow-md max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700">Revolutionizing Health Education</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <span className="text-green-700 font-semibold">50K+ Users</span>
          <span className="text-green-700 font-semibold">Certified Experts</span>
        </div>
      </section>

      {/* Mission Section */}
      <Card className="shadow-lg transition-transform transform hover:scale-105 max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-green-700">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-green-700">
          <p>
            To provide accurate, accessible, and interactive health education that empowers individuals to make informed decisions about their well-being.
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Education First", desc: "Delivering medical information in simple and understandable terms." },
          { title: "Patient-Centered", desc: "Focusing on individualized care and knowledge-sharing." },
          { title: "Innovation", desc: "Using cutting-edge technology for interactive health education." }
        ].map((feature, index) => (
          <Card key={index} className="text-center p-4 shadow-lg transition-transform transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-green-700">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
