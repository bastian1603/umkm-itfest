'use client';

interface Distributor {
  id: string;
  name: string;
  specialization: string;
  location: string;
  contactLink: string;
  avatarUrl: string;
  isFeatured: boolean;
}

interface Props {
  distributors: Distributor[];
}

export default function DistributorTable({ distributors }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Distributor
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Specialization
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Location
              </th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                Contact
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {distributors.map((distributor) => (
              <tr 
                key={distributor.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="text-base text-gray-900 font-medium">
                    {distributor.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <a 
                    href="#"
                    className="text-base text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                  >
                    {distributor.specialization}
                  </a>
                </td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="text-base text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                  >
                    {distributor.location}
                  </a>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={distributor.contactLink}
                    className="inline-block text-base text-cyan-600 hover:text-cyan-700 font-medium hover:underline transition-colors"
                  >
                    Contact
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-100">
        {distributors.map((distributor) => (
          <div 
            key={distributor.id}
            className="p-5 hover:bg-gray-50 transition-colors"
          >
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 mb-1">Distributor</div>
                <div className="text-base text-gray-900 font-semibold">
                  {distributor.name}
                </div>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 mb-1">Specialization</div>
                <a 
                  href="#"
                  className="text-base text-cyan-600 hover:text-cyan-700 hover:underline"
                >
                  {distributor.specialization}
                </a>
              </div>
              
              <div>
                <div className="text-xs text-gray-500 mb-1">Location</div>
                <a
                  href="#"
                  className="text-base text-cyan-600 hover:text-cyan-700 hover:underline"
                >
                  {distributor.location}
                </a>
              </div>
              
              <div className="pt-2">
                <a
                  href={distributor.contactLink}
                  className="inline-block text-base text-cyan-600 hover:text-cyan-700 font-medium hover:underline"
                >
                  Contact →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {distributors.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-gray-500">No distributors available</p>
        </div>
      )}
    </div>
  );
}