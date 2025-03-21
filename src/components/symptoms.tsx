import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import NavigationBar from './navigation_bar';
import Footer from '@/components/footer';


const SymptomsPage = () => {
  const symptomCategories = [
    {
      id: 'respiratory',
      name: 'Respiratory',
      symptoms: [
        { name: 'Cough', description: 'Sudden expulsion of air from the lungs to clear airways' },
        { name: 'Shortness of breath', description: "Difficulty breathing or feeling like you can't get enough air" },
        { name: 'Sore throat', description: 'Pain or irritation in the throat that often worsens when swallowing' },
        { name: 'Runny nose', description: 'Excess discharge of mucus from the nose' },
        { name: 'Stuffy nose', description: 'Congestion in the nasal passage making it difficult to breathe' }
      ]
    },
    {
      id: 'digestive',
      name: 'Digestive',
      symptoms: [
        { name: 'Nausea', description: 'Feeling of discomfort in the stomach with an urge to vomit' },
        { name: 'Vomiting', description: 'Forceful expulsion of stomach contents through the mouth' },
        { name: 'Diarrhea', description: 'Loose, watery bowel movements that occur more frequently than usual' },
        { name: 'Abdominal pain', description: 'Pain that occurs between the chest and pelvic regions' },
        { name: 'Loss of appetite', description: 'Reduced desire to eat or reduced food consumption' }
      ]
    },
    {
      id: 'pain',
      name: 'Pain & Discomfort',
      symptoms: [
        { name: 'Headache', description: 'Pain in any region of the head' },
        { name: 'Muscle aches', description: 'Pain or soreness in muscles throughout the body' },
        { name: 'Joint pain', description: 'Discomfort that arises from any joint' },
        { name: 'Back pain', description: 'Pain along the spine or surrounding muscles' },
        { name: 'Chest pain', description: 'Discomfort or pain that feels like pressure, fullness, or squeezing' }
      ]
    },
    {
      id: 'general',
      name: 'General',
      symptoms: [
        { name: 'Fever', description: 'Elevated body temperature often accompanied by shivering' },
        { name: 'Fatigue', description: 'Extreme tiredness resulting from mental or physical exertion' },
        { name: 'Dizziness', description: 'Feeling faint, lightheaded, or unsteady' },
        { name: 'Chills', description: "Feeling of coldness with shivering despite an environment that isn't cold" },
        { name: 'Sweating', description: 'Excessive perspiration not related to physical exertion or temperature' }
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');

  // Filter symptoms based on search term
  const filteredCategories = symptomCategories.map(category => ({
    ...category,
    symptoms: category.symptoms.filter(symptom => 
      symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      symptom.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.symptoms.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-2">Common Symptoms</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our comprehensive list of common symptoms organized by category. 
            This information is for educational purposes only and does not replace professional medical advice.
          </p>
        </div>

        <div className="mb-6 relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search symptoms..."
            className="pl-10 border-green-300 focus:ring-green-500 focus:border-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="respiratory" className="max-w-4xl mx-auto">
          <TabsList className="mb-6 bg-green-50 border border-green-100">
            {symptomCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {symptomCategories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <ScrollArea className="h-96">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(searchTerm ? filteredCategories.find(c => c.id === category.id)?.symptoms : category.symptoms)?.map(symptom => (
                    <Card key={symptom.name} className="border-green-100 hover:shadow-md transition-shadow">
                      <CardHeader className="bg-green-50 border-b border-green-100 pb-2">
                        <CardTitle className="text-lg text-green-800">{symptom.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <CardDescription className="text-gray-700">{symptom.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-green-800 mb-3">Important Note</h2>
          <p className="text-gray-700">
            If you&apos;re experiencing severe or persistent symptoms, please consult with a healthcare professional. 
            This information is meant to be educational and is not a substitute for professional medical advice, 
            diagnosis, or treatment.
          </p>
        </div>
      </main>
<Footer />
    </div>
  );
};

export default SymptomsPage;