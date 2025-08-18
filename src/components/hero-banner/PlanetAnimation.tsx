"use client";

import { useState } from "react";

interface Planet {
  id: string;
  name: string;
  details: {
    diameter: string;
    distance: string;
    temperature: string;
    moons: string;
    dayLength: string;
    yearLength: string;
    description: string;
  };
}

const planetsData: Planet[] = [
  {
    id: "sun",
    name: "Sun",
    details: {
      diameter: "1,392,700 km",
      distance: "0 km (center)",
      temperature: "5,778 K (surface)",
      moons: "0",
      dayLength: "25-35 days",
      yearLength: "N/A",
      description:
        "The Sun is the star at the center of our Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.",
    },
  },
  {
    id: "mercury",
    name: "Mercury",
    details: {
      diameter: "4,879 km",
      distance: "57.9 million km",
      temperature: "167°C (average)",
      moons: "0",
      dayLength: "59 Earth days",
      yearLength: "88 Earth days",
      description:
        "Mercury is the smallest planet in our solar system and the closest to the Sun. It has extreme temperature variations and no atmosphere.",
    },
  },
  {
    id: "venus",
    name: "Venus",
    details: {
      diameter: "12,104 km",
      distance: "108.2 million km",
      temperature: "464°C",
      moons: "0",
      dayLength: "243 Earth days",
      yearLength: "225 Earth days",
      description:
        "Venus is the hottest planet in our solar system due to its thick atmosphere of carbon dioxide. It rotates backwards compared to most planets.",
    },
  },
  {
    id: "earth",
    name: "Earth",
    details: {
      diameter: "12,756 km",
      distance: "149.6 million km",
      temperature: "15°C (average)",
      moons: "1",
      dayLength: "24 hours",
      yearLength: "365.25 days",
      description:
        "Earth is the only known planet with life. It has liquid water, a protective atmosphere, and a suitable temperature range for life to thrive.",
    },
  },
  {
    id: "mars",
    name: "Mars",
    details: {
      diameter: "6,792 km",
      distance: "227.9 million km",
      temperature: "-65°C (average)",
      moons: "2",
      dayLength: "24.6 hours",
      yearLength: "687 Earth days",
      description:
        "Mars is known as the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the solar system.",
    },
  },
  {
    id: "jupiter",
    name: "Jupiter",
    details: {
      diameter: "142,984 km",
      distance: "778.5 million km",
      temperature: "-110°C (average)",
      moons: "95",
      dayLength: "9.9 hours",
      yearLength: "12 Earth years",
      description:
        "Jupiter is the largest planet in our solar system. It is a gas giant with a Great Red Spot storm that has been raging for centuries.",
    },
  },
  {
    id: "saturn",
    name: "Saturn",
    details: {
      diameter: "120,536 km",
      distance: "1.43 billion km",
      temperature: "-140°C (average)",
      moons: "146",
      dayLength: "10.7 hours",
      yearLength: "29 Earth years",
      description:
        "Saturn is famous for its prominent ring system. It is less dense than water and has many moons, including Titan and Enceladus.",
    },
  },
  {
    id: "uranus",
    name: "Uranus",
    details: {
      diameter: "51,118 km",
      distance: "2.87 billion km",
      temperature: "-195°C (average)",
      moons: "27",
      dayLength: "17.2 hours",
      yearLength: "84 Earth years",
      description:
        "Uranus is an ice giant that rotates on its side. It has a faint ring system and is composed mainly of water, methane, and ammonia ices.",
    },
  },
  {
    id: "neptune",
    name: "Neptune",
    details: {
      diameter: "49,528 km",
      distance: "4.50 billion km",
      temperature: "-200°C (average)",
      moons: "16",
      dayLength: "16.1 hours",
      yearLength: "165 Earth years",
      description:
        "Neptune is the windiest planet with speeds up to 2,100 km/h. It is an ice giant with a deep blue color due to methane in its atmosphere.",
    },
  },
];

export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [showPlanetDetails, setShowPlanetDetails] = useState(false);

  const handlePlanetClick = (planetId: string) => {
    setSelectedPlanet(planetId);
    setShowPlanetDetails(true);
  };

  const selectedPlanetData = planetsData.find((p) => p.id === selectedPlanet);

  return (
    <div className="min-h-screen bg-black text-white font-light overflow-hidden">
      {/* Video Background */}
      <div className="videosec relative">
        <video
          className="h-screen w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            // src="/planet/newsecond.mp4"
            src="/newsecond.mp4"
            type="video/mp4"
          />
        </video>
        {/* <div className="overlayDiv absolute inset-0 bg-black/40 h-screen z-10"></div> */}
      </div>

      {/* Planet Details Modal */}
      {showPlanetDetails && selectedPlanetData && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-white">
                {selectedPlanetData.name}
              </h2>
              <button
                onClick={() => setShowPlanetDetails(false)}
                className="text-white/60 hover:text-white text-3xl font-light leading-none"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">Diameter:</span>
                  <span className="ml-2 text-white">
                    {selectedPlanetData.details.diameter}
                  </span>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">
                    Distance from Sun:
                  </span>
                  <span className="ml-2 text-white">
                    {selectedPlanetData.details.distance}
                  </span>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">
                    Temperature:
                  </span>
                  <span className="ml-2 text-white">
                    {selectedPlanetData.details.temperature}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">Moons:</span>
                  <span className="ml-2 text-white">
                    {selectedPlanetData.details.moons}
                  </span>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">
                    Day Length:
                  </span>
                  <span className="ml-2 text-white">
                    {selectedPlanetData.details.dayLength}
                  </span>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">
                    Year Length:
                  </span>
                  <span className="ml-2 text-white">
                    {selectedPlanetData.details.yearLength}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">Description:</h3>
              <p className="text-white/80 leading-relaxed">
                {selectedPlanetData.details.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Solar System */}
      <div
        id="universe"
        // className="absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <div id="galaxy" className="relative w-full h-full bottom-[444px]">
          <div id="solar-system" className="absolute w-full h-full preserve-3d">
            {/* Mercury */}
            <div id="mercury" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("mercury")}
                  title="Click to learn about Mercury"
                ></div>
              </div>
            </div>

            {/* Venus */}
            <div id="venus" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("venus")}
                  title="Click to learn about Venus"
                ></div>
              </div>
            </div>

            {/* Earth */}
            {/* <div id="earth" className="orbit">
              <div className="pos">
                <div className="orbit">
                  <div className="pos">
                    <div className="moon"></div>
                  </div>
                </div>
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("earth")}
                  title="Click to learn about Earth"
                ></div>
              </div>
            </div> */}

            <div id="earth" className="orbit">
              <div className="pos relative">
                {/* Moon orbit */}
                <div className="orbit absolute inset-0 flex items-center justify-center">
                  <div className="pos">
                    <div className="moon w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Earth with image */}
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300 w-20 h-20 rounded-full overflow-hidden flex items-center justify-center"
                  onClick={() => handlePlanetClick("earth")}
                  title="Click to learn about Earth"
                >
                  <img
                    src="/planet/earth.png"
                    alt="Earth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mars */}
            <div id="mars" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("mars")}
                  title="Click to learn about Mars"
                ></div>
              </div>
            </div>

            {/* Jupiter */}
            {/* <div id="jupiter" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("jupiter")}
                  title="Click to learn about Jupiter"
                ></div>
              </div>
            </div> */}

            <div id="jupiter" className="orbit">
              <div className="pos">
                <div
                  className="cursor-pointer hover:scale-125 transition-transform duration-300 w-28 h-20 rounded-full overflow-hidden flex items-center justify-center"
                  onClick={() => handlePlanetClick("jupiter")}
                  title="Click to learn about Jupiter"
                >
                  <img
                    src="/planet/jupiter-removebg-preview.png"
                    alt="Jupiter"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Saturn */}
            {/* <div id="saturn" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("saturn")}
                  title="Click to learn about Saturn"
                >
                  <div className="ring"></div>
                </div>
              </div>
            </div> */}
            <div id="saturn" className="orbit">
              <div className="pos">
                <div
                  className="cursor-pointer hover:scale-125 transition-transform duration-300 w-28 h-20 rounded-full overflow-hidden flex items-center justify-center"
                  onClick={() => handlePlanetClick("saturn")}
                  title="Click to learn about saturn"
                >
                  <img
                    src="/planet/saturn.png"
                    alt="saturn"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Uranus */}
            <div id="uranus" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("uranus")}
                  title="Click to learn about Uranus"
                ></div>
              </div>
            </div>

            {/* Neptune */}
            <div id="neptune" className="orbit">
              <div className="pos">
                <div
                  className="planet cursor-pointer hover:scale-125 transition-transform duration-300"
                  onClick={() => handlePlanetClick("neptune")}
                  title="Click to learn about Neptune"
                ></div>
              </div>
            </div>

            {/* Sun */}
            <div
              id="sun"
              className="cursor-pointer hover:scale-105 transition-transform"
              style={{
                transform: "rotateX(-90deg) rotateY(0deg) rotateZ(0deg)",
                cursor: "pointer",
              }}
              onClick={() => handlePlanetClick("sun")}
              // onClick={() => console.log("Sun clicked")}
            >
              <img
                src="/planet/sunimage.png"
                alt="Sun"
                className="w-full h-full mx-auto absolute"
              />
              <dl className="infos text-center">
                {/* <dt>Sun</dt> */}
                <dd>
                  <span></span>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          font-size: 10px;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
          background-color: #08090a;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform-style: preserve-3d;
          animation-name: orbit;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .orbit .orbit {
          animation-name: suborbit;
        }

        .pos {
          position: absolute;
          top: 50%;
          width: 4em;
          height: 4em;
          margin-top: -1em;
          margin-left: -1em;
          transform-style: preserve-3d;
          animation-name: invert;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        #sun,
        .planet,
        #earth .moon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1em;
          height: 1em;
          margin-top: -0.5em;
          margin-left: -0.5em;
          border-radius: 50%;
          transform-style: preserve-3d;
        }

        #sun {
          background: radial-gradient(
            circle at 30% 30%,
            #ffa500,
            #ff6347,
            #ff4500
          );
          box-shadow: 0 0 60px rgba(255, 160, 60, 0.6),
            0 0 100px rgba(255, 140, 0, 0.4);
          font-size: 24em;
        }

        .planet {
          background-color: #202020;
          background-repeat: no-repeat;
          background-size: cover;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
        }

        #saturn .ring {
          width: 2em;
          height: 2em;
          margin-top: -1em;
          margin-left: -1em;
          border: 0.3em solid rgba(160, 147, 130, 0.7);
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        #mercury {
          z-index: 10;
        }
        #venus {
          z-index: 9;
        }
        #earth {
          z-index: 8;
        }
        #moon {
          z-index: 7;
        }
        #mars {
          z-index: 6;
        }
        #jupiter {
          z-index: 5;
        }
        #saturn {
          z-index: 4;
        }
        #uranus {
          z-index: 3;
        }
        #neptune {
          z-index: 2;
        }
        #sun {
          z-index: 1;
        }

        @keyframes orbit {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(-360deg);
          }
        }

        @keyframes suborbit {
          0% {
            transform: rotateX(90deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(90deg) rotateZ(-360deg);
          }
        }

        @keyframes invert {
          0% {
            transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
          }
        }

        #solar-system {
          transform: rotateX(75deg);
        }

        #sun {
          transform: rotateX(-90deg);
        }

        .ring {
          transform: rotateX(90deg);
        }

        .planet,
        .moon {
          transform: rotateX(0deg);
        }

        #mercury .planet {
          font-size: 1.5em;
        }
        #venus .planet {
          font-size: 3.72em;
        }
        #earth .planet {
          font-size: 3.92em;
        }
        #earth .moon {
          font-size: 1.2em;
        }
        #mars .planet {
          font-size: 2.9em;
        }
        #jupiter .planet {
          font-size: 12em;
        }
        #saturn .planet {
          font-size: 10.8em;
        }
        #uranus .planet {
          font-size: 4.68em;
        }
        #neptune .planet {
          font-size: 4.9em;
        }

        #mercury.orbit {
          width: 32em;
          height: 32em;
          margin-top: -16em;
          margin-left: -16em;
        }
        #venus.orbit {
          width: 40em;
          height: 40em;
          margin-top: -20em;
          margin-left: -20em;
        }
        #earth.orbit {
          width: 56em;
          height: 56em;
          margin-top: -28em;
          margin-left: -28em;
        }
        #earth .orbit {
          width: 6em;
          height: 6em;
          margin-top: -3em;
          margin-left: -3em;
        }
        #mars.orbit {
          width: 72em;
          height: 72em;
          margin-top: -36em;
          margin-left: -36em;
        }
        #jupiter.orbit {
          width: 100em;
          height: 100em;
          margin-top: -50em;
          margin-left: -50em;
        }
        #saturn.orbit {
          width: 150em;
          height: 150em;
          margin-top: -75em;
          margin-left: -75em;
        }
        #uranus.orbit {
          width: 186em;
          height: 186em;
          margin-top: -93em;
          margin-left: -93em;
        }
        #neptune.orbit {
          width: 210em;
          height: 210em;
          margin-top: -105em;
          margin-left: -105em;
        }

        #mercury .pos,
        #mercury .planet,
        #mercury.orbit {
          animation-duration: 2.89016s;
        }
        #venus .pos,
        #venus .planet,
        #venus.orbit {
          animation-duration: 7.38237s;
        }
        #earth .pos,
        #earth .planet,
        #earth.orbit {
          animation-duration: 12.00021s;
        }
        #earth .orbit .pos,
        #earth .orbit {
          animation-duration: 0.89764s;
        }
        #mars .pos,
        #mars .planet,
        #mars.orbit {
          animation-duration: 22.57017s;
        }
        #jupiter .pos,
        #jupiter .planet,
        #jupiter.orbit {
          animation-duration: 142.35138s;
        }
        #saturn .pos,
        #saturn .planet,
        #saturn.orbit,
        #saturn .ring {
          animation-duration: 353.36998s;
        }
        #uranus .pos,
        #uranus .planet,
        #uranus.orbit {
          animation-duration: 1008.20215s;
        }
        #neptune .pos,
        #neptune .planet,
        #neptune.orbit {
          animation-duration: 1977.49584s;
        }

        #mercury .planet {
          background: radial-gradient(circle at 30% 30%, #8c7853, #5c4033);
        }

        #venus .planet {
          background: radial-gradient(circle at 30% 30%, #ffc649, #ff8c00);
        }

        #earth .planet {
          background: radial-gradient(
            circle at 30% 30%,
            #6b93d6,
            #4f94cd,
            #228b22
          );
        }

        #earth .moon {
          background: radial-gradient(circle at 30% 30%, #c0c0c0, #808080);
        }

        #mars .planet {
          background: radial-gradient(circle at 30% 30%, #cd5c5c, #a0522d);
        }

        #jupiter .planet {
          background: radial-gradient(
            circle at 30% 30%,
            #d2691e,
            #b8860b,
            #daa520
          );
        }

        #saturn .planet {
          background: radial-gradient(circle at 30% 30%, #fad5a5, #deb887);
        }

        #uranus .planet {
          background: radial-gradient(circle at 30% 30%, #4fd0e7, #00ced1);
        }

        #neptune .planet {
          background: radial-gradient(circle at 30% 30%, #4169e1, #0000cd);
        }

        @media screen and (max-width: 299px) {
          #universe {
            font-size: 20%;
          }
        }
        @media screen and (min-width: 300px) {
          #universe {
            font-size: 24%;
          }
        }
        @media screen and (min-width: 500px) {
          #universe {
            font-size: 36%;
          }
        }
        @media screen and (min-width: 600px) {
          #universe {
            font-size: 44%;
          }
        }
        @media screen and (min-width: 760px) {
          #universe {
            font-size: 58%;
          }
        }
        @media screen and (min-width: 1000px) {
          #universe {
            font-size: 73%;
          }
        }
        @media screen and (min-width: 1300px) {
          #universe {
            font-size: 100%;
          }
        }
      `}</style>
    </div>
  );
}
