import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 bg-green-50 p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-green-700">Revolutionizing Health Education</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We&apos;re dedicated to making health information accessible and interactive, helping you understand your body better through innovative technology.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <span className="text-green-700 font-semibold">50K+ Users</span>
          <span className="text-green-700 font-semibold">Certified Experts</span>
        </div>
      </section>

      {/* Mission Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>To provide accurate, accessible, and interactive health education that empowers individuals to make informed decisions about their well-being.</p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Education First", desc: "Delivering medical information in simple and understandable terms." },
          { title: "Patient-Centered", desc: "Focusing on individualized care and knowledge-sharing." },
          { title: "Innovation", desc: "Using cutting-edge technology for interactive health education." }
        ].map((feature, index) => (
          <Card key={index} className="text-center p-4">
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
