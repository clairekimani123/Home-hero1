import { Link } from 'react-router-dom';
import { useAuth } from '../firebase/firebase';
import React from 'react'

const Home = () => {
    const { user, signOutUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
        <header className="bg-primary text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl fon-bold">HomeHero</h1>
            {user? (
                <button onClick={signOutUser} className="bg-secondary ext-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                    Sign Out
                </button>
            ) : (
                <Link 
                to="/login"
                className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                    Sign In
                </Link>
            )
            }

        </header>
        <section className="text-center py-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Welcome to HomeHero</h2>
            <p className="text-lg text-gray-600 mb-6">Connect with trusted house managers, babysitters, and urgent assistance 
                providers to balance your busy life</p>
                <Link
                to="/profiles"
                className="bg-secondary text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                    View Providers
                </Link>

        </section>
      
    </div>
  )
}

export default Home;
