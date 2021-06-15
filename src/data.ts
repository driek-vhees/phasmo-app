type EvidenceType = "emf_level_5" | "fingerprints" | "freezing_temperature" | "spirit_box" | "ghost_orbs" | "ghost_writing";

type Ghost = {
  name: string;
  description: string;
  strengths: string;
  weaknesses: string;
  evidence: [],
};


const ghosts: Ghost[] = [
  {
    name: "Banshee",
    description: "A Banshee is a natural hunter and will attack anything. It has been known to stalk its prey one at a time until making its kill.",
    strengths: "A Banshee will only target one person at a time.",
    weaknesses: "Banshees fear the Crucifix and will be less aggressive when near one.",
    evidences: ["emf_level5", "fingerprints", "freezing_temperature"],
  },
  {
    name: "Demon",
    description: "A Demon is one of the worst Ghosts you can encounter. It has been known to attack without a reason.",
    strengths: "Demons will attack more often than any other Ghost.",
    weaknesses: "Asking a Demon successful questions on the Ouija Board won't lower the user's sanity.",
    evidences: ["freezing_temperature", "ghost_writing", "spirit_box"],
  },
  {
    name: "Hantu",
    description: "A rare ghost that can be found in hot climates. They are known to attack more often in cold weather.",
    strengths: "Moves faster in colder areas.",
    weaknesses: "Moves slower in warmer areas.",
    evidences: ["freezing_temperature", "ghost_orbs", "fingerprints"],
  },
];
