import { PropTypes } from "prop-types"
import { useState } from "react"
import { Edit } from "./Edit"

function Player({src, name, age, index, setdata}){
    const [edit, setEdit] = useState(false)

    return(
        <>
            <div
            onClick={() => setEdit(!edit)}
            className="bg-white w-40 h-fit rounded-2xl p-4 text-center hover:bg-slate-200 cursor-pointer">
            <img src={src}/>
            <h1 className="mt-2 text-lg">{name}</h1>
            <h2 className="text-sm">{age} anos</h2>
            </div>
            {edit ? (
                <Edit index={index} show={edit} setShow={setEdit} setdata={setdata}/>
            ) : null}
        </>
    )
}

Player.propTypes = {
    src: PropTypes.str,
    name: PropTypes.str,
    age: PropTypes.string,
    index: PropTypes.int,
}

export {Player}