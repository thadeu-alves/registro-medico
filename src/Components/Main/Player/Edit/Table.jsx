import PropTypes from "prop-types";
import { useState } from "react";

export function Table(){
    const [lesoes, setLesoes] = useState([{}, {}])

    return(
        <div className="relative overflow-x-auto w-full h-full">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase bg-blue-600 text-white">
                    <TrHead set={setLesoes} les={lesoes}/>
                </thead>
                <tbody>
                    {lesoes.map((e,i) => {
                        return <TrBody set={setLesoes} les={lesoes} index={i} key={i}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}


function TrHead({set, les, index}){
    let novo = []
    return(
        <tr>
            <th scope="col" className="px-6 py-3">
                    Tipo
            </th>
            <th scope="col" className="px-6 py-3">
                    Grau
            </th>
            <th scope="col" className="px-6 py-3">
                Tempo
                <button
                    className="absolute right-9 top-2 bg-white px-2 py-1 rounded-md text-blue-900 text-center"
                    onClick={() => {
                        novo = [...les, {}]
                        set(novo)
                    }}
                >+</button>
            </th>
        </tr>
    )
}

function TrBody({border, set, les, index}){
    let novo = []
    return(
        <tr className={`bg-white ${border ? "border-b" : null} border-gray-700`}>
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray">
                <input type="text" placeholder="Tipo"/>
            </th>
            <td className="px-6 py-4">
                <input type="text" placeholder="Grau" />
            </td>
            <td className="px-6 py-4">
                <input type="text" placeholder="Tempo" />
            </td>
        </tr>
    )
}

TrBody.propTypes = {
    border: PropTypes.bool.isRequired,
};