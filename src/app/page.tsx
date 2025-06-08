import {
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectSection,
  ContactSection,
  Footer,
  Layout,
} from "./components/landing";

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
}
