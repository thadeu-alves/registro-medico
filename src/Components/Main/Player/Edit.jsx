import { bd } from "../../../../bd"
import { PropTypes } from "prop-types"

export function Edit({index, show, setShow}){
    var actual = bd[index]
    return(
        <div className="absolute left-0 top-0 bg-white  h-screen w-screen">
            <div className="bg-white h-44 flex max-w-6xl justify-between items-start p-5 m-auto">
                <div className="flex items-center gap-5">
                    <img
                    className="w-36 h-36"
                    src={actual.imgSrc || "https://avatar.iran.liara.run/public"}/>
                    <div className="text-center mt-[-20px]">
                        <h1 className="text-3xl font-medium">{actual.name}</h1>
                        <h2 className="font-light">{actual.age} Anos</h2>
                    </div>
                </div>

                <button
                className="bg-blue-500 rounded-lg px-2 py-1 text-sm text-white font-extrabold cursor-pointer hover:bg-blue-400"
                onClick={() => setShow(!show)}>Close</button>
            </div>
            <div className="flex-1 border-t-2">

            </div>
        </div>
    )
}

Edit.propTypes = {
    index: PropTypes.int,
    show: PropTypes.bool,
}