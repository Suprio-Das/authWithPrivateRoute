import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl font-bold">Sign-up now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignup} className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input" placeholder="Name" name="name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                <button type="submit" className="btn btn-neutral mt-4">Signup</button>
                            </form>
                            <p>Already an User? <Link to="/login" className="underline cursor-pointer">Login Now</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;