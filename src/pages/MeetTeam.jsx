import { useGSAP } from "@gsap/react";
import backgroundImage from "../assets/background.png";
import { leads } from "../utils";
import { useRef } from "react";
import gsap from "gsap";

export default function MeetTeam() {
  const meetHeading = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    if (meetHeading.current) {
      gsap.from(meetHeading.current, {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#meetHeadingId",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [meetHeading]);

  useGSAP(() => {
    if (cardRefs.current) {
      gsap.from(cardRefs.current, {
        y: 10,
        opacity: 0,
        delay: 0.6,
        duration: 0.5,
        stagger: 0.7,
        scrollTrigger: {
          trigger: cardRefs.current,
          // markers: true,
          start: "top 80%",
          // end: "top 30%",
          scrub: 2,
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <div
      className="border"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sm:px-0 md:px-6 lg:px-20 px-1 pb-10 pt-[2rem] sm:pt-0 md:pt-[4rem]">
        <div id="meetHeadingId" className="sm:p-2 p-0 pt-[10px]">
          <h1
            ref={meetHeading}
            className="text-center sm:m-10 sm:text-[2rem] text-[2.5rem]"
          >
            Meet the Leads!
          </h1>
        </div>
        {/* <div className="text-[1.5rem] w-full">
          <h3 className="w-full font-semibold">Presenting your leads:</h3>
        </div> */}
        <div className="flex flex-wrap sm:grid sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 md:grid md:grid-cols-2 lg:flex lg:flex-wrap items-center justify-center pt-[2rem]">
          {leads.map((lead, index) => (
            <div
              key={index}
              className="sm:flex sm:justify-center"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div
                id={lead.id}
                className="h-[420px] w-[320px] sm:w-[300px] md:w-[320px] bg-slate-300 border shadow-xl rounded-[50px]"
              >
                <div className="flex justify-center h-[50%] pt-[40px] items-center">
                  <img
                    src={lead.imageUrl}
                    alt=""
                    className="rounded-full object-cover shadow-2xl h-[170px] w-[150px]"
                  />
                </div>
                <div className="w-full flex justify-center h-[10%] sm:text-3xl text-xl sm:font-bold pt-2">
                  <span>{lead.name}</span>
                </div>
                <div className="w-full flex justify-center h-[5%] sm:pt-2 -pt-2 font-light text-sm">
                  <span className="text-slate-600 font-light">
                    {lead.title.toUpperCase()}
                  </span>
                </div>
                <div className="w-full flex justify-center items-center pt-4 pb-2 h-[20%]">
                  <div className="w-[80%] flex justify-center text-sm">
                    {`"${lead.quote}"`}
                  </div>
                </div>
                <div className="w-full flex justify-center h-[15%]">
                  <div className="w-[50%] flex flex-row items-end pb-4">
                    <div className="basis-1/4 flex justify-center">
                      <img
                        src="instagram.png"
                        alt=""
                        className="w-7 h-7 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                      />
                    </div>
                    <div className="basis-1/4 flex justify-center">
                      <img
                        src="linkedin.png"
                        alt=""
                        className="w-7 h-7 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                      />
                    </div>
                    <div className="basis-1/4 flex justify-center">
                      <img
                        src="twitter.png"
                        alt=""
                        className="w-7 h-7 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                      />
                    </div>
                    <div className="basis-1/4 flex justify-center">
                      <img
                        src="github.png"
                        alt=""
                        className="w-7 h-7 hover:cursor-pointer hover:scale-110 transform duration-150 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
