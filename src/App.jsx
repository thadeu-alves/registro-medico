import { Main } from "./Components/Main"
import { useState } from "react"
import { Modal } from "./Components/Modal"
import { Header } from "./Components/Header"
import {bd} from "../bd"

function App() {
  const [Banco, setBanco] = useState(bd)
  const [show, setShow] = useState(false)

  return (
    <body className="flex-col bg-slate-100 min-h-screen">
      <div className="bg-white flex justify-center items-center">
        <Header setShow={setShow}/>
      </div>
      <div className="flex justify-center items-center">
        <Main
          data={Banco}
          setdata={setBanco}
        />
      </div>
    {show ? (<Modal show={setShow} data={Banco} setdata={setBanco}/>) : null}
    </body>
  )
}

export default App
