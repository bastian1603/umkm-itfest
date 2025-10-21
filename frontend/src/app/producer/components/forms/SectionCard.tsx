"use client";
import React from "react";
// ==================== SECTION CARD COMPONENT ====================
const SectionCard = ({ title, children }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      {children}
    </div>
  );
};
export default SectionCard;