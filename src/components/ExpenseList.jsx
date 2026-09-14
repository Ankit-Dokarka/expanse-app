import { FiList } from "react-icons/fi";
import { useUserExpanse } from "../context/userExpanseContext";
import { useAuth } from "../context/AuthContext";

const ExpenseList = () => {
  const { expanses, setEditingExpense, handleDelete } = useUserExpanse();
  const { role } = useAuth();

  const handleEdit = (data) => {
    setEditingExpense(data);
  };

  return (
    role === "user" && (
      <div className=" max-w-350  mx-auto bg-[#FDFDFD] rounded-lg shadow-md  p-4  mt-6">
        <div className=" flex justify-between items-center">
          <div className="border-b-2 border-[#FD7D07] flex gap-2  items-center w-full pb-2">
            <FiList size={28} color="#FD7D07" />
            <p className="m-0 font-extrabold text-2xl">Expanse Table</p>
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
              <th className="w-25">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expanses?.map((data, index) => {
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
                  <th scope="row" className="flex gap-2">
                    <button
                      onClick={() => handleEdit(data)}
                      type="button"
                      className="btn btn-primary"
                    >
                      Edit
                    </button>{" "}
                    <button
                      onClick={() => handleDelete(data.id)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

export default ExpenseList;
