import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Sam");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const userExists = JSON.parse(localStorage.getItem("user"));
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (!userExists) {
      navigate("/");
    } else {
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Evening");
      }

      setUsername(userExists.username);
    }
  }, []);

  return (
    <main className="mx-auto max-w-7xl p-4 ">
      <div className="h-[90vh] justify-center items-center flex flex-col space-y-16 md:space-y-24">
        <h1 className="text-4xl font-bold text-violet-700 leading-relaxed text-center">
          {greeting} Rescuer! <br /> How are you doing today {username}?
        </h1>
        <Link to="/create">
          <button className="p-4 rounded-lg text-xl font-semibold text-white bg-blue-500 transition hover:scale-105 duration-200">
            Create New Ticket
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
