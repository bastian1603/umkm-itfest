"use client";
import React from "react";
import { Upload, X } from "lucide-react";

// ==================== IMAGE UPLOAD COMPONENT ====================
const ImageUpload = ({ images, onUpload, onRemove }) => {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={onUpload}
          className="hidden"
        />
        <label htmlFor="images" className="cursor-pointer flex flex-col items-center">
          <Upload size={48} className="text-gray-400 mb-2" />
          <span className="text-sm font-medium text-gray-900">
            Click to upload product images
          </span>
          <span className="text-xs text-gray-500 mt-1">
            PNG, JPG, JPEG up to 10MB (Max 5 images)
          </span>
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-5 gap-4">
          {images.map((img) => (
            <div key={img.id} className="relative group">
              <img
                src={img.preview}
                alt="Preview"
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
              />
              <button
                type="button"
                onClick={() => onRemove(img.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ImageUpload;