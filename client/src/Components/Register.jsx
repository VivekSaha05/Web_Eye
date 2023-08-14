import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    phno: "",
    email: "",
    rollno: "",
    year: "",
  });

  const navigate = useNavigate();

  const eventHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitHandler = async (req, res) => {
    const { fName, lName, phno, email, year, rollno } = user;
    if (fName && lName && phno && email && rollno && year) {
      try {
        const res = await axios.post("http://localhost:3001/form", user);
        alert(res.data.message)
        navigate("/")
      } catch (error) {
        alert("Some error occured");
        navigate("/register");
      }
    } else {
      alert("Please fill all fields");
      navigate("/register");
    }
  };

  return (
    <>
      <Navbar />
      <section class="bg-white dark:bg-gray-700">
        <div class="flex justify-center min-h-screen">
          <div class="event-register hidden lg:block lg:w-2/5"></div>
          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
              <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Register for the Event.
              </h1>
              <p class="mt-4 text-gray-500 dark:text-gray-400">Lorem Ipsum</p>
              <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    value={user.fName}
                    placeholder="Sushant"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={eventHandler}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    value={user.lName}
                    placeholder="Bishoi"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={eventHandler}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phno"
                    value={user.phno}
                    placeholder="XXX-XX-XXXX-XXX"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={eventHandler}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Official Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="skb@example.com"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={eventHandler}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Roll No
                  </label>
                  <input
                    type="text"
                    name="rollno"
                    value={user.rollno}
                    placeholder="21CSEXXX"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={eventHandler}
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Year
                  </label>
                  <input
                    type="text"
                    name="year"
                    value={user.year}
                    placeholder="3rd Year"
                    class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-purple-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    onChange={eventHandler}
                  />
                </div>
                <button
                  class="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-700 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50"
                  onClick={submitHandler}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
