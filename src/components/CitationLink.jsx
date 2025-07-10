import React, { useState } from "react";
import PDFModal from "./PDFModal";
import { AiFillFilePdf } from "react-icons/ai";

export default function CitationLink({ citation }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleOpen}
        className="flex items-center px-4 py-2 cursor-pointer bg-green-900 rounded-md hover:bg-green-950 transition"
      >
        <AiFillFilePdf className="text-red-600 mr-2 text-xl" />
        <span className="text-sm font-semibold text-white">
          {citation.source} (Para 7)
        </span>
      </button>

      {isOpen && <PDFModal pdfUrl={citation.link} onClose={handleClose} />}
    </div>
  );
}
