import { Link } from 'react-router-dom';

export default function Navbar() {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Feed</Link>
        {token && <Link to="/upload" className="hover:underline">Upload</Link>}
      </div>
      <div>
        {token ? (
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
        ) : (
          <>
            <Link to="/login" className="mr-4 hover:underline">Login</Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
