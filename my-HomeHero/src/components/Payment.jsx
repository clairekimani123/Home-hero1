import { useSatate, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// the reason for using useParams is because it returns a dynamic parameter of the URL that thre ser is currently on eg in our case the id's of each providers
function Payment() {
    const { id } = useParams();
    const [provider, setProvider] = useSatate(null);
    const [phone, setPhone] = useSatate('');
    const [amount, setAmount] = useSatate(100);

    //we gonna use useEffect to fetch  data
    useEffect(() => {
        fetch('http://localhost:3000/providers/${id}')
        .then((res) => res.json())
        .then((data) => setProvider(data))
        .catch((error) => console.error('Fetch error:', error));
    },[id]);
    
    const handlePayment = (e) => {
        e.preventDefault();
        console.log(`Mock M-Pesa Payment: Phone=${phone}, Amount=${amount}, Provider=${provider.name}`);
        alert('Mock M-Pesa payment initiated!');

    };

    if(!provider) return <div className="flex justfiy-center items-center h-screen text-blue-600">Loaing...</div>;


    return (
        <div className="min-h=screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-4">Pay for {provider.name}</h2>

                <form onSubmit={handlePayment} className="space-y-4">
                <label className="block">
                <span className="text-gray-700">Phone Number (+2547xxxxxxxx):</span>
                <input 
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+2547xxxxxxxx" 
                className="mt-1 w-full border border-gray-300 rounded-md p-2"
                required
                />
                </label>
                <button
                type="submit" className="w-full bg-secondary text-white py-2 rounded-md hover:bg-green-600 transition"
                >Pay with M-Pesa</button>
                </form>
            </div>
        </div>
    )
}

export default Payment;