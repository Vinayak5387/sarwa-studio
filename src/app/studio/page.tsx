import StudioHero from '@/components/StudioHero';
import StudioAbout from '@/components/StudioAbout';
import StudioTeam from '@/components/StudioTeam';
import StudioProcess from '@/components/StudioProcess';
import StudioGallery from '@/components/StudioGallery';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Sarwa Studio | Our Creative Studio',
  description: 'Explore our creative studio where design meets innovation. Learn about our team, process, and workspace.',
};

export default function StudioPage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
      <StudioHero />
      <StudioAbout />
      <StudioProcess />
      <StudioTeam />
      <StudioGallery />
      <ContactSection />
    </main>
  );
}