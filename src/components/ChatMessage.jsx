import React from "react";
import CitationLink from "./CitationLink";

export default function ChatMessage({ message }) {
  if (message.type === "question") {
    return (
      <div className="bg-green-100 p-3 rounded self-end max-w-[50%] ml-auto break-words shadow">
        <p className="text-right break-words">{message.text}</p>
      </div>
    );
  }

  if (message.type === "answer") {
    return (
      <div className="bg-green-100 p-4 rounded self-start max-w-[80%] space-y-4 shadow">
        <div
          className="prose prose-sm"
          dangerouslySetInnerHTML={{ __html: message.answer }}
        />

        {message.citations && message.citations.length > 0 && (
          <div className="border-t border-gray-300 pt-4">
            <p className="font-bold mb-2">Citation:</p>
            {message.citations.map((citation, index) => (
              <CitationLink key={index} citation={citation} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
}
