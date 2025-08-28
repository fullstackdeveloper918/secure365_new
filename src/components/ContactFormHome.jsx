"use client"

import { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export const ContactFormHome = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    howDidYouFindUs: "",
    website: "",
  });
  const [copied, setCopied] = useState(false);
  const email = "Secure@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast.success("Copied Successfully.");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted and data saved to localStorage.");
  };

  return (
    <div>
      <section className="bg-[#02050f] relative z-20 website-audit-form" data-aos="zoom-in">
        <div className="audit-form-box relative">
          <div className="flex flex-col">
            {/* Left Column */}
            <div className="flex top-audit-head">
              <h2 className="text-5xl md:text-6xl text-white leading-snug mb-0">
                Wanna A Free <br /> WEBSITE AUDIT?
              </h2>
              <div className="text-left mr-20 mt-3 right-audit-cont">
                <p className=" text-white audit-para">
                  Or a GTM Design Plan? Hop on a 30-min <br />
                  call to unlock the potential of your business.
                </p>
                <div className="relative flex audit-link-box">
                  <a
                    href={`mailto:${email}`}
                    className="block text-[#00AEEF] text-sm relative"
                    style={{
                      textDecoration: "none",
                      borderBottom: "1px solid #00AEEF",
                      paddingBottom: "3px",
                      width: "40%",
                      display: "flex",
                    }}
                  >
                    {email}
                    <i
                      className="fas fa-copy ml-2 cursor-pointer"
                      onClick={copyToClipboard}
                    />
                  </a>
                  {copied && (
                    <span className="absolute text-xs text-green-500">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                />
                <input
                  type="email"
                  placeholder="Your email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Job title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                />
                <select
                  name="howDidYouFindUs"
                  value={formData.howDidYouFindUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
                >
                  <option value="">How did you find secure365</option>
                  <option value="Google">Google</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Drop any details (optional)"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border-b border-gray-700 text-white text-sm focus:border-[#00AEEF] outline-none form-input-home"
              />

              <div className="flex justify-between text-btn-wrap">
                <p className="text-xs text-white font-normal paragraph-line-home">
                  Curious how we handle your data with care? Scoop into our
                  Privacy Policy
                </p>
                <button
                  type="submit"
                  className="bg-[#00AEEF] hover:bg-[#0095c4] transition text-white font-normal send-req-btn"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};