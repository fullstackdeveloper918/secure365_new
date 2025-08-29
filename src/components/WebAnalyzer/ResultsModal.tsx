import { Button } from "@/components/ui/button";

interface ResultsModalProps {
  status: any;
  websiteUrl: string;
  showEmailGate: boolean;
  setShowEmailGate: (show: boolean) => void;
  handleViewAllResults: () => void;
  handleEmailSubmit: () => void;
}

export default function ResultsModal({
  status,
  websiteUrl,
  showEmailGate,
  setShowEmailGate,
  handleViewAllResults,
  handleEmailSubmit,
}: ResultsModalProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/galaxy-glowing-earth.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <main className="relative my-24 z-10 flex items-center justify-center  px-6">
        <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full h-[589px]  overflow-y-hidden">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-sm font-semibold text-sky-500">
                  secure365
                </h2>
                <p className="text-xs text-gray-500">
                  Arlington Heights, Illinois
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-sky-500">(800) 311-5950</p>
                <p className="text-xs text-sky-500">info@secure365.com</p>
                <p className="text-xs text-sky-500">techable.com</p>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Website Audit Report
            </h1>
            <div className="border-b-2 border-gray-200 mb-4"></div>
            <p className="text-sm text-gray-600 mb-1">
              {status?.result?.result?.url || websiteUrl}
            </p>
            <p className="text-xs text-gray-500">
              Scanned:{" "}
              {new Date(status?.result?.result?.completedAt).toLocaleString()}
            </p>
          </div>

          {/* Website Summary (always visible) */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">📋</span> Website Summary
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line line-clamp-3">
              {status?.result?.result?.websiteSummary}
            </p>
          </div>

          {/* Blurred Section */}
          <div className="relative">
            {/* Blur everything inside */}
            <div className="filter blur-sm pointer-events-none select-none">
              <div className="p-6 space-y-8">
                {/* Grades */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Grades
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-red-600">
                        {status?.result?.result?.performanceGrade}
                      </p>
                      <p className="text-sm font-semibold">Performance</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-600">
                        {status?.result?.result?.seoGrade}
                      </p>
                      <p className="text-sm font-semibold">SEO</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        {status?.result?.result?.accessibilityGrade}
                      </p>
                      <p className="text-sm font-semibold">Accessibility</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        {status?.result?.result?.bestPracticesGrade}
                      </p>
                      <p className="text-sm font-semibold">Best Practices</p>
                    </div>
                  </div>
                </div>

                {/* Recommendations + TLS (blurred too) */}
                {status?.result?.result?.recommendations?.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Recommendations
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                      {status?.result?.result?.recommendations.map(
                        (rec: any, idx: number) => (
                          <li key={idx}>
                            <span className="font-semibold">
                              {rec.priority}:
                            </span>{" "}
                            {rec.recommendation}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Unlock Overlay */}
            <div className="absolute bottom-56 inset-0 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-8">
              <Button
                onClick={handleViewAllResults}
                className="bg-[#00AEEF] hover:bg-[#0099d4] rounded-lg text-white primary-btn-style"
              >
                View All Results
              </Button>
            </div>
          </div>
        </div>

        {/* Email Gate Modal */}
        {showEmailGate && (
          <div className="fixed top-20 inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
              <button
                onClick={() => setShowEmailGate(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  SECURE<span style={{ color: "#34AEDB" }}>365</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Free Website <span style={{ color: "#34AEDB" }}>Grader</span>
                </h2>
                <p className="text-sm text-gray-600">
                  Quickly see how your website performs with ROI Amplified's
                  Free Website Grader. Just enter your URL to get an instant
                  report filled with clear, actionable recommendations.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 hover:border-gray-400 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 hover:border-gray-400 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 hover:border-gray-400 transition-colors"
                />
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 hover:border-gray-400 transition-colors"
                />
                <Button
                  onClick={handleEmailSubmit}
                  className="bg-[#00AEEF] w-full hover:bg-[#0099d4] rounded-lg text-white primary-btn-style"
                >
                  Create Account
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Free analysis • No signup required • Results in 30 seconds
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
