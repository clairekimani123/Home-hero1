import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm() {
    const [providerName, setProviderName] = useState('');
    const [date, setDate] = useState('');
    const [bookings, setBookings] = useState('');
    const navigate= useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBooking = { providerName, date };

        const configObj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.strigify(newBooking),
        };

        try {
            const res = await fetch('http://localhost/3000/bookings', configObj);
            const data = await res.json();
            setBookings([...bookings, data]);
            setProviderName('');
            setDate('');
            alert('booking added succefully!');
            navigate('/profiles');
        } catch (error) {
            console.error('POST error:', error);

        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-4">Add a New</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="text-gray-700">Provider Name:</span>
                        <input 
                        type="text"
                        value={providerName} 
                        onChange={(e) => setProviderName(e.target.value)}
                        className="mt-1 w-full border border-gray-300 rounded-md p-2"
                        required
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Date:</span>
                        <input
                         type="date"
                         value={date}
                         onChange={(e) => setDate (e.target.value)}
                         className="w-full bg-secondary text-white py-2 rounded-md" 
                         required
                         />
                    </label>
                    <button
                     type="submit"
                     className="w-full bg-secondary text-white py-2 rounded-md hover:bg-green-600 transition">
                        Add Booking
                     </button>
                </form>

            </div>

        </div>
    )
}
export default BookingForm;