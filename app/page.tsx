'use client';

export default function RuRuStudio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <h1 className="text-6xl font-bold gold-accent mb-8">RuRu AI</h1>
      <p className="text-xl mb-8">Black & Gold Video Studio</p>
      
      <div className="max-w-2xl mx-auto">
        <textarea 
          className="w-full h-64 bg-black border border-yellow-500 rounded-xl p-6 text-lg"
          placeholder="Paste your script here..."
        />
        <button className="mt-6 px-10 py-4 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-xl text-lg w-full">
          Generate Video
        </button>
      </div>
    </div>
  );
}
