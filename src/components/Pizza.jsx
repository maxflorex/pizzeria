import { useState } from 'react';
import Modal from './Modal';

const Pizza = ({ pizza }) => {
    const [qty, setQty] = useState(0);
    const [vari, setVari] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="w-full">
            <h1 className="font-semibold text-xl">{pizza.name}</h1>
            <img
                src={pizza.image}
                alt="Current Pizza"
                className="w-[100vw] h-48 object-cover rounded-lg"
                onClick={() => setModalOpen(!modalOpen)}q
            />
            <div className="flex justify-between">
                {/* DROPDOWN */}
                <div className="dropdown">
                    <label
                        tabIndex="0"
                        className="btn mt-4 tracking-wider font-medium"
                    >
                        {vari === '' ? 'Variants' : vari}
                    </label>
                    <ul
                        tabIndex="0"
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {pizza.variants.map((variants, index) => {
                            return (
                                <li key={index}>
                                    <a onClick={() => setVari(variants)}>
                                        {variants}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* DROPDOWN */}
                <div className="dropdown">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost mt-4 tracking-wider font-medium"
                    >
                        {qty !== 0 ? qty : 'Quantity'}
                    </label>
                    <ul
                        tabIndex="0"
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {[...Array(10).keys()].map((x, i) => {
                            return (
                                <li key={i}>
                                    <a onClick={() => setQty(i + 1)}>{i + 1}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="flex justify-between">
                {qty !== 0 && vari !== '' ? (
                    <h1 className="my-4">
                        Price: ${pizza.prices[0][vari] * qty}
                    </h1>
                ) : (
                    ''
                )}
                {qty !== 0 && vari !== '' ? (
                    <h1 className="btn btn-sm btn-outline">Add to cart</h1>
                ) : (
                    ''
                )}
            </div>
            {/* MODAL */}
            {modalOpen && <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} pizza={pizza} />}
        </div>
    );
};

export default Pizza;
