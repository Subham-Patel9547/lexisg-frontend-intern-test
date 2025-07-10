import React, { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (question) => {
    setLoading(true);

    // Simulate API Response
    const response = {
      answer: `
    Yes, under <strong>Section 166 of the Motor Vehicles Act, 1988</strong>, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In <em>Dani Devi v. Pritam Singh</em>, the Court held that 10% of the deceased’s annual income should be added as future prospects.

    <h3 class="font-bold underline mt-4">Legal Position:</h3>
    The Punjab and Haryana High Court, in <em>Dani Devi v. Pritam Singh</em> (FAO No. 4353 of 2012, decided on 13.09.2022), held that:
    <blockquote class="italic border-l-4 border-gray-400 pl-4 mt-2">
      “…as the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, 10% of annual income should have been awarded on account of future prospects.”
    </blockquote>

    <h3 class="font-bold underline mt-4">Summary of Entitlement:</h3>
    <ul class="list-disc list-inside">
      <li><strong>Category:</strong> Self-employed</li>
      <li><strong>Age:</strong> 54–55 years</li>
      <li><strong>Future Prospects Addition:</strong> 10% of the annual income</li>
    </ul>

    This is consistent with the principles laid down by the Supreme Court in <em>Pranay Sethi</em>.
  `,
      citations: [
        {
          text: "“…as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
          link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          source: "Dani_Devi_v_Pritam_Singh.pdf",
        },
      ],
    };

    setTimeout(() => {
      setMessages([
        ...messages,
        { type: "question", text: question },
        {
          type: "answer",
          answer: response.answer,
          citations: response.citations,
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Lexi Legal Assistant</h1>
      <div className="flex-1 overflow-y-auto mb-4 space-y-4  hide-scrollbar">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
        {loading && (
          <div className="text-center text-gray-500">Generating answer...</div>
        )}
      </div>
      <ChatInput onSubmit={handleSubmit} disabled={loading} />
    </div>
  );
}
