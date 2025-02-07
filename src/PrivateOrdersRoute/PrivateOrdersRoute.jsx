import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";
import { Navigate } from "react-router";

const PrivateOrdersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>;
    }
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateOrdersRoute;