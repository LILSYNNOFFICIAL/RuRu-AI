'use client';

import { useState } from 'react';
import { Upload, Play, DollarSign, User } from 'lucide-react';

export default function RuRuStudio() {
  const [script, setScript] = useState('');
  const [model, setModel] = useState('kling-v3-pro');
  const [characters, setCharacters] = useState<any[]>([]);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCharacterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newChars = Array.from(e.target.files).map(file => ({
        id: Date.now() + Math.random(),
        name: file.name
      }));
      setCharacters([...characters, ...newChars]);
    }
  };

  const estimateCost = () => {
    const cost = Math.floor(Math.random() * 150) + 40;
    setEstimatedCost(cost);
    if (confirm(`Estimated cost: ${cost} credits. Proceed with generation?`)) {
      generateVideo();
    }
  };

  const generateVideo = () => {
    setIsLoading(true);
    setTimeout(() => {
      alert('✅ Video generation started! (Demo mode - full backend coming soon)');
      setIsLoading(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-mono">
      <header className="border-b border-yellow-500/30 py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-5xl font-bold tracking-tighter text-yellow-400">RuRu AI</h1>
          <p className="text-yellow-400/70">Declarative Video Studio</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl mb-4 text-yellow-400">Script Interpreter</h2>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="w-full h-64 bg-black border border-yellow-500/30 rounded-2xl p-6 text-lg placeholder:text-gray-500 focus:outline-none focus:border-yellow-400 resize-y"
              placeholder="Describe your video here... Elara walks through neon streets..."
            />
          </div>

          <div>
            <h2 className="text-2xl mb-4 text-yellow-400">Model</h2>
            <select 
              value={model} 
              onChange={(e) => setModel(e.target.value)}
              className="w-full bg-black border border-yellow-500/30 rounded-2xl p-4 text-lg focus:outline-none focus:border-yellow-400"
            >
              <option value="kling-v3-pro">Kling v3 Pro (Best Consistency)</option>
              <option value="runway-gen3">Runway Gen-3 Alpha</option>
              <option value="luma-dream">Luma Dream Machine</option>
              <option value="wan-2.2">Wan 2.2 (Local/ComfyUI)</option>
            </select>
          </div>

          <button
            onClick={estimateCost}
            className="w-full py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition"
          >
            <DollarSign className="w-5 h-5" /> ESTIMATE COST & GENERATE
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl mb-4 text-yellow-400">Character References</h2>
            <label className="border-2 border-dashed border-yellow-500/50 hover:border-yellow-400 rounded-3xl p-16 block text-center cursor-pointer transition-all">
              <User className="mx-auto mb-6 text-yellow-400" size={64} />
              <p className="text-lg">Drop face / body / pose images</p>
              <input type="file" multiple accept="image/*" className="hidden" onChange={handleCharacterUpload} />
            </label>
            {characters.length > 0 && (
              <div className="mt-6 p-4 bg-black/50 rounded-2xl">
                {characters.map((c, i) => (
                  <div key={i} className="text-sm text-green-400">✓ {c.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
