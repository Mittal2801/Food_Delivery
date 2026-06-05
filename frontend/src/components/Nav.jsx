import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/login";

  };

  const [search, setSearch] = useState();

  return (
    <>
      <div className="grid grid-cols-2 mx-60">

        {/* LOGO */}
        <Link to="/home">
          <div className="text-4xl font-bold italic mt-5">
            zomato
          </div>
        </Link>

        {/* SEARCH BAR */}
        <div>
          <div className="w-full flex justify-center mt-5">

            <div className="flex items-center w-[1000px] bg-gray-100 rounded-xl px-4 py-3 shadow-sm border border-gray-200">

              <div className="flex items-center gap-2 pr-4 border-r border-gray-300">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>

                <span className="text-gray-700 font-medium">
                  Ahmedabad
                </span>

              </div>

              <div className="flex items-center gap-3 pl-4 w-full">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                  ></circle>

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.3-4.3"
                  ></path>
                </svg>

                <input
                  type="text" value={search} onChange={(e)=>setSearch(e.target.value)}
                  placeholder="Search for restaurant, cuisine or a dish"
                  className="w-full bg-transparent outline-none text-gray-600"
                />

              </div>

            </div>

          </div>
        </div>

        

      </div>

      {/* MENU */}
        <div className="flex items-center justify-center gap-5 pt-8">

          {!user ? (
            <>
              <Link to="/">
                <div className="text-gray-600">
                  Register
                </div>
              </Link>

              <Link to="/login">
                <div className="text-gray-600">
                  Login
                </div>
              </Link>
            </>
          ) : (
            <>
              <div className="text-green-600 font-semibold ms-10">
                {user.name}
              </div>

              <button
                onClick={handleLogout}
                className="text-red-500"
              >
                Logout
              </button>
            </>
          )}

          <Link to="/cart">
            <div className="text-gray-600">
              Cart
            </div>
          </Link>

          <Link to="/orders">
          <div className="font-light text-gray-500 ms-5">
            My Orders
          </div>
        </Link>

          {/* ADMIN PANEL */}
          {
          user?.role === "admin" && (

          <>
            <Link to="/add-food">
              <div className="ms-5">
                Add Food
              </div>
            </Link>

            <Link to="/admin/orders">
              <div className="ms-5">
                Orders
              </div>
            </Link>

            <Link to="/admin-dashboard">
              <div className="ms-5">
              Dashboard
              </div>
            </Link>
          </>

          )
          }

        </div>

      {/* BREADCRUMB */}
      <div className="mx-60 my-5">
        <Link to="/home">Home / </Link>
        <Link to='/locationinindia'>Location</Link>
        {" / "}
        Ahmedabad Restaurants
      </div>

      {/* MENU ITEMS */}
      <div className="flex mx-60 my-5">

        <Link to="/dinningout">
          <div className="flex">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
              alt=""
              className="w-[70px] bg-[#e5f3f3] p-3 rounded-full"
            />
            <div className="mt-3 px-5 text-xl">
              Dining Out
            </div>
          </div>
        </Link>

        <Link to="/delivery">
          <div className="flex mx-10">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
              alt=""
              className="w-[70px] bg-[#e5f3f3] p-3 rounded-full"
            />
            <div className="mt-3 px-5 text-xl">
              Delivery
            </div>
          </div>
        </Link>

        <Link to="/nightlife">
          <div className="flex mx-10">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
              alt=""
              className="w-[70px] bg-[#e5f3f3] p-3 rounded-full"
            />
            <div className="mt-3 px-5 text-xl">
              Nightlife
            </div>
          </div>
        </Link>

      </div>
    </>
  );
};

export default Nav;