export type EvidenceType = "emf_level_5" | "fingerprints" | "freezing_temperature" | "spirit_box" | "ghost_orbs" | "ghost_writing";

export type Ghost = {
  name: string;
  description: string;
  strengths: string;
  weaknesses: string;
  evidences: [EvidenceType, EvidenceType, EvidenceType],
};

export type Evidence = {
  evidenceType: EvidenceType;
  evidenceName: string;
};

export const EVIDENCES: ReadonlyArray<Evidence> = [
  {evidenceType: "emf_level_5", evidenceName: "EMF lvl. 5"},
  {evidenceType: "fingerprints", evidenceName: "Fingerprints"},
  {evidenceType: "freezing_temperature", evidenceName: "Freezing tmp."},
  {evidenceType: "spirit_box", evidenceName: "Spiritbox"},
  {evidenceType: "ghost_orbs", evidenceName: "Ghost-orbs"},
  {evidenceType: "ghost_writing", evidenceName: "Ghost-writing"},
];


export const GHOSTS: ReadonlyArray<Ghost> = [
  {
    name: "Banshee",
    description: "A Banshee is a natural hunter and will attack anything. It has been known to stalk its prey one at a time until making its kill.",
    strengths: "A Banshee will only target one person at a time.",
    weaknesses: "Banshees fear the Crucifix and will be less aggressive when near one.",
    evidences: ["emf_level_5", "fingerprints", "freezing_temperature"],
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
  {
    name: "Jinn",
    description: "A Jinn is a territorial ghost that will attack when threatened. It has also been known to be able to travel at significant speed.",
    strengths: "A Jinn will travel at a faster speed if its victim is far away.",
    weaknesses: "Turning off the locations power source will prevent the Jinn from using its ability.",
    evidences: ["emf_level_5", "ghost_orbs", "spirit_box"],
  },
  {
    name: "Mare",
    description: "A Mare is the source of all nightmares, making it most powerful in the dark.",
    strengths: "A Mare will have an increased chance to attack in the dark.",
    weaknesses: "Turning the lights on around the Mare will lower its chance to attack.",
    evidences: ["freezing_temperature", "ghost_orbs", "spirit_box"],
  },
  {
    name: "Oni",
    description: "Oni's are a cousin to the Demon and possess extreme strength. There have been rumours that they become more active around their prey.",
    strengths: "Oni's are more active when people are nearby and have been seen moving objects at great speed.",
    weaknesses: "Being more active make the Oni easier to find and identify.",
    evidences: ["emf_level_5", "ghost_writing", "spirit_box"],
  },
  {
    name: "Phantom",
    description: "A Phantom is a ghost that can possess the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.",
    strengths: "Looking at a Phantom will considerably drop your sanity.",
    weaknesses: "Taking a photo of the Phantom will make it temporarily disappear.",
    evidences: ["emf_level_5", "freezing_temperature", "ghost_orbs"],
  },
  {
    name: "Poltergeist",
    description: "One of the most famous Ghosts, a Poltergeist, also known as a noisy ghost can manipulate objects around it to spread fear into its victims.",
    strengths: "A Poltergeist can throw huge amounts of objects at once.",
    weaknesses: "A Poltergeist is almost ineffective in an empty room.",
    evidences: ["fingerprints", "ghost_orbs", "spirit_box"],
  },
  {
    name: "Revenant",
    description: "A Revenant is a slow but violent ghost that will attack indiscriminately. It has been rumoured to travel at a significantly high speed when hunting.",
    strengths: "A Revenant will travel at a significantly faster speed when hunting a victim.",
    weaknesses: "Hiding from the Revenant will cause it to move very slowly.",
    evidences: ["emf_level_5", "fingerprints", "ghost_writing"],
  },
  {
    name: "Shade",
    description: "A Shade is known to be a Shy Ghost. There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.",
    strengths: "Being shy means the Ghost will be harder to find.",
    weaknesses: "The Ghost will not enter hunting mode if there is multiple people nearby.",
    evidences: ["emf_level_5", "ghost_orbs", "ghost_writing"],
  },
  {
    name: "Spirit",
    description: "A Spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.",
    strengths: "Nothing.",
    weaknesses: "Using Smudge Sticks on a spirit will stop it attacking for a long period of time.",
    evidences: ["fingerprints", "ghost_writing", "spirit_box"],
  },
  {
    name: "Wraith",
    description: "A wraith is one of the most dangerous ghosts you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.",
    strengths: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps.",
    weaknesses: "Wraiths have a toxic reaction to Salt.",
    evidences: ["fingerprints", "freezing_temperature", "spirit_box"],
  },
  {
    name: "Yokai",
    description: "A common type of ghost that is attracted to human voices. They can usually be found haunting family homes.",
    strengths: "Talking near a Yokai will anger it and cause it to attack more often.",
    weaknesses: "While hunting, it can only hear voices close to it.",
    evidences: ["spirit_box", "ghost_orbs", "ghost_writing"],
  },
  {
    name: "Yurei",
    description: "A Yurei is a Ghost that has returned to the physical world, usually for the purpose of revenge or hatred.",
    strengths: "Yurei's have been known to have a stronger effect on people sanity.",
    weaknesses: "Smudging the Yurei's room will cause it to not wander around the location for a long time.",
    evidences: ["freezing_temperature", "ghost_orbs", "ghost_writing"],
  },
];
