import React from "react";
import { config } from "../../../../config";
import AboutUsMain from "@/pages/about/about-us";
import AnimationHeader from "@/components/animation_header";

export const metadata = {
  title: "Secure 365 - About us page",
};

const  AboutUsPage = async() => {
  const data = await fetch(
    `${config.APP_URL}/secure-plugin/v1/about`,
    {
      cache: "no-store",
    }
  );

  const bannerData = await fetch(
    `${config.APP_URL}/secure-plugin/v1/banner/about-us`,
    {
      cache: "no-store",
    }
  );
  const aboutResponse = await data.json();
  const bannerResponse = await bannerData.json();

  return (<>
    <AnimationHeader/>
    <div className="about_usClass">
      <AboutUsMain aboutResponse={aboutResponse} bannerResponse={bannerResponse}/>
    </div>
    </>
  );
};

export default AboutUsPage;
