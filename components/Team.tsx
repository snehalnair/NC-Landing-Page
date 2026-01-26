"use client";

import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Team() {
  const team = [
    {
      name: "Swapna Nair",
      role: "CEO / Visionary Lead",
      focus: "Behavioral design & ethics",
      initials: "SN",
      color: "#8CA3B0"
    },
    {
      name: "Dr. Sohan Seth",
      role: "Chief AI Scientist",
      focus: "NLP & predictive modeling",
      initials: "SS",
      color: "#E7A59C"
    },
    {
      name: "Snehal Nair",
      role: "Lead Data Scientist",
      focus: "Cloud systems & scalability",
      initials: "SN",
      color: "#8CA3B0"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#2C3E50]">
            The Minds Behind the Machine.
          </h2>
          <p className="text-lg text-[#717182]">
            A multidisciplinary team united by a vision of human-AI synergy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <Avatar className="w-32 h-32 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <AvatarFallback 
                    className="text-2xl text-white"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Info */}
              <h3 className="mb-2 text-[#2C3E50]">{member.name}</h3>
              <p className="text-sm text-[#8CA3B0] mb-3">{member.role}</p>
              <p className="text-sm text-[#717182] italic">{member.focus}</p>
            </div>
          ))}
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#DCE7F3] to-[#E7A59C]/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-[#2C3E50] leading-relaxed">
              We believe that the most powerful technology doesn't replace human connection — it amplifies it. Our diverse backgrounds in psychology, AI, and systems design converge on one mission: making empathy scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}