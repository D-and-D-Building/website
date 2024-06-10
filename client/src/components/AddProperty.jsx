import { useState } from 'react';
import { Header } from './Header';

const AddProperty = () => {
    const [propertyName, setPropertyName] = useState('');
    const [propertyLocation, setPropertyLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [totalUnits, setTotalUnits] = useState(0);
    const [numberOfStaffs, setNumberOfStaffs] = useState(0);
    const [powerProvider, setPowerProvider] = useState('');
    const [waterProvider, setWaterProvider] = useState('');
    const [wasteManagementCompany, setWasteManagementCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle the form submission
        // You can access the form values using the state variables
        console.log({
            propertyName,
            propertyType,
            totalUnits,
            numberOfStaffs,
            powerProvider,
            waterProvider,
            wasteManagementCompany,
        });
    };

    return (
        <div>
            <Header />

            <div className="m-3 md:mx-10">
                <h1 className="text-3xl mt-6 font-bold">Add New Property</h1>

                <form onSubmit={handleSubmit} className='mt-6'>
                    <div className="flex">
                        <div className="">
                            <div className="">
                                <label>Property Name:</label>
                                <input
                                    type="text"
                                    value={propertyName}
                                    onChange={(e) => setPropertyName(e.target.value)}
                                />
                            </div>

                            <div className="">
                                <label>Property Type:</label>
                                <input
                                    type="text"
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                />
                            </div>

                            <div className="">
                                <label>Property Location:</label>
                                <input
                                    type="text"
                                    value={propertyLocation}
                                    onChange={(e) => setPropertyLocation(e.target.value)}
                                />
                            </div>

                            <div className="">
                                <h4>Area on the map</h4>
                            </div>

                            

                            <div className="">
                                <label>Total Units:</label>
                                <input
                                    type="number"
                                    value={totalUnits}
                                    onChange={(e) => setTotalUnits(parseInt(e.target.value))}
                                />
                            </div>
                        </div>

                        <div className="">

                            <div className="">
                                <label>Staffs:</label>
                                <input
                                    type="number"
                                    value={numberOfStaffs}
                                    onChange={(e) => setNumberOfStaffs(parseInt(e.target.value))}
                                />
                            </div>

                            <div className="">
                                <h5>Property Essentials</h5>
                                <div className="">
                                    <label>Power Provider:</label>
                                    <input
                                        type="text"
                                        value={powerProvider}
                                        onChange={(e) => setPowerProvider(e.target.value)}
                                    />
                                </div>

                                <div className="">
                                    <label>Water Provider:</label>
                                    <input
                                        type="text"
                                        value={waterProvider}
                                        onChange={(e) => setWaterProvider(e.target.value)}
                                    />

                                </div>

                                <div className="">
                                    <label>Waste Management Company:</label>
                                    <input
                                        type="text"
                                        value={wasteManagementCompany}
                                        onChange={(e) => setWasteManagementCompany(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div className="">
                                <button type="submit">Add Property</button>
                                <button type="submit">Cancel</button>
                            </div>

                        </div>




                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProperty;