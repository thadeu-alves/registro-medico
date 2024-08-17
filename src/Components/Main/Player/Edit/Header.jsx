import PropTypes from "prop-types"
import {bd} from "../../../../../bd"
import { useState } from "react"
import { Modal } from "../../../Modal"

export function Header({data, show, setShow, setdata, index}){
    const [edit, setEdit] = useState(false)

    function handleDelete(){
        console.log(data)
        console.log(bd)
        let allData = bd.filter((e) => {
            return e!=data
        })
        console.log(allData)
        //let array = bd.splice(index, 1)
        setdata(allData)
        setShow(false)
        localStorage.setItem('banco', JSON.stringify(allData))
        window.location.reload()
    }

    return (
        <div className="bg-white">
            <div className="bg-white h-44 flex max-w-6xl justify-between items-start p-5 mx-auto lg:flex-col gap-10">

                <div className="flex items-center gap-5 lg:gap-10 lg:flex-col lg:mt-28">
                    <img
                        className="w-36 h-36"
                        src={data.imgSrc || "https://avatar.iran.liara.run/public"}
                        alt={`${data.name}'s avatar`}
                    />

                    <div className="text-center mt-[-20px]">
                        <h1 className="text-3xl font-medium">{data.name}</h1>
                        <h2 className="font-light">{data.age} Anos</h2>
                        <h1
                        className="text-sm font-light cursor-pointer mt-3 underline"
                        onClick={() => setEdit(true)}>editar usuario</h1>
                    </div>

                </div>

                <div className="flex gap-5 lg:absolute left-5 top-5">
                    <button className="bg-blue-500 rounded-lg px-2 py-1 text-sm text-white font-extrabold cursor-pointer hover:bg-blue-400 "
                    onClick={() => setShow(!show)}
                    >
                        Close
                    </button>
                    <button
                        className="bg-red-500 rounded-lg px-2 py-1 text-sm text-white font-extrabold cursor-pointer hover:bg-red-400 "
                        onClick={() => handleDelete()}
                    >Delete</button>
                </div>
            </div>
            {edit?<Modal show={setEdit} index={index} data={bd} edit/>:null}
      </div>
    )
}

Header.propTypes = {
    data: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};