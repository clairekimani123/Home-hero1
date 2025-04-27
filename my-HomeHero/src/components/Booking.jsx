import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function Booking() {
    const { id } = useParams();
    const Navigate = useNavigate();
    const [provider, setProvider] = useState(null);
    const [date, setDate] = useState('');
    

    useEffect(() => {
        fetch(`http://localhost:3000/providers/${id}`)
        .then((res) => res.json())
        .then((data)=> setProvider(data))
        .catch((error) => console.error('Fetch error:', error));
    }, [id]);


    const handleBooking = (e) => {
        e.preventDefault();
        console.log(`Booking for ${provider.name} on ${date}`);
        Navigate(`/payment/${id}`);
    };

    if (!provider) return <div className="flex justify-center items-center h-screen text-blue-600">Loading...</div>;


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-4">Book
                    {provider.name}
                </h2>
                <form  onSubmit={handleBooking} className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Select Date:</span>
                        <input 
                        type="date"
                        value={date}
                        onChange={(e) =>setDate(e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                        required
                         />
                    </label>
                    <button 
                    type="submit"
                    className="w-full bg-secondary text-white py-2 rounded-md 
                    hover:bg-green-600 transition">Proceed to Payment
                    </button>
                </form>
            </div>
        </div>
    )   
}

export default Booking;