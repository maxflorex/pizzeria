import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ pizza, setModalOpen, modalOpen }) => {
    
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setModalOpen(!modalOpen)
        }
    };

    return (
        <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleClick}
        >
            <motion.div
                initial={{ y: '-10vh' }}
                animate={{ y: '0' }}
                className="w-[50vw]"
            >
                <div className="grid md:grid-cols-2 bg-white gap-8 rounded-lg overflow-hidden">
                    <img
                        src={pizza.image}
                        alt="Enlarged Pizza"
                        className="w-full md:h-[40vh] h-80 object-cover"
                    />
                    <div className="flex flex-col p-8 gap-4 relative">
                        <h2 className="text-xl text-center font-bold">Pizza</h2>
                        <h1 className="text-4xl text-center font-bold">
                            {pizza.name}
                        </h1>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
