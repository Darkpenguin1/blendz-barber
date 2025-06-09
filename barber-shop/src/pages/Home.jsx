import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import { motion } from "framer-motion";


function Home() {



  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Hero></Hero>
      <About></About>
      <Reviews></Reviews>
      <Services></Services>
      <Footer></Footer>
    </motion.main>
  )


}

export default Home;