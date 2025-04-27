import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profiles() {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/providers')
        .then((res) => res.json())
        .then((data) => setProviders(data))
        .catch((error) =>console.error('Fetch error:', error))

    },[]);

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Providers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 1g:grid-cols-3 gap-6">
                    {providers.map((provider) =>(
                        <div key={provider.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold tezxt-gray-800 mb-2">
                                {provider.name}
                            </h3>
                            <p className="text-gray-600">Category: {provider.category}</p>
                            <p className="text-gray-600">Experience: {provider.experience}</p>
                            <p className="text-gray-600 mb-4">Contact: {provider.contact}</p>
                            <Link to={`/booking/${provider.id}`}
                            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                                Book Now
                         </Link>
                         </div>   

                    ))}

                </div>
            </div>
        </div>
    );
        
}
export default Profiles;
