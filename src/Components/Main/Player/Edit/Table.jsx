import { useState } from 'react';

export function Table({ setdata, data }) {
    const [ops, setOps] = useState([{}, {}, {}])

    return (
        <div className="relative overflow-x-auto w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Grau
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tempo
                            <button className="bg-blue-500 py-1 px-2 rounded-lg absolute right-5 top-2 text-white"
                            onClick={() => setOps([...ops, {}])}
                            >+</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ops.map(() => {
                        return (<tr className="bg-white border-b ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Select data={data} setdata={setdata} />
                            </th>
                            <td className="px-6 py-4">
                                <input className="border-b-2" type="text" />
                            </td>
                            <td className="px-6 py-4">
                                <input className="border-b-2" type="text" />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

function Select({ data, setdata }) {
    const [previousValue, setPreviousValue] = useState(null);

    const handleChange = (e) => {
        const selectedValue = e.target.value;

        // Atualiza os dados com base na seleção
        const updatedData = data.map(tipo => {
            if (tipo.value === selectedValue) {
                return { ...tipo, qtd: tipo.qtd + 1 };
            } else if (tipo.value === previousValue) {
                return { ...tipo, qtd: tipo.qtd - 1 };
            }
            return tipo;
        });

        // Atualiza o estado com os novos dados
        setdata(updatedData);

        // Atualiza o localStorage
        localStorage.setItem('char-data', JSON.stringify(updatedData));

        // Atualiza o valor anterior
        setPreviousValue(selectedValue);
    };

    return (
        <form className="max-w-sm mx-auto">
            <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={handleChange}
            >
                <option>Escolha uma opção</option>
                <option value="mus">Muscular</option>
                <option value="tor">Torção</option>
                <option value="lig">Ligamento</option>
            </select>
        </form>
    );
}
