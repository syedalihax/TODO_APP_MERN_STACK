import { Navigate } from "react-router-dom"

const isTokenExpired = (token) => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 < Date.now();
    } catch (error) {
        return true; 
    }
};

const Protected = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token || isTokenExpired(token)) {
        localStorage.removeItem('token');
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default Protected