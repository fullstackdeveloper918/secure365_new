// import React from "react";
// import ServiceDetailsMain from '@/pages/service/service-details'
// import { config } from "../../../../../config";

// export const metadata = {
//   title: "Secure 365 - Service Details page",
// };

// const ServiceDetailsPage = async({params}) => {

//     const bannerData = await fetch(
//         `${config.APP_URL}/secure-plugin/v1/service/${params?.slug}`,
//         {
//           cache: "no-store",
//         }
//       );

//       const response = await bannerData.json();
//       const serviceBannerData = response?.data ;

//       console.log("serviceBannerData11",serviceBannerData)

//   return (
//     <ServiceDetailsMain serviceBannerData={serviceBannerData}/>
//   );
// };

// export default ServiceDetailsPage;

// "use client";
import React from "react";
import ServiceDetailsMain from "@/pages/service/service-details";
import { config } from "../../../../../config";
import localServices from "@/serviceData/service.json"; // adjust path as needed
import { notFound } from "next/navigation";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Secure 365 - Service Details page",
// };

const ServiceDetailsPage = async ({ params }) => {
  let serviceBannerData = null;
  // const params = useParams();
  // const slug = params.slug ? params.slug[0] : null;

  // const router = useRouter();
  // const { slug } = router.query;

  // console.log("slug for service:", slug);
  console.log("params for services", params);
  console.log("params?.slug", params?.slug);
  // console.log("data of services", localServices.servicesData);
  try {
    const bannerData = await fetch(
      `${config.APP_URL}/secure-plugin/v1/service/${params?.slug}`,
      { cache: "no-store" }
    );

    if (bannerData.ok) {
      const response = await bannerData.json();
      serviceBannerData = response?.data;
    }
  } catch (err) {
    console.error("API failed, falling back to local JSON", err);
  }
  console.log("data of servicesk", localServices.servicesData);
  // Fallback to local JSON if API fails or data is null
  if (!serviceBannerData) {
    serviceBannerData = localServices?.servicesData?.find(
      (item) => item.slug === params.slug[0]
    );
  }
  console.log("serviceBannerDatak", serviceBannerData);

  if (!serviceBannerData) {
    notFound(); // show 404 if not in local data either
  }

  return <ServiceDetailsMain serviceBannerData={serviceBannerData} />;
};

export default ServiceDetailsPage;
