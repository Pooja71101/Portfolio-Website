import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skill from "../assets/skill1.jpg";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-6 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-md">
          I possess a strong command of these technologies and also eagerly prepared to embrace new ones as well.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div>
              <img
                alt="skills"
                className="z-10"
                src={skill}
                height="auto"
                width="56%"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skill} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
     
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-deep-blue">01</p>
              <p className="font-playfair font-semibold text-3xl text-deep-blue mt-3">
                Programming Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainblue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            C++ | JavaScript | Python
          </p>
        </motion.div>

        
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-deep-blue">02</p>
              <p className="font-playfair font-semibold text-3xl text-deep-blue mt-3">
                Web Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainblue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
           HTML | CSS | Tailwind CSS | REactJS | NodeJS | ExpressJS | MongoDB 
          </p>
        </motion.div>
       
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-deep-blue">03</p>
              <p className="font-playfair font-semibold text-3xl text-deep-blue mt-3">
                Technical Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainblue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Data Structures and Algorithms | OOPs | DBMS | Computer Networks | OS
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-deep-blue">04</p>
              <p className="font-playfair font-semibold text-3xl text-deep-blue mt-3">
                Soft Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-gradient-rainblue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Teamwork | Willingness to Learn | Leadership | Time Management | Patience
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;