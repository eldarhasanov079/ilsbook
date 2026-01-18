export type Track = { title: string; file: string };

export const units: Record<number, Track[]> = {
  1: [{ title: "MindTalk Radio: Who We Are and Who We Admire", file: "/listenings/listening1.mp3" }],
  2: [{ title: "Academic Success Seminar: Learning Styles & Study Strategies", file: "/listenings/listening2.mp3" }],
  3: [{ title: "Future Tech Café Chat", file: "/listenings/listening3.mp3" }],
  4: [{ title: "The Characters in Famous Paintings", file: "/listenings/listening4.mp3" }],
  5: [{ title: "Don't Judge a Book by Its Film", file: "/listenings/listening5.mp3" }],
  6: [{ title: "Student Voices: Fashion, Trends & Online Shopping", file: "/listenings/listening6.mp3" }],
  7: [{ title: "Healthy Choices for Student Life", file: "/listenings/listening7.mp3" }],

  // Unit 8 has multiple:
  8: [
    { title: "Budget vs Luxury Travel: A Tale of Two Trips", file: "/listenings/listening8(b).mp3" },
    { title: "Travel Agency Advertisement: Thailand Discovery Tour", file: "/listenings/listening8(ad1).mp3" },
    { title: "Travel Agency Advertisement: Swiss Panorama by Train", file: "/listenings/listening8(ad2).mp3" },
    { title: "Travel Agency Advertisement: Greek Island Cruise", file: "/listenings/listening8(ad3).mp3" },
  ],

  9: [{ title: "International Weather Forecast", file: "/listenings/listening9.mp3" }],
  10: [{ title: "Environmental Challenges & Renewable Solutions", file: "/listenings/listening10.mp3" }],
};

export const unitNumbers = Object.keys(units).map(Number).sort((a, b) => a - b);
