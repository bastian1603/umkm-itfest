"use client";
import React from "react";
const TextAreaField = ({ label, name, value, onChange, rows = 4, placeholder, required = false }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextAreaField;