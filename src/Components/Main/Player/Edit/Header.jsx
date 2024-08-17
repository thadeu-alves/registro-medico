import PropTypes from "prop-types";

export function Header({data, show, setShow}){
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
                    </div>

                </div>

                <button className="bg-blue-500 rounded-lg px-2 py-1 text-sm text-white font-extrabold cursor-pointer hover:bg-blue-400 lg:absolute left-5 top-5"
                onClick={() => setShow(!show)}
                >
                    Close
                </button>
            </div>
      </div>
    )
}

Header.propTypes = {
    data: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};