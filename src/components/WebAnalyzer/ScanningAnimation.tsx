export default function ScanningAnimation() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-slate-900">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/galaxy-glowing-earth.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <main className="relative mt-20 z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        <div className="bg-slate-800/80 rounded-2xl p-12 text-center max-w-md">
          {/* Scanner Box */}
          <div className="relative left-20 w-44 h-44 flex items-center justify-center">
            {/* Border Corners */}
            <div className="absolute inset-0 rounded-xl">
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400"></div>
            </div>

            {/* Scanner Beam */}
            <div className="absolute z-20 inset-0 overflow-hidden rounded-xl">
              <div
                className="absolute w-full h-1 bg-cyan-400/90"
                style={{
                  animation: "scanBeam 3s ease-in-out infinite",
                  boxShadow: "0 0 10px #22d3ee, 0 0 25px #22d3ee",
                }}
              />
            </div>

            {/* Two Documents */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Back document */}
              <div className="absolute top-3 left-3 w-20 h-24 bg-gray-400/70 rounded-md" />

              {/* Front document */}
              <div className="w-20 h-24 bg-white rounded-md relative shadow-lg overflow-hidden">
                {/* Text lines */}
                <div className="absolute top-2 left-2 right-2 h-1 bg-cyan-400 rounded"></div>
                <div className="absolute top-4 left-2 right-5 h-1 bg-cyan-400 rounded"></div>
                <div className="absolute top-6 left-2 w-10 h-1 bg-cyan-400 rounded"></div>
                <div className="absolute top-9 left-2 right-3 h-1 bg-green-400 rounded"></div>
                <div className="absolute top-11 left-2 w-12 h-1 bg-green-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Text */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Analyzing Your Website
          </h2>
          <p className="text-gray-300">
            Please wait while we scan your website for performance, SEO, and
            security issues...
          </p>
        </div>
      </main>
      {/* </div> */}

      {/* CSS */}
      <style jsx>{`
        @keyframes scanBeam {
          0% {
            top: 0;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0;
          }
        }
      `}</style>
    </div>
  );
}
