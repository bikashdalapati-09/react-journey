import { useState } from "react"

function App() {
  const [color, setColour] = useState("#E6E6FA") // lavender

  return (
    <div
      className="w-full h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >

      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="flex items-center gap-4 px-6 py-3 rounded-full backdrop-blur-2xl bg-white/15 border border-white/25">

          <button
            onClick={() => setColour("#FB2C36")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#FB2C36" }}
          >
            Red
          </button>

          <button
            onClick={() => setColour("#22C55E")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#22C55E" }}
          >
            Green
          </button>


          <button
            onClick={() => setColour("#3B82F6")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#3B82F6" }}
          >
            Blue
          </button>


          <button
            onClick={() => setColour("#FACC15")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#FACC15" }}
          >
            Yellow
          </button>


          <button
            onClick={() => setColour("#A855F7")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#A855F7" }}
          >
            Purple
          </button>


          <button
            onClick={() => setColour("#F97316")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#F97316" }}
          >
            Orange
          </button>


          <button
            onClick={() => setColour("#000000")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-white/40 cursor-pointer"
            style={{ backgroundColor: "#000000" }}
          >
            Black
          </button>


          <button
            onClick={() => setColour("#FFFFFF")}
            className="w-16 h-16 rounded-full flex items-center justify-center text-black text-[10px] font-bold border border-black/40 cursor-pointer"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            White
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
