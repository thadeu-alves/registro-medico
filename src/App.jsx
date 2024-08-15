import { Main } from "./Components/Main"
import { useState } from "react"
import { Modal } from "./Components/Modal"
import {bd} from "../bd"

function App() {
  const [Banco, setBanco] = useState(bd)
  const [show, setShow] = useState(false)

  return (
    <body className="flex-col bg-slate-100 min-h-screen">
      <div className="bg-white flex justify-center items-center">
        <div className="bg-white w-full h-11 flex justify-between items-center p-6 max-w-6xl">
          <h1 className="text-3xl font-extrabold">LOGO</h1>
          <ul>
            <li className="bg-blue-500 rounded-lg px-2 py-1 text-sm text-white font-extrabold cursor-pointer hover:bg-blue-400"
            onClick={() => setShow(true)}
            >Adicionar</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Main
          data={Banco}
        />
      </div>
    {show ? (<Modal show={setShow} data={Banco} setdata={setBanco}/>) : null}
    </body>
  )
}

export default App
