import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <div className="px-6">
    <Navbar />
    <Hero />
    <Features />
    </div>
    </>
  );
}
