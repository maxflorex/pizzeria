import { IoPizzaOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <nav className="bg-transparent p-8">
            <div className="container flex mx-auto justify-between items-center">
                <div className="flex items-center gap-2">
                    <IoPizzaOutline className="text-2xl" />
                    <h1 className="font-bold text-xl">The Pizzeria</h1>
                </div>
                <div className="flex gap-4">
                    <h1>Login</h1>
                    <h1>Cart</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
