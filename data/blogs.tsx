import React from 'react';

export interface BlogEntry {
  id: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  abstract: string; // Brief summary for the card view
  content: React.ReactNode;
}

export const blogData: Record<string, BlogEntry> = {
  "attachment-shapes": {
    id: "attachment-shapes",
    title: "How Attachment Shapes Adult Intimacy",
    date: "Feb 10, 2026",
    author: "Swapna Nair",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1680603007731-d8da76c235ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByZWxhdGlvbnNoaXB8ZW58MXx8fHwxNzYwMDA0MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    abstract: "How childhood patterns influence adult relationships.",
    content: (
      <>
        <p>
          Attachment theory, originally developed by John Bowlby and Mary Ainsworth, has evolved from a study of infant-caregiver bonds into one of the most powerful frameworks for understanding adult romantic relationships. It provides a roadmap for how we seek and maintain proximity to significant others, especially in times of stress.
        </p>
        <h3 className="text-2xl md:text-3xl text-[#2C3E50] font-medium pt-4">The Four Horsemen of Attachment</h3>
        <p>
          Most adults fall into one of four primary categories: Secure, Anxious-Preoccupied, Dismissive-Avoidant, or Fearful-Avoidant. These styles aren't just labels; they are biological strategies for managing proximity to those we love. They dictate how we handle conflict, how we communicate our needs, and how we respond to our partner's vulnerability.
        </p>
        <p>
          At NeuralConnexions, our AI Digital Twin identifies these patterns in real-time communication. For instance, when an anxious partner seeks reassurance, the AI can help an avoidant partner respond with empathy rather than withdrawal, preventing the "anxious-avoidant trap" that often leads to relationship dissolution.
        </p>
        <h3 className="text-2xl md:text-3xl text-[#2C3E50] font-medium pt-4">Breaking the Cycle</h3>
        <p>
          The beauty of neuroplasticity is that attachment styles are not set in stone. Through "earned security," individuals can transition toward more secure patterns by practicing consistent, emotionally safe communication—exactly what our micro-counseling prompts facilitate. By providing a 'pause' in the heat of the moment, we allow for a response driven by values rather than ingrained triggers.
        </p>
      </>
    )
  },
  "emotional-safety": {
    id: "emotional-safety",
    title: "Love in the Age of Technology: The Invisible Stress Test",
    date: "Feb 05, 2026",
    author: "Dr. Sohan Seth",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555728333-5ff9f9ff9538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMGNvbm5lY3Rpb24lMjBoYW5kc3xlbnwxfHx8fDE3NjAwMDQxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    abstract: "Co-regulation and trust through the lens of Polyvagal Theory.",
    content: (
      <>
        <p>
          We are more connected than ever, yet loneliness is at an all-time high. Technology has accelerated the <i>frequency</i> of our interactions while simultaneously thinning the <i>quality</i> of our emotional resonance. This creates a "stress test" on our biological capacity for connection.
        </p>
        <h3 className="text-2xl md:text-3xl text-[#2C3E50] font-medium pt-4">The Digital Dissociation</h3>
        <p>
          Text-based communication strips away the non-verbal cues—tone of voice, pupil dilation, micro-expressions—that our brains rely on to feel safe. Without these, our "social engagement system" often defaults to a defensive state. We misread intent, we fill in the gaps with our own insecurities, and we lose the 'shimmer' of real-time presence.
        </p>
        <p>
          NeuralConnexions addresses this by re-injecting emotional intelligence into digital layers. Our NLP profiling doesn't just read words; it analyzes the <i>rhythm</i> and <i>sentimental velocity</i> of your exchanges to warn you when emotional safety is eroding before a conflict even begins. It's like having a translator for the unspoken emotional data.
        </p>
        <h3 className="text-2xl md:text-3xl text-[#2C3E50] font-medium pt-4">From Extraction to Augmentation</h3>
        <p>
          Most social platforms are designed for extraction—extracting your time, your data, your attention. We are building for augmentation: using AI to strengthen the bond between two humans, not to replace the partner with an algorithm. The goal is to get you <i>off</i> the screen and back into each other's arms with deeper understanding.
        </p>
      </>
    )
  },
  "geometry-of-love": {
    id: "geometry-of-love",
    title: "The Living Map of Love: Animating Sternberg's Geometry",
    date: "Jan 28, 2026",
    author: "Snehal Nair",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1556695725-3cc4a29d4ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwdGhlcmFweXxlbnwxfHx8fDE3NjAwMDQxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    abstract: "Attachment pairings and repetition compulsion explained.",
    content: (
      <>
        <p>
          Robert Sternberg's Triangular Theory of Love—comprising Intimacy, Passion, and Commitment—has been the gold standard of relational psychology for decades. But love isn't a static triangle; it's a dynamic, breathing entity that shifts and turns with the seasons of life.
        </p>
        <h3 className="text-2xl md:text-3xl text-[#2C3E50] font-medium pt-4">The Animate Triangle</h3>
        <p>
          In a healthy relationship, the weight of these three pillars shifts over time. During the 'Nurture' phase, intimacy might take center stage as you learn the landscape of each other's souls. During the 'Sustain' phase, commitment becomes the bedrock that holds the structure through storms.
        </p>
        <p>
          NeuralConnexions visualizes this geometry for you. By analyzing shared goals, communication patterns, and conflict resolution, we map your relationship's "current shape." Are you heavy on passion but low on commitment? Are you drifting into "companionate love"? We provide the data to help you balance your own unique triangle.
        </p>
        <h3 className="text-2xl md:text-3xl text-[#2C3E50] font-medium pt-4">Data-Driven Devotion</h3>
        <p>
          Seeing the map allows you to navigate. If the AI detects a drop in the 'Intimacy' vector, it might suggest a specific micro-intervention: a shared activity or a vulnerability prompt designed to re-expand that part of your triangle. Devotion is no longer a mystery; it's a practice guided by insight.
        </p>
      </>
    )
  }
};
