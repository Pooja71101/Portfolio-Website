import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import projectImage1 from "../assets/portfo.png";
import projectImage2 from "../assets/musicapp2.png";
import projectImage3 from "../assets/weather.png";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,imageSrc }) => {
  const overlayStyles = `absolute h-60 w-34 opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-0.15 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-1xl font-playfair">{title}</p>
        <p className="mt-0.25">
          
        </p>
      </div>
      <img src={imageSrc} alt={projectTitle} className="w-60 h-60" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl text-green-500">
            <span className="text-purple-400">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-6 mb-6 text-md">
        <p>I have mentioned three projects over here:</p>
        <a href="https://github.com/Pooja71101">
           <p className="underline text-blue">GITHUB LINK</p>
             </a>
 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-2 bg-purple-400
              max-w-[240px] max-h-[240px] text-2xl font-playfair font-semibold"
          >
           BeautiFul User InterFace
          </div>
         
          <Project title="Portfolio-Website (ReactJS,TailwindCSS,Framer-Motion,React-Hook-Form)" imageSrc={projectImage1} />
          <Project title="Music-App(ViBEZzz) (HTML,CSS,JavaScript)" imageSrc={projectImage2} />
          <Project title="Weather-App (HTML,CSS,JavaScript)" imageSrc={projectImage3}/>
          
          <div
            className="flex justify-center text-center items-center p-2 bg-green-500
              max-w-[240px] max-h-[240px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;