import { useState } from 'react';
import { Header } from '../components/Header';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Properties = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [properties, setProperties] = useState([]);

    const navigate = useNavigate();

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setProperties(filteredProperties);
    };

    function handleRowClick(property) {
        console.log(property);
    }

    function handleAddProperty(){
        navigate("/add-property")
    }

    const totalRentalIncome = properties.reduce((total, property) => total + property.rentalIncome, 0);
    const totalRentalExpenses = properties.reduce((total, property) => total + property.rentalExpenses, 0);
    

    return (
        <div className=''>
            <Header />

            <div className="m-3 md:mx-10">

                <h1 className="text-3xl mt-6 font-bold">Rental Properties</h1>

                <div className="flex flex-wrap justify-between w-full my-7">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search property"
                            value={searchTerm}
                            className='border border-gray-300 p-2 rounded w-50 rounded'
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className='mx-3'><FaSearch /></button>
                    </form>

                    <button onClick={handleAddProperty} className="bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">Add Property</button>
                </div>

                <div className="flex justify-around mt-6">
                    <div className=''>
                        <h2 className="text-xl ">Total Rental Income: ${totalRentalIncome}</h2>
                    </div>
                    <div className=''>
                        <h2 className="text-xl">Total Rental Expenses: ${totalRentalExpenses}</h2>
                    </div>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr>
                            <th>Property Name</th>
                            <th>Total Units</th>
                            <th>Units Rented</th>
                            <th>Rental Income</th>
                            <th>Rental Expenses</th>
                        </tr>
                    </thead>
                    <tbody>
                            {properties.map((property) => (
                                <tr key={property.id} onClick={() => handleRowClick(property)} className='hover:bg-gray-500'>
                                    <td>{property.name}</td>
                                    <td>{property.totalUnits}</td>
                                    <td>{property.unitsRented}</td>
                                    <td>{property.rentalIncome}</td>
                                    <td>{property.rentalExpenses}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Properties;
