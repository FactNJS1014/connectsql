"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("./api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <div className="shadow-md rounded-md p-10 max-h-[400px] mt-5 border border-blue-500 max-w-[300px] overflow-y-auto">
        <h1 className="font-bold text-2xl text-center underline">Data List</h1>
        <ul className="mt-5 text-center">
          {users.map((user) => (
            <li key={user.PRO_ID} className="text-red-500 font-bold text-[20px]">{user.PRO_NAME}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
