"use client";
import React from "react";

export default function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  ...props
}) {
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
}