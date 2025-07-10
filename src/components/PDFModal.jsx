import React from "react";

export default function PDFModal({ pdfUrl, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 h-3/4 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Judgment PDF</h2>
          <button
            onClick={onClose}
            className="text-red-600 hover:text-red-900 cursor-pointer"
          >
            Close ✖
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="mb-4 text-gray-700">
            PDF cannot be embedded due to restrictions.
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open PDF in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}
