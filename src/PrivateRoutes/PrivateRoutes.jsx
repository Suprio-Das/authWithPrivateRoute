import { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoutes;