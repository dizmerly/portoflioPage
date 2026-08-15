/*
  ──────────────────────────────────────────────────────────────────────────
  YOUR QUICK-EDIT FILE
  ──────────────────────────────────────────────────────────────────────────
  Update your name, short bio, social links, projects, and photo captions here.
  Photos currently live in /photos. To add another, place it there and add its
  filename below (for example: "photos/new-work.jpg").
*/
export const profile = {
  name: "Daniel Izmerly",
  role: "Developer · Photographer",
  location: "Austin/College Station TX",
  // Create a free Formspree form with your Gmail as its recipient, then paste
  // only its opaque endpoint ID here (for example "abcd1234"). Your Gmail is
  // never included in public site code.
  formspreeFormId: "",
  bio: "Photographer for 4 years, Computer Science Student at TAMU.",
  socials: {
    github: "https://github.com/dizmerly",
    instagram: "https://www.instagram.com/dizmerly/",
    linkedin: "https://linkedin.com/in/your-username",
  },
};

// One excellent project is stronger than a padded grid of unfinished work.
export const projects = [
  {
    title: "Chaotic Football",
    type: "Godot 2D Pixel Art Football/Smash Style Game",
    number: "01",
    description: "A chaotic game with the goal of scoring the ball into the other team's goal.",
    stack: ["Godot"],
    url: "https://github.com/dizmerly/chaoticFootball",
  },
];

export const photos = [
  { title: "Camp light", place: "Colorado", image: "photos/DSC00115.jpg" },
  { title: "The long way", place: "Colorado", image: "photos/DSC00171_01.jpg" },
  { title: "Ridgeline", place: "Colorado", image: "photos/DSC00183_01.jpg" },
  { title: "High country", place: "Colorado", image: "photos/DSC00234_01.jpg" },
  { title: "Alpine window", place: "Colorado", image: "photos/DSC00288_02.jpg" },
  { title: "Open air", place: "Colorado", image: "photos/DSC00348_01.jpg" },
  { title: "Along the pass", place: "Colorado", image: "photos/DSC00624.jpg" },
  { title: "Wild company", place: "Colorado", image: "photos/DSC00624_01.jpg" },
  { title: "At elevation", place: "Colorado", image: "photos/DSC01031.jpg" },
  { title: "Blue hour", place: "Great Sand Dunes", image: "photos/DSC01465.jpg" },
  { title: "Wide open", place: "Colorado", image: "photos/DSC01554.jpg" },
];
