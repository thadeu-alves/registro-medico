import PropTypes from "prop-types";

export function Modal({show, data, setdata, edit, index}){
  let name = ""
  let age = 0
  let peso = 0
  let alt = 0
  window.onclick = (e) => {
    if(e.target == document.querySelector(".modal-content")){
      console.log("True")
      show(false)
    }
  }

  const update = () => {
    data.push({name, age, peso, alt})
    setdata(data)
    show(false)
    localStorage.setItem('banco', JSON.stringify(data))
  }

  function setEdit(){
    console.log(data[index].name)
    data[index].name = name
    data[index].age = age
    data[index].alt = alt
    data[index].peso = peso
    localStorage.setItem('banco', JSON.stringify(data))
    alert("Editado")
  }

  return(
    <div className="h-screen absolute left-0 top-0 w-screen bg-slate-500 bg-opacity-50 flex justify-center items-center modal-content z-50">
      <div className="bg-white w-96 rounded-xl p-6">
        <form className="flex flex-col gap-2">
            <label htmlFor="m-nome">Nome</label>
            <input className="bg-slate-200 px-3 py-1 rounded-lg" id="m-nome" type="text" required onChange={e => name = e.currentTarget.value}/>

            <label htmlFor="m-idade">Idade</label>
            <input className="bg-slate-200 px-3 py-1 rounded-lg" id="m-idade" type="number" required onChange={e => age = e.currentTarget.value}/>

            <label htmlFor="m-alt">Altura (cm)</label>
            <input className="bg-slate-200 px-3 py-1 rounded-lg" id="m-alt" type="number" required onChange={e => alt = e.currentTarget.value}/>

            <label htmlFor="m-peso">Peso (Kg)</label>
            <input className="bg-slate-200 px-3 py-1 rounded-lg" id="m-pes" type="number" required onChange={e => peso = e.currentTarget.value}/>

            <button id="btnSalvar" className="mt-8 bg-green-400 rounded-2xl w-60 m-auto py-2 text-white hover:bg-green-300 flex justify-center items-center" onClick={() => {
              edit ? setEdit() : update()
            }}>Salvar</button>

            <button onClick={() => show(false)}
              className="text-sm">Close</button>
        </form>
      </div>
    </div>
  )
}

Modal.propTypes = {
  data: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  setdata: PropTypes.func.isRequired,
  edit: PropTypes.bool,
};