import { useState } from "react";
import { FiList } from "react-icons/fi";

export const Admin = () => {
  const data = JSON.parse(localStorage.getItem("usersData")) || {};
  const [users, setUsers] = useState(() => {
    if (data) {
      return Object.keys(data);
    } else {
      return {};
    }
  });
  const [expanse, setExpanse] = useState([]);

  const handleDropDown = (value) => {
    if (!value) {
      setExpanse([]);
    }
    setExpanse(data[value].expanses);
  };

  return (
    <div className="">
      <div>
        <select
          className="border-2 outline-none border-amber-600 px-1 py-1 rounded-md"
          onChange={(e) => handleDropDown(e.target.value)}
        >
          <option value="">Select person</option>

          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>
      <div className=" max-w-350  mx-auto bg-[#FDFDFD] rounded-lg shadow-md  p-4  mt-6">
        <div className=" flex justify-between items-center">
          <div className="border-b-2 border-[#FD7D07] flex gap-2  items-center justify-between  w-full pb-2">
            <div className="flex justify-center items-center gap-2">
              <FiList size={28} color="#FD7D07" />
              <p className="m-0 font-extrabold text-2xl">Expanse Table</p>
            </div>

            <div>{`Total = ${expanse.reduce((acc, cuu) => {
              return (acc += cuu.amount);
            }, 0)}`}</div>
          </div>
        </div>

        <table className="flex justify-center items-center flex-col pt-3 overflow-x-auto">
          <thead className="bg-[#fce4cd] rounded-t-lg">
            <tr className="flex justify-center items-center gap-7 p-2">
              <th className="w-25">#</th>
              <th className="w-25">Name</th>
              <th className="w-25">Title</th>
              <th className="w-25">Description</th>
              <th className="w-25">Gender</th>
              <th className="w-25">Amount</th>
              <th className="w-25">Paid By</th>
              <th className="w-25">Split Rule</th>
            </tr>
          </thead>
          <tbody>
            {expanse?.map((data, index) => {
              return (
                <tr
                  key={data.id}
                  className="flex justify-center items-center gap-7 p-2  w-full"
                >
                  <th scope="row" className="w-25">
                    {index + 1}
                  </th>
                  <th scope="row" className="w-25">
                    {data.name}
                  </th>
                  <th scope="row" className="w-25">
                    {data.title}
                  </th>
                  <th scope="row" className="w-25">
                    {data.description}
                  </th>
                  <th scope="row" className="w-25">
                    {data.gender}
                  </th>
                  <th scope="row" className="w-25">
                    {data.amount}
                  </th>
                  <th scope="row" className="w-25">
                    {data.paidBy}
                  </th>
                  <th scope="row" className="w-25">
                    {data.splitRule}
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
