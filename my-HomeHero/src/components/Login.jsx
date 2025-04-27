
import { auth, provider } from '../firebase/firebase';


function Login() {
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        try {
            await signIn();
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-primary mb-4">Login to HomeHero</h2>
                
                <button onClick={handleSignIn} className="w-full bg-secondary text-white py-2 rounded-md hover:bg-green-600 transition">
                    Sign in with Google
                </button>

            </div>
        </div>
    )
}
   

export default Login;