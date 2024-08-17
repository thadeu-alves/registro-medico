import { PropTypes } from "prop-types"

export function Header({setShow}){
    return(
        <div className="bg-white w-full h-11 flex justify-between items-center p-6 max-w-6xl">
          <h1 className="text-3xl font-extrabold">LOGO</h1>
          <ul>
            <li className="bg-blue-500 rounded-lg px-2 py-1 text-sm text-white font-extrabold cursor-pointer hover:bg-blue-400"
            onClick={() => setShow(true)}
            >Adicionar</li>
          </ul>
        </div>
    )
}

Header.propTypes = {
    setShow: PropTypes.func,
}