"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { blogData } from "../data/blogs";

export default function ResearchHub({ onSelectPost }: { onSelectPost: (id: string) => void }) {
  const featuredResearch = Object.values(blogData).slice(0, 3);

  const academicReferences = [
    {
      title: "Attachment in Adulthood",
      authors: "Mikulincer & Shaver",
      year: "2007",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      title: "Attachment, Emotion Regulation, and Wellbeing in Couples",
      authors: "Brandão et al.",
      year: "2019",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      title: "Polyvagal Theory",
      authors: "Porges",
      year: "2011",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    }
  ];

  return (
    <section id="research" className="py-24 bg-gradient-to-br from-[#DCE7F3]/20 via-white to-[#E7A59C]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-[#8CA3B0]" />
            <h2 className="text-4xl md:text-5xl text-[#2C3E50]">
              The Science of Human Connection.
            </h2>
          </div>
          <p className="text-lg text-[#717182]">
            Explore the psychology, neuroscience, and AI research behind NeuralConnexions.
          </p>
        </div>

        {/* Featured Research Series */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-[#2C3E50] text-center">Featured Research Series</h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredResearch.map((research, index) => (
              <Card 
                key={index} 
                onClick={() => onSelectPost(research.id)}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={research.image}
                    alt={research.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="mb-3 text-[#2C3E50] group-hover:text-[#8CA3B0] transition-colors">
                    {research.title}
                  </h4>
                  <p className="text-sm text-[#717182] mb-4 leading-relaxed">
                    {research.abstract}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-[#8CA3B0] hover:text-[#7a93a0] p-0 h-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPost(research.id);
                    }}
                  >
                    Read <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic References */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl mb-8 text-[#2C3E50] text-center">Academic References</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {academicReferences.map((ref, index) => (
                <div 
                  key={index}
                  className="flex items-start justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="flex-1">
                    <h4 className="text-[#2C3E50] mb-1">
                      {ref.title}
                    </h4>
                    <p className="text-sm text-[#717182]">
                      {ref.authors} ({ref.year})
                    </p>
                  </div>
                  <a 
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8CA3B0] hover:text-[#7a93a0] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-[#8CA3B0] text-[#8CA3B0] hover:bg-[#8CA3B0] hover:text-white"
            >
              Subscribe for new research drops
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}