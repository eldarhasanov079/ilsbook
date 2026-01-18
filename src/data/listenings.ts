export type Track = { title: string; file: string };

export const units: Record<number, Track[]> = {
  1: [{ title: "Listening 1", file: "/listenings/listening1.mp3" }],
  2: [{ title: "Listening 2", file: "/listenings/listening2.mp3" }],
  3: [{ title: "Listening 3", file: "/listenings/listening3.mp3" }],
  4: [{ title: "Listening 4", file: "/listenings/listening4.mp3" }],
  5: [{ title: "Listening 5", file: "/listenings/listening5.mp3" }],
  6: [{ title: "Listening 6", file: "/listenings/listening6.mp3" }],
  7: [{ title: "Listening 7", file: "/listenings/listening7.mp3" }],

  // Unit 8 has multiple:
  8: [
    { title: "Listening 8", file: "/listenings/listening8(b).mp3" },
    { title: "Listening 8 (Add-on 1)", file: "/listenings/listening8(ad1).mp3" },
    { title: "Listening 8 (Add-on 2)", file: "/listenings/listening8(ad2).mp3" },
    { title: "Listening 8 (Add-on 3)", file: "/listenings/listening8(ad3).mp3" },
  ],

  9: [{ title: "Listening 9", file: "/listenings/listening9.mp3" }],
  10: [{ title: "Listening 10", file: "/listenings/listening10.mp3" }],
};

export const unitNumbers = Object.keys(units).map(Number).sort((a, b) => a - b);
