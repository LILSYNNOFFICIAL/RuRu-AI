"use client";
import { useState } from 'react';

export default function RuRuStudio() {
  const [script, setScript] = useState("");
  const [model, setModel] = useState("kling-v3-pro");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <header className="border-b border-yellow-500/30 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold gold-accent">RuRu AI</h1>
          <p className="text-yellow-400">The Abyss of Cinematic Video</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-6 gold-accent">Script Interpreter</h2>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="w-full h-64 bg-black border border-yellow-500/30 p-4 rounded"
              placeholder="Elara walks through neon streets, furious..."
            />
            <button 
              onClick={() => alert("🖤 Generating with cost preview...")}
              className="mt-6 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold"
            >
              Interpret & Estimate Cost
            </button>
          </div>

          <div>
            <h2 className="text-2xl mb-6 gold-accent">Live Controls</h2>
            <select value={model} onChange={(e) => setModel(e.target.value)} className="bg-black border border-yellow-500/30 p-4 w-full">
              <option value="kling-v3-pro">Kling v3 Pro (Premium)</option>
              <option value="wan-2.5">Wan 2.5 (Fast)</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
}