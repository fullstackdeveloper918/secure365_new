const items = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast & Scalable',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
      </svg>
    ),
    title: 'SEO-Ready',
  },
  {
    icon: (
      <svg
      className="w-10 h-10 text-yellow-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M16 2H8a2 2 0 0 0-2 2v2h12V4a2 2 0 0 0-2-2z" />
      <path d="M4 8h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
      <path d="M9 12h6M9 16h4" />
    </svg>
    ),
    title: 'User-Friendly Design',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Secure by Default',
  },
];

const SecureWay = () => (
  <section className="bg-gray-100 secureway-sec">
    <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
      Website Creation, The Secure365 Way
    </h2>
<div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-medium text-gray-800 mb-0">{item.title}</h3>
        </div>
      ))}
    </div>
    </div>
  </section>
);

export default SecureWay;
