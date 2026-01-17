import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Project";
import Skills from "../components/Skills";
import VideoIntro from "../components/Videointro";
import Chatbot from "../components/Chatbot/Chatbot";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
    <Chatbot/>
    <VideoIntro/>
    
      <Footer/>
    </>
  );
}
