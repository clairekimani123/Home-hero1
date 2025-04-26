import { Link } from 'react-router-dom';
import { useAuth } from '../firebase/firebase';
import React from 'react'

const Home = () => {
    const { user, signOutUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Welcome to HomeHero</h2>
        <p className="text-lg text-gray-600 mb-6">
            Connect with trusted house managers, babysitters, and urgent assistance proiders to balance your busy life
        </p>
            {user? (
                <Link
                to="/profiles"
                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                    View Providers
                </Link>
            ) : (
                <Link 
                to="/login"
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-green-600 transition">

                    Sign In to Start
                </Link>
            )
            }
        </div> 
    </div>
  );
}

export default Home;
