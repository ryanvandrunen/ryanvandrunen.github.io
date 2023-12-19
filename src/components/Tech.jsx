import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

    <div class='flex flex-col gap-y-14'>
      <div className="flex flex-wrap justify-center gap-16 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="p-[1px] rounded-[20px] card-shadow hover:shadow-xl transform transition-transform duration-300 ease-in-out">
        <div class="flex flex-col bg-jetLight rounded-[20px] p-4 h-full cursor-default">
          <h3 class="text-white text-[20px] font-bold text-center">Professional</h3>
          <div class="flex flex-wrap justify-center gap-2 mt-2 text-center">
            <p class="text-white green-text-gradient ">Problem-Solving</p>
            <p class="text-white green-text-gradient ">Detail-Oriented</p>
            <p class="text-white green-text-gradient ">Punctual</p>
            <p class="text-white green-text-gradient ">Excellent Communication</p>
            <p class="text-white green-text-gradient ">Critical Thinking</p>
          </div>
        </div>
      </div>
      <div class="p-[1px] rounded-[20px] card-shadow hover:shadow-xl transform transition-transform duration-300 ease-in-out">
        <div class="flex flex-col bg-jetLight rounded-[20px] p-4 h-full cursor-default">
          <h3 class="text-white text-[20px] font-bold text-center">Tools and Technologies</h3>
          <div class="flex flex-wrap justify-center gap-2 mt-2 text-center">
            <p class="text-white green-text-gradient ">VSCode</p>
            <p class="text-white green-text-gradient ">Visual Studios</p>
            <p class="text-white green-text-gradient ">GitHub</p>
            <p class="text-white green-text-gradient ">KNIME</p>
            <p class="text-white green-text-gradient ">LaTeX</p>
          </div>
        </div>
      </div>
      <div class="p-[1px] rounded-[20px] card-shadow hover:shadow-xl transform transition-transform duration-300 ease-in-out">
        <div class="flex flex-col bg-jetLight rounded-[20px] p-4 h-full cursor-default">
          <h3 class="text-white text-[20px] font-bold text-center">Libraries</h3>
          <div class="flex flex-wrap justify-center gap-2 mt-2 text-center">
            <p class="text-white green-text-gradient ">numPy</p>
            <p class="text-white green-text-gradient ">pandas</p>
            <p class="text-white green-text-gradient ">THREE.js</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');
