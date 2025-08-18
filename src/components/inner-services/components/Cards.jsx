import Link from "next/link";

export default function WorkCard({ title, description, href, image, className = "", ...rest }) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md work-card-style ${className}`}
      {...rest} // spread aos attributes
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 text-[#00aceb]">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Link href={href}>
          <button className="border border-[#00aceb] text-[#00aceb] px-4 py-2 rounded-md hover:bg-[#00aceb] hover:text-white transition">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}
