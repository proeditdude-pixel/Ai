'use client';

import { useChat } from 'ai/react';
import { useRef } from 'react';
import { Paperclip, Send } from 'lucide-react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col w-full max-w-2xl py-10 mx-auto stretch min-h-screen px-4 bg-slate-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b z-10">
        <div className="max-w-2xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-600">黃絕GPT</h1>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">DeepSeek-V3</span>
        </div>
      </header>

      <div className="flex-1 mt-16 mb-24 space-y-6">
        {messages.length === 0 && (
          <div className="text-center mt-20">
             <div className="text-4xl mb-4">🏮</div>
             <p className="text-gray-400">Powered by DeepSeek. Start chatting...</p>
          </div>
        )}
        
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
              m.role === 'user' 
                ? 'bg-yellow-500 text-white rounded-tr-none' 
                : 'bg-white border rounded-tl-none text-slate-800'
            }`}>
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent p-4">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto relative flex items-center bg-white border border-gray-200 rounded-2xl shadow-xl px-4 py-2">
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            accept="image/*"
            onChange={() => alert("DeepSeek standard models typically focus on text. For images, ensure your API supports vision models.")}
          />
          
          <button 
            type="button" 
            onClick={() => fileInputRef.current?.click()}
            className="p-2 text-gray-400 hover:text-yellow-600 transition"
          >
            <Paperclip size={20} />
          </button>

          <input
            className="flex-1 bg-transparent border-none focus:ring-0 p-2 text-slate-700 outline-none"
            value={input}
            placeholder="Ask 黃絕 anything..."
            onChange={handleInputChange}
          />
          
          <button type="submit" className="bg-yellow-500 text-white p-2 rounded-xl hover:bg-yellow-600 transition shadow-md">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
