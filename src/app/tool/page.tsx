"use client";

import { UploadCloud, FileType2, Play, CheckCircle2, ListChecks, Download, Terminal, ChevronDown } from "lucide-react";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ToolPage() {
  const [file, setFile] = useState<string | null>(null);
  const [mode, setMode] = useState<"schema" | "summarize">("schema");
  const [isExtracting, setIsExtracting] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [schemaText, setSchemaText] = useState("");

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFile("catalog_2024.pdf"); // Mock
  };

  const mockExtract = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    setIsExtracting(true);
    setResult(null);
    setTimeout(() => {
      setIsExtracting(false);
      if (mode === "schema") {
        setResult(JSON.stringify({
          document: file,
          status: "success",
          extracted_items: [
            { 
              name: "Quantum Keyboard", 
              price: "$149.99",
              category: "Peripherals",
              in_stock: true 
            },
            { 
              name: "ErgoMouse Pro", 
              price: "$89.50",
              category: "Peripherals",
              in_stock: false 
            }
          ]
        }, null, 2));
      } else {
        setResult("Summary Report:\n\nThe uploaded document 'catalog_2024.pdf' is a 24-page B2B tech catalogue. It primarily features ergonomic office equipment, high-end peripherals, and networking gear. Pricing ranges from $20 for cables up to $2,500 for server racks. Contact information for bulk orders is listed on the final page.");
      }
    }, 2500);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center">
      
      <div className="text-center mb-10 animate-fade-in w-full">
        <h1 className="text-3xl font-bold text-white mb-3">Extract Data Studio</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Upload any document and tell our AI exactly what to pull out.</p>
      </div>

      <div className="w-full grid lg:grid-cols-2 gap-8 items-start animate-slide-up" style={{ animationDelay: '0.1s' }}>
        
        {/* Left Column: Configuration */}
        <div className="space-y-6">
          
          {/* Upload Zone */}
          <div 
            className="glass-card border-dashed border-2 p-8 text-center cursor-pointer relative group transition-all duration-300 hover:bg-brand-500/5 hover:border-brand-500/50"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => setFile("example_document.pdf")}
          >
            {file ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8">
                <div className="p-4 rounded-full bg-green-500/20 text-green-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-white font-medium text-lg">{file}</p>
                  <p className="text-gray-400 text-sm mt-1">Ready for extraction • 2.4 MB</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setFile(null); setResult(null); }}
                  className="text-xs text-red-400 hover:text-red-300 transition"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 py-8 pointer-events-none">
                <div className="p-4 rounded-full bg-white/5 text-gray-400 group-hover:text-brand-400 group-hover:bg-brand-500/20 transition-all duration-300">
                  <UploadCloud className="w-10 h-10" />
                </div>
                <div>
                  <p className="text-white font-medium text-lg mb-1">Click to upload or drag and drop</p>
                  <p className="text-gray-500 text-sm">PDF, DOCX, PNG, JPG (Max 50MB)</p>
                </div>
              </div>
            )}
          </div>

          {/* Configuration Zone */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileType2 className="w-5 h-5 text-accent-400"/>
              Extraction Goal
            </h3>
            
            <div className="flex space-x-2 p-1 bg-black/40 rounded-xl border border-white/5 mb-6">
              <button 
                onClick={() => setMode("schema")}
                className={cn(
                  "flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  mode === "schema" ? "bg-brand-500 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                Structured Form (JSON)
              </button>
              <button 
                onClick={() => setMode("summarize")}
                className={cn(
                  "flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  mode === "summarize" ? "bg-accent-500 text-white shadow-lg" : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                Text Summary
              </button>
            </div>

            <div className="space-y-4">
              {mode === "schema" ? (
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Describe what to extract</label>
                  <textarea 
                    value={schemaText}
                    onChange={(e) => setSchemaText(e.target.value)}
                    placeholder="E.g., Extract all product names, their prices, and availability status from this catalogue."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none h-32 text-sm"
                  ></textarea>
                </div>
              ) : (
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Summary Focus (Optional)</label>
                  <textarea 
                    placeholder="E.g., Focus only on the main characters' progression and the climax of the story."
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none h-32 text-sm"
                  ></textarea>
                </div>
              )}
            </div>
          </div>
          
          {/* Action Button */}
          <button 
            onClick={mockExtract}
            disabled={!file || isExtracting}
            className={cn(
              "w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg",
              !file ? "bg-gray-800 text-gray-500 cursor-not-allowed border border-white/5" :
              isExtracting ? "bg-brand-600/50 cursor-wait" :
              "bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-1"
            )}
          >
            {isExtracting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Analyzing Document...
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                Start Extraction
              </>
            )}
          </button>
        </div>

        {/* Right Column: Results */}
        <div className="glass-card h-full min-h-[600px] flex flex-col relative overflow-hidden">
          {/* Result Header */}
          <div className="border-b border-white/10 pb-4 mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-gray-400"/>
              Output Panel
            </h3>
            {result && (
              <button className="text-xs flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-white transition-colors">
                <Download className="w-3 h-3" /> Export
              </button>
            )}
          </div>
          
          {/* Code Viewer */}
          {result ? (
            <div className="relative flex-grow rounded-xl bg-[#0d1117] border border-white/10 overflow-hidden group">
              <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4">
                <span className="text-xs text-gray-500 font-mono">
                  {mode === 'schema' ? 'result.json' : 'summary.txt'}
                </span>
              </div>
              <pre className="p-4 pt-12 overflow-auto h-full text-sm font-mono text-gray-300 animate-fade-in custom-scrollbar">
                <code>{result}</code>
              </pre>
            </div>
          ) : (
            <div className="flex-grow rounded-xl bg-black/20 border border-white/5 border-dashed flex flex-col items-center justify-center text-gray-500 p-8 text-center space-y-4">
               {isExtracting ? (
                 <>
                   <div className="relative w-24 h-24 flex items-center justify-center">
                     <div className="absolute inset-0 bg-brand-500/20 rounded-full animate-ping"></div>
                     <div className="absolute inset-2 bg-brand-500/40 rounded-full animate-pulse"></div>
                     <FileType2 className="w-8 h-8 text-brand-400 relative z-10 animate-bounce" />
                   </div>
                   <p className="text-brand-200 mt-4 animate-pulse">Connecting to Neural Engine...</p>
                 </>
               ) : (
                 <>
                   <ListChecks className="w-12 h-12 text-gray-600 mb-2" />
                   <p>Results will appear here.</p>
                   <p className="text-sm px-8">Upload a document and configure your goal on the left to begin.</p>
                 </>
               )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
