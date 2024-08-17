import PropTypes from "prop-types";

export function Table(){
    return(
        <div className="relative overflow-x-auto w-full h-full">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase bg-blue-600 text-white">
                    <TrHead/>
                </thead>
                <tbody>
                    <TrBody border/>
                    <TrBody/>
                </tbody>
            </table>
        </div>
    )
}


function TrHead(){
    return(
        <tr>
            <th scope="col" className="px-6 py-3">
                    Option
            </th>
            <th scope="col" className="px-6 py-3">
                    Option
            </th>
            <th scope="col" className="px-6 py-3">
                    Option
            </th>
            <th scope="col" className="px-6 py-3">
                    Option
            </th>
        </tr>
    )
}

function TrBody({border}){
    return(
        <tr className={`bg-white ${border ? "border-b" : null} border-gray-700`}>
            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray">
                Option
            </th>
            <td className="px-6 py-4">
                Option
            </td>
            <td className="px-6 py-4">
                Option
            </td>
            <td className="px-6 py-4">
                Option
            </td>
        </tr>
    )
}

TrBody.propTypes = {
    border: PropTypes.bool.isRequired,
};