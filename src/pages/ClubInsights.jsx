import CircleAnimation from "../components/CircleAnimation";
// import backgroundImage from "../assets/background.png";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

export default function ClubInsights() {
  const headingRef = useRef(null);
  const cardRefOne = useRef(null);
  const cardRefTwo = useRef(null);
  const cardRefThree = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        y: 10,
        delay: 0.3,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#heading",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [headingRef]);

  useGSAP(() => {
    if (cardRefOne.current) {
      gsap.from(cardRefOne.current, {
        y: 10,
        delay: 0.6,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#eachCardOne",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [cardRefOne]);

  useGSAP(() => {
    if (cardRefOne.current) {
      gsap.from(cardRefOne.current, {
        scrollTrigger: {
          trigger: "#counting",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          onEnter: () => {
            setStartCount(true);
          },
          scrub: 2,
        },
      });
    }
  }, [cardRefOne]);
  useGSAP(() => {
    if (cardRefTwo.current) {
      gsap.from(cardRefTwo.current, {
        scrollTrigger: {
          trigger: "#counting",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          onEnter: () => {
            setStartCount(true);
          },
          scrub: 2,
        },
      });
    }
  }, [cardRefTwo]);

  useGSAP(() => {
    if (cardRefThree.current) {
      gsap.from(cardRefThree.current, {
        scrollTrigger: {
          trigger: "#counting",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          onEnter: () => {
            setStartCount(true);
          },
          scrub: 2,
        },
      });
    }
  }, [cardRefThree]);

  useGSAP(() => {
    if (cardRefTwo.current) {
      gsap.from(cardRefTwo.current, {
        y: 10,
        delay: 0.8,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#eachCardTwo",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [cardRefTwo]);

  useGSAP(() => {
    if (cardRefThree.current) {
      gsap.from(cardRefThree.current, {
        y: 10,
        delay: 1.0,
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#eachCardThree",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [cardRefThree]);

  return (
    <div
      id="divOne"
      className="pb-36 bg-gradient-to-b from-[#539e44] via-[#fff] to-[#ffff] w-full"
    >
      <div id="heading" className="p-2">
        <h1
          ref={headingRef}
          className="text-center m-10 text-[32px] sm:text-[40px]"
        >
          Club Insights
        </h1>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row gap-10 items-center justify-center m-5">
        <div
          id="eachCardOne"
          ref={cardRefOne}
          className="sm:h-[400px] h-[350px] sm:w-[320px] w-[250px] border shadow-lg rounded-xl"
        >
          <div className="w-full flex justify-center sm:mt-[100px] mt-[60px]">
            <CircleAnimation />
          </div>
          <h1
            id="counting"
            className="w-full flex justify-center sm:text-5xl text-4xl font-bold my-5 ml-2"
          >
            {startCount ? (
              <CountUp start={0} end={300} duration={4} />
            ) : (
              <span>0</span>
            )}
            +
          </h1>
          <div className="">
            <h1 className="w-full flex justify-center font-light text-2xl sm:text-3xl">
              Active
            </h1>
            <h1 className="w-full flex justify-center font-light sm:text-3xl text-2xl">
              Random One
            </h1>
          </div>
        </div>
        <div
          id="eachCardTwo"
          ref={cardRefTwo}
          className="sm:h-[400px] h-[350px] sm:w-[320px] w-[250px] border shadow-lg rounded-xl"
        >
          <div className="w-full flex justify-center sm:mt-[100px] mt-[60px]">
            <CircleAnimation />
          </div>
          <h1
            id="counting"
            className="w-full flex justify-center sm:text-5xl text-4xl font-bold my-5 ml-2"
          >
            {startCount ? (
              <CountUp start={0} end={300} duration={4} />
            ) : (
              <span>0</span>
            )}
            +
          </h1>
          <div className="">
            <h1 className="w-full flex justify-center font-light text-2xl sm:text-3xl">
              Active
            </h1>
            <h1 className="w-full flex justify-center font-light sm:text-3xl text-2xl">
              Random Two
            </h1>
          </div>
        </div>
        <div
          id="eachCardThree"
          ref={cardRefThree}
          className="sm:h-[400px] h-[350px] sm:w-[320px] w-[250px] border shadow-lg rounded-xl"
        >
          <div className="w-full flex justify-center sm:mt-[100px] mt-[60px]">
            <CircleAnimation />
          </div>
          <h1
            id="counting"
            className="w-full flex justify-center sm:text-5xl text-4xl font-bold my-5 ml-2"
          >
            {startCount ? (
              <CountUp start={0} end={300} duration={4} />
            ) : (
              <span>0</span>
            )}
            +
          </h1>
          <div className="">
            <h1 className="w-full flex justify-center font-light text-2xl sm:text-3xl">
              Active
            </h1>
            <h1 className="w-full flex justify-center font-light sm:text-3xl text-2xl">
              Random Three
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
