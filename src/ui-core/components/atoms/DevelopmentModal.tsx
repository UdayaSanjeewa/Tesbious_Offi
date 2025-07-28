"use client";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DevelopmentModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          🚧 Our Website is Under Construction 🚧 We’re currently working on
          something amazing for Tesbious Technologies! 🚀 Our new website will
          be live soon. We appreciate your patience and apologize for any
          inconvenience. 📩 For inquiries, feel free to contact us: <br/>📧 Email:
          info@tesbious.com <br/>📱 WhatsApp: +9477 955 5563 <br/>Stay tuned—we’ll be back
          online soon! 🔧✨
        </h2>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DevelopmentModal;
