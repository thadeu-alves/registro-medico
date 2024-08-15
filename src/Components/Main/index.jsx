import { PropTypes } from "prop-types"
import { Player } from "./Player"

function Main({data}){
    return(
        <main className="flex-1 p-5 grid grid-cols-5 gap-3 max-w-6xl
        lg:grid-cols-5 lg:ml-12 sm:grid-cols-4">
            {
                data.map((e, i) => {
                    return <>
                    <Player
                        src={e.imgSrc || "https://avatar.iran.liara.run/public"}
                        name={e.name || "Undefined"}
                        age={e.age || "Undefined"}
                        index={i}
                    />
                    </>
                })
            }
      </main>
    )
}

Main.propTypes = {
    data: PropTypes.array,
}

export {Main}