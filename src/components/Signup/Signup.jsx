import { Link } from "react-router";

const Signup = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col w-96">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl font-bold">Sign-up now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form className="fieldset">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input" placeholder="Name" name="email" />
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