import Pizza from "../components/Pizza"
import pizzas from "../pizzasdata"


const Homescreen = () => {

    return (
        <div className="my-16 px-8">
            <div className="container mx-auto grid grid-cols-3 justify-items-center gap-8">
                {pizzas.map((pizza, index) => {
                    return <div key={index}>
                        <Pizza pizza={pizza} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Homescreen