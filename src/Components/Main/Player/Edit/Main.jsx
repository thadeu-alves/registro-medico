import { Table } from "./Table";
import PropTypes from "prop-types";
import {Grafico} from "./Chart";
import { useEffect, useState } from "react";

export function Main({data}){
    let imc = Math.floor(data.peso/((data.alt/100)**2))
    let igc = Math.floor((1.20 * data.age) + (0.23 * data.age) - (10.8 * 1) - 5.4)
    let asc = Math.floor(Math.sqrt((data.alt * data.peso) / 3600))

    const [lesoes, setLesoes] = useState(() => {
    // Obtém os dados iniciais do localStorage
    const localData = localStorage.getItem('char-data');
    return localData ? JSON.parse(localData) : [
      { month: "Muscular", qtd: 0, value: "mus" },
      { month: "Torção", qtd: 0, value: "tor" },
      { month: "Ligamento", qtd: 0, value: "lig" },
    ];
  });

  useEffect(() => {
    // Salva os dados no localStorage sempre que lesoes mudar
    localStorage.setItem('char-data', JSON.stringify(lesoes));
  }, [lesoes]);

    return(
        <div className="flex flex-col flex-1 border-t-2 p-5 max-w-6xl m-auto gap-5">
            <div className="flex flex-1  gap-5">
                <div className="bg-white w-64 h-64 rounded-lg flex flex-col justify-center items-center">
                    <h1 className={`${imc<18 ? "bg-orange-300" : imc<24 ? "bg-green-300" : imc<29 ? "bg-red-300" : "bg-red-950"} text-white text-5xl font-extrabold rounded-full w-40 h-40 flex flex-col justify-center items-center`}>{imc ? imc : ""}</h1>
                    <p className="mt-3 text-lg">{imc<18 ? "Abaixo do peso" : imc<24 ? "Normal" : imc<29 ? "Sobrepeso" : "Obeso"}</p>
                </div>

                <div className="bg-white flex-1 h-64 rounded-lg flex justify-between items-center text-center lg:px-28 sm:px-4">
                    <div>
                        <h1 className="text-5xl">{igc}</h1>
                        <h2 className="text-sm mt-5">Índice de Gordura Corporal (IGC)</h2>
                    </div>
                    <div className="bg-slate-500 h-56 w-1 rounded-full opacity-50"></div>
                    <div>
                        <h1 className="text-5xl">{asc} <span className="text-xl">m²</span></h1>
                        <h2 className="text-sm mt-5">Área de Superfície Corporal (ASC)</h2>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg flex flex-col justify-center items-center overflow-hidden">
                <Table setdata={setLesoes} data={lesoes}/>
            </div>

            <div className="bg-white h-64 rounded-lg flex flex-col justify-center items-center">
                <Grafico data={lesoes} />
            </div>

        </div>
    )
}

Main.propTypes = {
    data: PropTypes.array.isRequired,
};