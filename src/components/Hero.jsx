import { motion } from "framer-motion";
import { styles } from "../styles";
import { herobg } from "../assets";
import resumePDF from "/resume.pdf";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={herobg}
          alt="hero bg"
          className="w-full h-full sm:block object-cover"
          id="heroBg"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[150px] top-[150px] 
          lg:top-[100px] xl:top-[150px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div class="flex flex-col justify-center items-center mt-5">
            <div class="w-5 h-5 rounded-full bg-[#f59542]"></div>
            <div class="w-1 sm:h-80 h-40 bg-orange"></div>
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <span
                className="text-battleGray sm:text-[90px] text-[50px]
                font-extrabold uppercase"
              >
                Ryan
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Junior at Queen's University <br className="sm:block hidden" />
              pursuing a Bachelor of Computing Honours, specializing in Computer
              Sciences with an option in Security.
            </p>
            <div class="flex gap-5">
              <button
                class="flex gap-2 p-1 bg-inherit hover:text-orange-500 text-4xl md:text-5xl"
                onClick={() => {
                  window.open("https://github.com/ryanvandrunen", "_blank");
                }}
              >
                <svg
                  stroke="black"
                  fill="black"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </button>
              <button
                class="flex gap-2 p-1 bg-inherit hover:text-orange-500 text-4xl md:text-5xl"
                onClick={() => {
                  window.open(
                    "https://linkedin.com/in/ryan-vandrunen",
                    "_blank"
                  );
                }}
              >
                <svg
                  stroke="black"
                  fill="black"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                </svg>
              </button>
              <button
                class="flex gap-2 p-1 bg-inherit hover:text-orange-500 text-4xl md:text-5xl"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = resumePDF;
                  link.download = "RyanVanDrunen_Resume.pdf";
                  link.target = "_blank";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <svg
                  fill="#000000"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="45px"
                  height="45px"
                  viewBox="0 0 43.916 43.916"
                  xml:space="preserve"
                >
                  <g>
                    <path
                      d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
		C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
		c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
		c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
		L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
		 M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
		h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute bottom-10 w-full 
          flex justify-center items-center"
        >
          <a href="#tech">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
