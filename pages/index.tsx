import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#06202A] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section className="snap-center">
        <About />
      </section>
    </div>
  )
}
