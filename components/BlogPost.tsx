"use client";

import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    date: string;
    author: string;
    readTime: string;
    image: string;
    content: React.ReactNode;
  };
  onBack: () => void;
}

export function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="group flex items-center gap-2 text-[#717182] hover:text-[#2C3E50]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Research
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#717182] hover:text-[#8CA3B0]">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <article className="pb-24">
        {/* Hero Section */}
        <div className="w-full h-[60vh] relative mb-16">
          <ImageWithFallback 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-16">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm mb-6 uppercase tracking-widest font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#E7A59C]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#E7A59C]" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E7A59C]" />
                    {post.readTime}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] mb-4">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-lg md:text-xl text-[#717182] leading-relaxed">
              {post.content}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 pt-12 border-t border-gray-100">
            <div className="bg-[#DCE7F3]/20 rounded-3xl p-8 md:p-12 text-center">
              <p className="text-xl md:text-2xl text-[#2C3E50] italic font-playfair mb-8">
                "Relational health is the foundation of human thriving. At NeuralConnexions, we build the bridge between what we feel and how we connect."
              </p>
              <Button 
                onClick={onBack}
                size="lg"
                className="bg-[#8CA3B0] hover:bg-[#7a93a0] text-white px-8 py-6 h-auto text-lg transition-all shadow-md hover:shadow-lg"
              >
                Continue Exploring Research
              </Button>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
