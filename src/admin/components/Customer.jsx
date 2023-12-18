import axios from "axios";
import React, { useEffect, useState } from "react";

const Customer = () => {
  const [user, setUser] = useState([]);

  const handleUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/users");
      setUser(response.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <>
      <div className="flex flex-col p-3 shadow-2xl space-y-5">
        <div className="text-3xl">All Customer</div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-2 text-start">Id</th>
                <th className="py-3 text-start">FirstName</th>
                <th className="py-3 text-start">Email</th>
                <th className="py-3 text-start">Role</th>
                <th className="py-3 text-start">createdAt</th>
              </tr>
            </thead>
            <tbody>
              {user.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-2 text-start">{item._id}</td>
                  <td className="py-2  text-start">{item.firstName}</td>
                  <td className="py-2  text-start">{item.email}</td>
                  <td className="py-2  text-start">{item.role}</td>
                  <td className="py-2  text-start">{item.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customer;
