import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-transparent p-8">
            <div className="container flex mx-auto justify-between items-center">
                <h1 className="font-bold text-xl">The Pizzeria</h1>
                <div className='flex gap-4'>
                    <h1>Login</h1>
                    <h1>Cart</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
