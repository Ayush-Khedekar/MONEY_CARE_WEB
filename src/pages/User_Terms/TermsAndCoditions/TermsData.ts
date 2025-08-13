type Term = {
  id: string;
  title: string;
  content: string | string[];
};

export const terms: Term[] = [
  {
    id: "intro",
    title: "Introduction",
    content:
      "Please read the following terms and conditions carefully before using the app.",
  },
  {
    id: "usage",
    title: "Usage Policy",
    content: [
      "You agree not to misuse the app.",
      "Follow all applicable laws.",
      "Respect other users' rights.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content:
      "Your privacy is important to us. Please refer to our Privacy Policy for details.",
  },
];

export default terms;
