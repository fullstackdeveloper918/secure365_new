import { Card } from "@/components/ui/card";
import { Shield, Zap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LandingPageProps {
  handleAuditClick: (auditType: string) => void;
}

export default function LandingPage({ handleAuditClick }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/galaxy-glowing-earth.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <main className="relative my-24 z-10 flex flex-col items-center justify-between min-h-[80vh] px-6 max-w-full mx-auto">
        <div className="w-full flex flex-col items-center justify-center mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How <span style={{ color: "#34AEDB" }}>Healthy</span> Is Your Site?
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Get a comprehensive audit of your website's performance, SEO,
            security, and accessibility in seconds. Discover what's holding your
            site back from reaching its full potential.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Just tap on the box of the audit you would like to perform!
          </p>
        </div>
        <div className="w-full mt-8 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleAuditClick("seo")}
              style={{
                borderColor: "rgba(52, 174, 219, 0.3)",
              }}
            >
              <Shield
                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#34AEDB" }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                SEO Grader
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Identify vulnerabilities and security best practices
              </p>
              <Button className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style">
                Check Now
              </Button>
            </Card>
            <Card
              className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleAuditClick("website")}
              style={{
                borderColor: "rgba(52, 174, 219, 0.3)",
              }}
            >
              <Shield
                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#34AEDB" }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Website Grader
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Identify vulnerabilities and security best practices
              </p>
              <Button className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style">
                Check Now
              </Button>
            </Card>
            <Card
              className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleAuditClick("facebook")}
              style={{
                borderColor: "rgba(52, 174, 219, 0.3)",
              }}
            >
              <Zap
                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#34AEDB" }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Facebook Ads Audit
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Check loading speed, Core Web Vitals, and optimization
                opportunities
              </p>
              <Button className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style">
                Check Now
              </Button>
            </Card>
            <Card
              className="bg-slate-800/50 border-slate-600 p-6 text-center hover:bg-slate-700/50 hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => handleAuditClick("google")}
              style={{
                borderColor: "rgba(52, 174, 219, 0.3)",
              }}
            >
              <Search
                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#34AEDB" }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                Google Ads Audit
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Analyze meta tags, content structure, and search visibility
              </p>
              <Button className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style">
                Check Now
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
