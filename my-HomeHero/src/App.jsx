import { Routes,Route, Navigate, Link } from 'react-router-dom';
import { useAuth } from './firebase/firebase';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Profiles from './components/Profiles.jsx';
import Booking from './components/Booking.jsx';
import Payment from './components/Payment.jsx';
import BookingForm from './components/BookingForm.jsx';
import './index.css'



function App() {
  const {user, loading } = useAuth();

  if (loading) return  <div className="flex justify-center items-center h-screen text-blue-600">Loading...</div>

  if (user && window.location.pathname === '/login') {
    return <Navigate to="/profiles" />
  }
  

  return (
    <div className='min-h-screen bg-gray-100 '>
      <nav className="bg-primary text-white p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-b0ld">HomeHero</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          {user ? (
            <>
            <Link to="/profiles"
            className="hover:underline">Providers</Link>
            <Link to="/add-bokking" className="hover:underline">Add Booking</Link>
            <button
            onClick={() => useAuth().signOutUser()} className="bg-secondary text-white px-4 py-2 rounded-md
            hover:bg-green-600 transition">Sign Out</button>
            </>
          ) :(
            <Link to="/login" className="hover:underli">Sign In</Link>

          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={user ? <Profiles />:
        <Navigate to="/login" />} />
        <Route path="/booking/:id" element={user ? <Booking />:
        <Navigate to="/login" />} />

        <Route path="/" element={user ? <Payment />:
        <Navigate to="/login" />}  />

        <Route path="/" element={user ? <BookingForm />:
        <Navigate to="/login" />}  />
      </Routes>
     
     
      
    </div>
  );
}

export default App
