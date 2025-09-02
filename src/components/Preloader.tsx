"use client";
// import * as React from "react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
export default function Preloader() {
  const [show, setShow] = React.useState(true);
  const [percent, setPercent] = React.useState(1);
  const percentRef = React.useRef(1);
  const overlayControls = useAnimation();
  const rocketControls = useAnimation();
  const bobControls = useAnimation();
  const flameControls = useAnimation();
  const barControls = useAnimation();
  React.useEffect(() => {
    let counterInterval: number | undefined;
    async function run() {
      // Prepare overlay visible.
      await overlayControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0 },
      });
      // Rocket is anchored bottom-center in layout, so keep y at 0 initially.
      await rocketControls.start({
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 0 },
      });
      // Idle bobbing while "loading"
      bobControls.start({
        y: [0, -6, 0],
        transition: {
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      });
      // Flame flicker
      flameControls.start({
        scaleY: [1, 1.15, 1],
        opacity: [0.8, 1, 0.85],
        transition: {
          duration: 0.35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      });
      // Counter 1 -> 100 over ~4.8s for "slow slow" feel
      const totalMs = 4800;
      const stepMs = Math.max(20, Math.floor(totalMs / 100));
      counterInterval = window.setInterval(() => {
        setPercent((p: any) => {
          const next = Math.min(100, p + 1);
          percentRef.current = next;
          // Animate progress bar width smoothly
          barControls.start({
            width: `${next}%`,
            transition: { duration: 0.18, ease: "easeOut" },
          });
          return next;
        });
      }, stepMs);
      // Wait until counter reaches 100
      await new Promise<void>((resolve) => {
        const id = window.setInterval(() => {
          if (percentRef.current >= 100) {
            window.clearInterval(id);
            resolve();
          }
        }, 40);
      });
      // Small pause before exit sequence
      await new Promise((r) => setTimeout(r, 280));
      // Stop bobbing once launching
      bobControls.stop();
      // Launch rocket upwards slowly, slide overlay up to reveal content
      await Promise.all([
        rocketControls.start({
          y: "-110vh",
          scale: 1.08,
          transition: { duration: 3.2, ease: [0.16, 1, 0.3, 1] }, // smooth "slow slow up"
        }),
        overlayControls.start({
          y: "-100%",
          opacity: 1,
          transition: { duration: 3.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
        }),
      ]);
      setShow(false);
      if (counterInterval) window.clearInterval(counterInterval);
    }
    run();
    return () => {
      if (counterInterval) window.clearInterval(counterInterval);
      bobControls.stop();
      flameControls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!show) return null;
  return (
    <motion.div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[2000] bg-black text-white"
      style={{
        backgroundImage: `url('/galaxy-glowing-earth.jpg')`,
        // backgroundImage: `url('/images/space-bg-1.png')`,
        // backgroundImage: `url('/space-bg-Contact.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 2 }}
      animate={overlayControls}
    >
      {/* Container: Centered Rocket + Progress Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none pt-[120px]">
        {/* Rocket */}
        <motion.div animate={bobControls}>
          <motion.div animate={rocketControls}>
            <div className="relative flex justify-center items-center">
              <img
                src={"/images/rocket/rocket-fly.png"}
                alt="Neon blue rocket ready to launch"
                className="h-40 md:h-56 lg:h-72 w-auto"
                draggable={false}
              />
              {/* Flame/fume under the rocket */}
              <motion.div
                className="absolute top-60 h-28 w-20 -translate-x-1/2 translate-y-full rounded-full blur-md"
                style={{ background: "rgba(56, 189, 248, 0.75)" }}
                animate={flameControls}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </motion.div>
        {/* Space between rocket and counter */}
        <div className="h-4 md:h-6" />
        {/* Percent + Progress Bar */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[80%] px-6 mt-[60px]">
          <div className="flex items-baseline gap-1 font-mono">
            <span className="text-4xl md:text-5xl lg:text-6xl tabular-nums font-semibold">
              {percent}
            </span>
            <span className="text-xl md:text-3xl lg:text-4xl">%</span>
          </div>
          <div
            className="w-full"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
            aria-label="Secure365 loading progress"
          >
            <div className="h-3 w-full rounded-full bg-cyan-900/30">
              <motion.div
                className="h-3 rounded-full bg-cyan-400"
                initial={{ width: "1%" }}
                animate={barControls}
              />
            </div>
          </div>
          <p className="sr-only">Loading Secure365 {percent}%</p>
        </div>
      </div>
    </motion.div>
  );
}









