import logo from "../assets/logo.png";
import WavesSvg from "../components/WavesSvg";
import "../components/WavesSvg.css";
import ClubInsights from "./ClubInsights";
import Headers from "../components/Headers";
import Events from "./Events";
import MeetTeam from "./MeetTeam";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Newsletter from "./Newsletter";
import backgroundImage from "../assets/background.png";

export default function Home() {
  const logoAnimation = useRef(null);
  const headingOne = useRef(null);
  const headingTwo = useRef(null);
  useGSAP(() => {
    gsap.from(logoAnimation.current, {
      y: 10,
      opacity: 0,
      delay: 0.9,
      duration: 0.5,
    });
  }, [logoAnimation]);

  useGSAP(() => {
    gsap.from(headingOne.current, {
      y: 10,
      opacity: 0,
      delay: 1,
      duration: 0.5,
    });
  }, [headingOne]);

  useGSAP(() => {
    gsap.from(headingTwo.current, {
      y: 10,
      opacity: 0,
      delay: 1.1,
      duration: 0.5,
    });
  }, [headingTwo]);

  return (
    <div className="min-h-screen w-full">
      <Headers />
      <div className="sm:pt-[250px] pt-[200px] w-full" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="w-full flex m-auto flex-row justify-center">
          <img
            ref={logoAnimation}
            src={logo}
            alt="Logo"
            className="mt-4 h-[5rem]"
          />
        </div>
        <div className="w-full m-auto flex justify-center">
          <h1
            ref={headingOne}
            className="text-black dark:text-gray-300 sm:text-[40px] md:text-[54px] text-[21px]"
          >
            Google Developer Groups
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <h1
            ref={headingTwo}
            className="text-gray-500 dark:text-gray-300 sm:text-[30px] md:text-[40px] text-[21px]"
          >
            Tezpur University
          </h1>
        </div>
      </div>
      <div className="w-full sm:mr-5 mt-[10rem] sm:mt-5">
        <WavesSvg />
      </div>
      <div className="">
        <ClubInsights />
      </div>
      <div className="">
        <Events />
      </div>
      <div className="w-full min-h-screen">
        <MeetTeam />
      </div>
      <div className="w-full">
        <Newsletter />
      </div>
    </div>
  );
}
