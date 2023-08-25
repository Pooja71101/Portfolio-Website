import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const CodingPlatforms = () => {
  return (
    <section id="codingplatforms" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-yellow">
          CodingPlatforms
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
        Journey of conquering Data Structures and Algorithms challenges on various platforms, including:
        </p>
      </motion.div>

      
      <div className="md:flex md:justify-between">
        <motion.div
          className="mx-auto relative bg-black max-w-[1000px] h-[250px] flex flex-col justify-end p-16 mt-10
            before:absolute before:top-[200px] before:-ml-[600px] before:left-1/2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl"></p>
          <p className="text-center text-xl">
            <a href="https://leetcode.com/pooja_0020/">
            <p className="underline text-yellow">LeetCode</p>
            </a>
            <a href="https://auth.geeksforgeeks.org/user/pooja7kx93/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
            <p className="underline text-green-500">GeeksforGeeks</p>
            </a>
            <a href="https://www.codingninjas.com/studio/profile/0000b77f-1aaf-480e-a2c5-4758b412602b">
            <p className="underline text-orange-500">Coding-Ninjas</p>
            </a>
            <a href="https://codeforces.com/profile/pooja_20">
            <p className="underline text-red">CodeForces</p>
            </a>
            <a href="https://www.interviewbit.com/profile/pooja71101_fe69757f1c91">
            <p className="underline text-blue">InterviewBit</p>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CodingPlatforms;