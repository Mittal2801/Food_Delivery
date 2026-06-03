import { Link } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="flex gap-5">

        <Link to="/add-food">
          <button className="bg-green-600 text-white px-6 py-3 rounded">
            Add Food
          </button>
        </Link>

        <Link to="/foods">
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Manage Foods
          </button>
        </Link>

      </div>

    </div>
  );
}

export default AdminPanel;