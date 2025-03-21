"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "@/components/navigation_bar";

interface Treatment {
  name: string;
  description: string;
  examples: string[];
  common_uses: string;
}

interface TreatmentCategory {
  id: string;
  name: string;
  treatments: Treatment[];
}

interface TreatmentSummaryResponse {
  extract?: string;
  title?: string;
}

const TreatmentsPage = () => {
  const treatmentCategories: TreatmentCategory[] = [
    {
      id: "medications",
      name: "Medications",
      treatments: [
        {
          name: "Analgesics",
          description:
            "Medications to relieve pain without producing anesthesia",
          examples: [
            "Acetaminophen (Tylenol)",
            "Ibuprofen (Advil, Motrin)",
            "Aspirin",
            "Naproxen (Aleve)",
          ],
          common_uses: "Pain relief, fever reduction, inflammation management",
        },
        {
          name: "Antibiotics",
          description:
            "Medications that kill or inhibit the growth of bacteria",
          examples: [
            "Amoxicillin",
            "Azithromycin",
            "Ciprofloxacin",
            "Doxycycline",
          ],
          common_uses:
            "Bacterial infections including respiratory, urinary, and skin infections",
        },
        {
          name: "Antihistamines",
          description:
            "Medications that reduce or block histamines, used to treat allergy symptoms",
          examples: [
            "Cetirizine (Zyrtec)",
            "Loratadine (Claritin)",
            "Diphenhydramine (Benadryl)",
          ],
          common_uses: "Allergies, hay fever, hives, and as a sleep aid",
        },
        {
          name: "Decongestants",
          description:
            "Medications that relieve nasal congestion by reducing swelling of nasal tissues",
          examples: ["Pseudoephedrine (Sudafed)", "Phenylephrine (Sudafed PE)"],
          common_uses:
            "Nasal and sinus congestion from allergies, colds, or flu",
        },
        {
          name: "Antacids",
          description: "Medications that neutralize stomach acid",
          examples: [
            "Calcium carbonate (Tums)",
            "Aluminum hydroxide/magnesium hydroxide (Maalox)",
          ],
          common_uses: "Heartburn, acid reflux, indigestion",
        },
      ],
    },
    {
      id: "procedures",
      name: "Medical Procedures",
      treatments: [
        {
          name: "Physical Therapy",
          description:
            "Specialized exercises and techniques to improve mobility and physical function",
          examples: [
            "Range of motion exercises",
            "Strength training",
            "Balance training",
            "Manual therapy",
          ],
          common_uses:
            "Recovery from injuries, chronic pain management, muscle strengthening",
        },
        {
          name: "Surgery",
          description:
            "Medical procedures that involve cutting tissues to diagnose or treat conditions",
          examples: [
            "Appendectomy",
            "Knee arthroscopy",
            "Cataract surgery",
            "Cesarean section",
          ],
          common_uses:
            "Treating injuries, removing tumors, repairing tissues, transplanting organs",
        },
        {
          name: "Immunotherapy",
          description:
            "Treatments that stimulate or suppress the immune system to help the body fight cancer, infection, and other diseases",
          examples: [
            "Allergy shots",
            "Monoclonal antibodies",
            "Cancer immunotherapy",
            "Checkpoint inhibitors",
          ],
          common_uses: "Allergies, autoimmune disorders, cancer treatment",
        },
        {
          name: "Radiation Therapy",
          description:
            "Treatment using high-energy radiation to shrink tumors and kill cancer cells",
          examples: [
            "External beam radiation",
            "Brachytherapy",
            "Proton therapy",
          ],
          common_uses: "Cancer treatment, particularly for solid tumors",
        },
        {
          name: "Respiratory Therapy",
          description:
            "Specialized treatments for people with breathing disorders",
          examples: [
            "Oxygen therapy",
            "Nebulizer treatments",
            "CPAP/BiPAP",
            "Chest physiotherapy",
          ],
          common_uses: "Asthma, COPD, sleep apnea, cystic fibrosis",
        },
      ],
    },
    {
      id: "complementary",
      name: "Complementary Therapies",
      treatments: [
        {
          name: "Acupuncture",
          description:
            "Traditional Chinese medicine technique involving the insertion of thin needles into specific points on the body",
          examples: [
            "Traditional acupuncture",
            "Electroacupuncture",
            "Auricular acupuncture",
          ],
          common_uses: "Pain management, stress reduction, nausea relief",
        },
        {
          name: "Massage Therapy",
          description:
            "Manipulation of soft tissues of the body including muscles, connective tissue, tendons, and ligaments",
          examples: [
            "Swedish massage",
            "Deep tissue massage",
            "Sports massage",
            "Trigger point therapy",
          ],
          common_uses:
            "Stress reduction, pain relief, improved circulation, muscle relaxation",
        },
        {
          name: "Herbal Medicine",
          description: "Use of plants or plant extracts for medicinal purposes",
          examples: [
            "Echinacea",
            "Ginger",
            "Turmeric",
            "St. John's Wort",
            "Valerian root",
          ],
          common_uses:
            "Immune support, nausea relief, inflammation reduction, sleep aid",
        },
        {
          name: "Meditation",
          description:
            "Mind-body practice that involves focusing attention and awareness",
          examples: [
            "Mindfulness meditation",
            "Guided meditation",
            "Transcendental meditation",
          ],
          common_uses:
            "Stress reduction, anxiety management, improved concentration, emotional well-being",
        },
        {
          name: "Dietary Approaches",
          description: "Using food and nutrition to manage health conditions",
          examples: [
            "Mediterranean diet",
            "DASH diet",
            "Anti-inflammatory diet",
            "Elimination diets",
          ],
          common_uses:
            "Heart health, blood pressure management, inflammation reduction, food sensitivity identification",
        },
      ],
    },
    {
      id: "lifestyle",
      name: "Lifestyle Modifications",
      treatments: [
        {
          name: "Exercise Therapy",
          description:
            "Structured physical activity programs designed to improve health and fitness",
          examples: [
            "Aerobic exercise",
            "Resistance training",
            "Flexibility exercises",
            "Balance training",
          ],
          common_uses:
            "Weight management, cardiovascular health, mood improvement, diabetes management",
        },
        {
          name: "Sleep Hygiene",
          description:
            "Practices and habits that promote good sleep quality and adequate sleep duration",
          examples: [
            "Consistent sleep schedule",
            "Bedroom environment optimization",
            "Pre-sleep relaxation routines",
          ],
          common_uses:
            "Insomnia management, sleep quality improvement, fatigue reduction",
        },
        {
          name: "Stress Management",
          description: "Techniques to reduce and cope with stress",
          examples: [
            "Deep breathing exercises",
            "Progressive muscle relaxation",
            "Time management strategies",
          ],
          common_uses:
            "Anxiety reduction, improved mental health, prevention of stress-related health problems",
        },
        {
          name: "Nutritional Changes",
          description: "Modifications to dietary intake to support health",
          examples: [
            "Reduced sodium intake",
            "Increased fiber consumption",
            "Healthy fat substitution",
          ],
          common_uses:
            "Blood pressure management, digestive health, heart disease prevention",
        },
        {
          name: "Smoking Cessation",
          description:
            "Programs and techniques to help people quit using tobacco products",
          examples: [
            "Nicotine replacement therapy",
            "Behavioral counseling",
            "Support groups",
          ],
          common_uses:
            "Reducing cancer risk, improving lung function, enhancing overall health",
        },
      ],
    },
    {
      id: "viruses",
      name: "Viruses",
      treatments: [
        {
          name: "Influenza virus",
          description: "A contagious respiratory illness causing seasonal flu.",
          examples: ["Flu"],
          common_uses: "Seasonal flu outbreaks",
        },
        {
          name: "Coronavirus",
          description:
            "A family of viruses that can cause illnesses ranging from the common cold to severe diseases such as COVID-19.",
          examples: ["SARS-CoV-2"],
          common_uses: "COVID-19 pandemic",
        },
        {
          name: "Ebola virus",
          description: "A rare but deadly virus that causes hemorrhagic fever.",
          examples: ["Ebola"],
          common_uses: "Ebola outbreaks",
        },
        {
          name: "HIV",
          description:
            "Human Immunodeficiency Virus that causes AIDS by attacking the immune system.",
          examples: ["HIV-1", "HIV-2"],
          common_uses: "Chronic immunodeficiency",
        },
        {
          name: "Herpes simplex virus",
          description: "A virus that causes oral and genital herpes.",
          examples: ["HSV-1", "HSV-2"],
          common_uses: "Herpes infections",
        },
        {
          name: "Hepatitis B virus",
          description:
            "A virus that causes Hepatitis B, an infection that affects the liver.",
          examples: ["HBV"],
          common_uses: "Liver infection",
        },
        {
          name: "Hepatitis C virus",
          description:
            "A virus that causes Hepatitis C, another form of liver infection.",
          examples: ["HCV"],
          common_uses: "Liver infection",
        },
        {
          name: "Rhinovirus",
          description:
            "The most common viral infectious agent in humans, primarily causing the common cold.",
          examples: ["Cold virus"],
          common_uses: "Common cold",
        },
        {
          name: "Respiratory syncytial virus",
          description:
            "A virus that causes respiratory tract infections, especially in young children.",
          examples: ["RSV"],
          common_uses: "Bronchiolitis",
        },
        {
          name: "Zika virus",
          description:
            "A mosquito-borne virus that can cause birth defects in newborns.",
          examples: ["Zika"],
          common_uses: "Zika fever",
        },
        {
          name: "Dengue virus",
          description:
            "A virus transmitted by mosquitoes that causes dengue fever.",
          examples: ["Dengue"],
          common_uses: "Dengue fever",
        },
        {
          name: "Poliovirus",
          description:
            "The virus that causes poliomyelitis (polio), a disease that can lead to paralysis.",
          examples: ["Polio"],
          common_uses: "Polio",
        },
        {
          name: "Norovirus",
          description:
            "A virus that causes gastroenteritis and is often associated with outbreaks in confined settings.",
          examples: ["Stomach flu"],
          common_uses: "Gastroenteritis",
        },
        {
          name: "Papillomavirus",
          description:
            "A virus linked to skin warts and various cancers, including cervical cancer.",
          examples: ["HPV"],
          common_uses: "Cervical cancer",
        },
        {
          name: "Varicella-zoster virus",
          description: "The virus responsible for chickenpox and shingles.",
          examples: ["Chickenpox", "Shingles"],
          common_uses: "Chickenpox and shingles",
        },
        {
          name: "Cytomegalovirus",
          description:
            "A common virus that can be dangerous for immunocompromised individuals.",
          examples: ["CMV"],
          common_uses: "Infections in immunocompromised",
        },
      ],
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [expandedTreatment, setExpandedTreatment] = React.useState<
    string | null
  >(null);
  const [summary, setSummary] = React.useState("");

  async function handleLearnMore(treatment: Treatment): Promise<void> {
    if (expandedTreatment === treatment.name) {
      setExpandedTreatment(null);
      setSummary("");
      return;
    }
    setExpandedTreatment(treatment.name);
    setSummary("Loading summary...");

    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          treatment.name
        )}`
      );
      if (!response.ok) {
        // If response is not ok, show message
        setSummary("There is no information for this treatment.");
        return;
      }
      const data: TreatmentSummaryResponse = await response.json();
      if (data.title === "Not found." || !data.extract) {
        setSummary("There is no information for this treatment.");
      } else {
        setSummary(data.extract);
      }
    } catch (error) {
      setSummary("There is no information for this treatment.");
    }
  }

  const filteredCategories = treatmentCategories
    .map((category) => ({
      ...category,
      treatments: category.treatments.filter(
        (treatment) =>
          treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          treatment.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          treatment.examples.some((example) =>
            example.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          treatment.common_uses.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.treatments.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-2">
            Common Treatments
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive list of common medical treatments and
            therapeutic approaches. This information is for educational purposes
            only and should not replace professional medical advice.
          </p>
        </div>

        <div className="mb-6 relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search treatments..."
            className="pl-10 border-green-300 focus:ring-green-500 focus:border-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="medications" className="max-w-4xl mx-auto">
          <TabsList className="mb-6 bg-green-50 border border-green-100">
            {treatmentCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {treatmentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <ScrollArea className="h-96">
                <div className="grid grid-cols-1 gap-4">
                  {(searchTerm
                    ? filteredCategories.find((c) => c.id === category.id)
                        ?.treatments
                    : category.treatments
                  )?.map((treatment) => (
                    <Card
                      key={treatment.name}
                      className="border-green-100 hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="bg-green-50 border-b border-green-100">
                        <CardTitle className="text-lg text-green-800">
                          {treatment.name}
                        </CardTitle>
                        <CardDescription className="text-gray-700">
                          {treatment.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="mb-3">
                          <h3 className="font-medium text-green-700 mb-1">
                            Common Uses:
                          </h3>
                          <p className="text-gray-700">
                            {treatment.common_uses}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium text-green-700 mb-2">
                            Examples:
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {treatment.examples.map((example, index) => (
                              <Badge
                                key={index}
                                className="bg-green-100 text-green-800 hover:bg-green-200"
                              >
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t border-green-100 bg-green-50">
                        <Button
                          variant="outline"
                          className="text-green-700 border-green-300 hover:bg-green-100 hover:text-green-800"
                          onClick={() => handleLearnMore(treatment)}
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                      {expandedTreatment === treatment.name && (
                        <div className="p-4 border-t border-green-100 bg-green-50">
                          <pre className="text-sm whitespace-pre-wrap">
                            {summary}
                          </pre>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-100 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            Medical Disclaimer
          </h2>
          <p className="text-gray-700">
            The information provided on this page is for general educational
            purposes only and is not a substitute for professional medical
            advice, diagnosis, or treatment. Always seek the advice of your
            physician or other qualified health provider with any questions you
            may have regarding a medical condition. Never disregard professional
            medical advice or delay seeking it because of something you have
            read on this website.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TreatmentsPage;
