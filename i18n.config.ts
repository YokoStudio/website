import { Head } from "#build/components";

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages: {
    en: {
      title1: "Free & Open-Source",
      title2: "Design System",
      headline1: "Use space design system and build the future from here.",
      headline2: "Let's be {adjective}",
      headlineQuality: "“{quality}”.",
      community: "Figma community",
      donate: "Donate",
    },
  },
}));
