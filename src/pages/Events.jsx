import { useRef, useState } from "react";
import backgroundImage from "../assets/background.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../utils";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ModalOnClick } from "../components/ModalOnClick";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [, setHoveredEventId] = useState(null);
  const [selectEvent, setSelectEvent] = useState(null);
  const eventsHeading = useRef(null);
  const borderNavbar = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    if (eventsHeading.current) {
      gsap.from(eventsHeading.current, {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#eventsHeading",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [eventsHeading]);

  useGSAP(() => {
    if (borderNavbar.current) {
      gsap.from(borderNavbar.current, {
        y: 10,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#border",
          // markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [borderNavbar]);

  useGSAP(() => {
    if (sliderRef.current) {
      gsap.from(sliderRef.current, {
        y: 10,
        opacity: 0,
        delay: 1.0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#slider",
          markers: true,
          start: "top 80%",
          end: "top 30%",
          scrub: 2,
        },
      });
    }
  }, [sliderRef]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Screen width <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Screen width <= 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter(
          (event) => event.category === selectedCategory.toLowerCase()
        );

  const handleOnClick = (event) => {
    setSelectEvent(event.id);
  }

  return (
    <div
      className="overflow-x-hidden w-full sm:pt-[50rem] md:pt-0 sm:pb-[5rem] md:pb-0 pb-[2rem]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div id="eventsHeading" className="px-2 pb-[3rem] w-full">
        <h1
          ref={eventsHeading}
          className="w-full flex flex-row justify-center text-[3rem]"
        >
          Events
        </h1>
        <div
          id="border"
          className="list-none w-full z-10 flex justify-center text-white pt-4 pb-6"
        >
          <ul
            ref={borderNavbar}
            className="flex flex-row border-[1px] border-slate-400 pl-6 rounded-3xl"
          >
            {["Workshops", "Sessions", "Competitions", "All"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`py-4 pr-7 font-Philosopher cursor-pointer hover:scale-105 transform ease-in-out duration-150 hover:font-semibold ${
                    selectedCategory === "Workshops"
                      ? "text-black"
                      : "text-slate-800 hover:text-black"
                  }`}
                  onClick={() => setSelectedCategory(`${item}`)}
                >
                  <button type="button" className="">
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div id="slider" className="w-full">
          <Slider {...settings}>
            {filteredData.map((d) => (
              <div
                key={d.id}
                className="p-4 sm:p-4 relative"
                onMouseEnter={() => {
                  setHoveredEventId(d.id);
                }}
                onMouseLeave={() => setHoveredEventId(null)}
              >
                <div className="">
                  <div
                    className={`border-2 m-auto flex relative flex-col w-[24rem] bg-gradient-to-r from-cyan-200 to-blue-200 shadow-lg rounded-3xl min-h-[400px] sm:min-h-[490px] hover:scale-105 transform hover:scale-101 transition-transform duration-300 hover:cursor-pointer`}
                    onClick={() => handleOnClick(d)}
                  >
                    <div className="flex pl-6 sm:pl-8 flex-col pt-4">
                      <div className="h-[4rem] sm:h-[5rem] w-full flex flex-col">
                        <button
                          type="button"
                          className="bg-[#2b2b2b] z-10 rounded-[20px] font-Code sm:rounded-[25px] py-1 sm:px-7 uppercase text-[1.5rem] sm:text-[2rem] text-white font-bold w-fit"
                        >
                          {d.title}
                        </button>
                        <p className="pl-2 pt-2 font-bold text-[0.8rem] sm:text-[1rem] font-Code">
                          {`{ category: "${d.category.toUpperCase()}" }`}
                        </p>
                      </div>
                      <div className="w-full flex justify-center h-[16rem] sm:h-[20rem] items-center">
                        <div className="w-[90%] font-Code">
                          <p className="text-slate-400">{`<h4>`}</p>
                          <p className="text-black text-[0.9rem] sm:text-[0.9rem] font-bold">
                            {d.name}
                          </p>
                          <p className="text-slate-400">{`</h4>`}</p>
                          <p className="text-slate-400">{`<p>`}</p>
                          <p className="text-black text-[0.9rem] sm:text-[0.9rem]">
                            {d.description} <br />
                          </p>
                          <p className="text-slate-400">{`<p>`}</p>
                        </div>
                      </div>
                      <div className="flex justify-center mt-auto">
                        <img
                          src=""
                          width={170}
                          alt=""
                          className="w-fit pt-4 pl-8 pr-8"
                        />
                      </div>
                      <div className="z-10">
                        {/* <p className="text-[#808080] pl-8 pt-4 pb-4 hover:underline">
                          Know More
                        </p> */}
                        <button
                          type="button"
                          className="text-white font-Code text-sm px-4 py-1 bg-[#2b2b2b] rounded-xl hover:text-[#808080]"
                          onClick={() => {
                            navigate("/about");
                          }}
                        >
                          Know More
                        </button>
                        {/* {hoveredEventId === d.id && (
                          <div className="absolute inset-0 transition-opacity ease-in-out duration-300">
                            <img
                              src={d.imageUrl}
                              // alt={d.title}
                              className="object-cover w-full h-full rounded-3xl opacity-30"
                            />
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="">
          {selectEvent && (
            <ModalOnClick id={selectEvent} setSelectEvent={setSelectEvent} />
          )}
        </div>
      </div>
    </div>
  );
}


