"use client";

import { useState } from 'react';

export default function RuRuStudio() {
  const [script, setScript] = useState('');
  const [model, setModel] = useState('kling-v3-pro');

  const handleEstimate = () => {
    alert('Estimated cost: ~145 credits (preview). Ready to generate?');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <header className="border-b border-yellow-500/30 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-5xl font-bold tracking-tight text-yellow-400">RuRu AI</h1>
          <p className="text-yellow-400/80">Cinematic AI Video Studio</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl mb-4 text-yellow-400">Script Interpreter</h2>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="w-full h-80 bg-black border border-yellow-500/50 p-6 rounded-xl text-lg"
              placeholder="Elara walks through the neon streets, angry about the betrayal..."
            />
            <button 
              onClick={handleEstimate}
              className="mt-6 px-10 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold text-lg rounded-xl transition"
            >
              Estimate Cost & Generate
            </button>
          </div>

          <div>
            <h2 className="text-3xl mb-6 text-yellow-400">Controls</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Model</label>
                <select value={model} onChange={(e) => setModel(e.target.value)} className="w-full bg-black border border-yellow-500/50 p-4 rounded-xl">
                  <option value="kling-v3-pro">Kling v3 Pro</option>
                  <option value="wan-2.5">Wan 2.5 (Fast)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
