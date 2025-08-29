import Link from "next/link";

const CtaSection = () => (
    <section className="text-center cta-sec relative">
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
        >
            <source src="/services.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full overlay-proj">

        </div>

        <h2 className="font-bold text-white z-10 relative">Let’s Build a Safer Web Together</h2>
        <p className="text-white mb-8 mx-auto z-10 relative">
            Whether you're starting from scratch or need to secure your existing website,
            Secure365 is here to help. Let’s build something strong, secure, and scalable — together.
        </p>
        {/* <button className="rounded-pill transition-all z-10 relative mt-3">
            Let's Connect
        </button> */}

        <Link href={"/contact-us"} className="bg-[#00AEEF] rounded-pill transition-all z-10 relative mt-3 hover:bg-[#0099d4] text-white rounded-lg global-primary-btn">
            Let's Connect
        </Link>
    </section>
);

export default CtaSection;
