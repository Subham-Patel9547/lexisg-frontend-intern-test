import React, { useState } from "react";

export default function ChatInput({ onSubmit, disabled }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-900 rounded p-2"
    >
      <textarea
        className="flex-1 p-2 border-none focus:outline-none resize-none"
        rows={2}
        placeholder="Ask a legal question..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-900"
        disabled={disabled}
      >
        Submit
      </button>
    </form>
  );
}
