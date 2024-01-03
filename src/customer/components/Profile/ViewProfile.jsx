import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ViewProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState();
  const [newData, setNewData] = useState({
    firstName: data?.firstName,
    lastName: data?.lastName,
  });
  const token = localStorage.getItem("authToken");
  const handleProfile = async () => {
    try {
      const user = await axios.get(`https://node-mongodb-api-4zq2.onrender.com/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(user.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleProfile();
  }, []);

  const handleEdit = async () => {
    setIsEditMode(!isEditMode);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const update_profile = async () => {
    try {
      const response = await axios.put(
        `https://node-mongodb-api-4zq2.onrender.com/api/users/profile/update`,
        newData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsEditMode(!isEditMode);
      handleProfile();
      toast.success("Profile update successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log("newData", newData);
  return (
    <>
      <div className="flex justify-center my-5">
        <div className="flex flex-col items-center border rounded-lg p-2 shadow-2xl">
          <div className="my-2">
            <h1 className="text-xl">Welcome {"Divyesh"}</h1>
          </div>
          <div>
            {/* <form action="" className="flex flex-col gap-4 p-3"> */}
            <div className="flex flex-col gap-4 p-3">
              <div className="flex gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="">First name</label>
                  {isEditMode ? (
                    <input
                      onChange={handleChange}
                      className="border p-3 rounded-lg"
                      type="text"
                      placeholder="fname"
                      name="firstName"
                      value={newData.firstName}
                    />
                  ) : (
                    <span className="border p-3 rounded-lg w-64">
                      {data?.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Last name</label>
                  {isEditMode ? (
                    <input
                      onChange={handleChange}
                      className="border p-3 rounded-lg"
                      type="text"
                      placeholder="fname"
                      name="lastName"
                      value={newData.lastName}
                    />
                  ) : (
                    <span className="border p-3 rounded-lg w-64">
                      {data?.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="">Email</label>
                <h1 className="border p-3">{data?.email}</h1>
              </div>
              <div>
                <label htmlFor="">Role</label>
                <h1 className="border p-3">{data?.role}</h1>
              </div>
              <div className="flex justify-center gap-5">
                {isEditMode ? (
                  <button
                    className="border px-3 py-2 rounded-lg bg-green-600 text-xl"
                    onClick={update_profile}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="border px-3 py-2 rounded-lg bg-red-600 text-xl"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
