'use client';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function DistributorSearch({ value, onChange }: Props) {
  return (
    <div className="mb-12">
      <div className="relative max-w-full">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search distributors"
          className="w-full pl-12 pr-6 py-4 bg-gray-100 border-0 rounded-xl text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all text-base"
        />
      </div>
    </div>
  );
}