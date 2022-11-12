import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="h-screen flex flex-col  relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        
    <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
    <motion.img
    initial = {{
        x:-200,
        opacity:0
    }}
   
    whileInView = {{
        x:0,
        opacity:1
    }}
    transition = {{
        duration:1.2
    }}
    className = "-mb-20 md:mb-0 h-56 rounded-full object-cover"
     src="https://avatars.githubusercontent.com/u/104181447?v=4" alt="pic" />
    </div>
  )
}

export default About