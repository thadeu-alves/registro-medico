import { PropTypes } from "prop-types"

function Player({src, name, age}){
    return(
        <div className="bg-white w-40 h-fit rounded-2xl p-4 text-center hover:bg-slate-200 cursor-pointer">
          <img src={src}/>
          <h1 className="mt-2 text-lg">{name}</h1>
          <h2 className="text-sm">{age} anos</h2>
        </div>
    )
}

Player.propTypes = {
    src: PropTypes.str,
    name: PropTypes.str,
    age: PropTypes.string,
}

export {Player}