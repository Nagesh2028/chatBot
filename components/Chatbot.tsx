"use client";

import { useState } from 'react';

const predefinedQuestions = [
  "Who was the first President of the United States?",
  "What year did the Titanic sink?",
  "Who was Cleopatra?",
  "When did World War I begin?",
  "What was the Great Wall of China built for?",
  "Who discovered America?",
  "What was the Renaissance?",
  "Who was Napoleon Bonaparte?",
  "When was the Declaration of Independence signed?",
  "What is the Colosseum?"
];

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; type: 'user' | 'bot' }[]>([]);

  const fetchResponse = async (question: string) => {
    const res = await fetch(`/api/getResponse?question=${encodeURIComponent(question)}`);
    const data = await res.json();
    return data.response;
  };

  const handleQuestionClick = async (question: string) => {
    const response = await fetchResponse(question);
    setMessages([...messages, { text: question, type: 'user' }, { text: response, type: 'bot' }]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetchResponse(input);
    setMessages([...messages, { text: input, type: 'user' }, { text: response, type: 'bot' }]);
    setInput('');
  };

  return (
    <div>
      <div className="question-boxes">
        {predefinedQuestions.map((question, index) => (
          <button key={index} onClick={() => handleQuestionClick(question)} className="question-box">
            {question}
          </button>
        ))}
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.type}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me a historical question"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;

