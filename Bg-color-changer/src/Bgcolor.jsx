import { useState } from "react"

export default function Bgcolor() {
  let [color, setColor] = useState("green");

  function changeColor(event) {
      setColor(event.target.innerText);
  }
  
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
          >Red</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
          >Green</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Olive"}}
          >Olive</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Gray"}}
          >Gray</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Pink"}}
          >Pink</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Purple"}}
          >Purple</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "Lavender"}}
          >Lavender</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "White"}}
          >White</button>
          <button
            onClick={changeColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}