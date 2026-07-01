export const exampleBrief = {
  projectName: "Robot Skill Forge",
  primaryObject: "robot skill unit",
  primaryAction: "select and train a robot",
  audience: "builders comparing robot capabilities",
  mood: "cinematic, capable, precise",
  robots: [
    { name: "Atlas", role: "Loadout captain", stat: "98", tone: "tactical" },
    { name: "Neo", role: "Dexterity scout", stat: "91", tone: "agile" },
    { name: "Phoenix", role: "Recovery unit", stat: "87", tone: "resilient" },
    { name: "Digit", role: "Warehouse runner", stat: "84", tone: "practical" },
    { name: "Figure", role: "Human assist", stat: "93", tone: "adaptive" }
  ],
  skills: ["Grip", "Balance", "Vision", "Route", "Repair"]
};

export type ExampleBrief = typeof exampleBrief;
