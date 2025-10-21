"use client";
const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
      <p className="text-4xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

// ==================== INPUT FIELD COMPONENT ====================
const InputField = ({ label, name, value, onChange, type = 'text', placeholder, required = false, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};