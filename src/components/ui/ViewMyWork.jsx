import { Link } from 'react-router-dom';

const ViewWorkButton = () => {
  return (
    <Link to="/resume">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-transform hover:scale-105 shadow-lg">
        View My Work
      </button>
    </Link>
  );
};

export default ViewWorkButton;