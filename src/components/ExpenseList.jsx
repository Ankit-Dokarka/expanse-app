import { FiList } from "react-icons/fi";
import { useUserExpanse } from "../context/userExpanseContext";
import { FaFolderOpen } from "react-icons/fa";

const ExpenseList = () => {
  const { expanses, setEditingExpense, handleDelete } = useUserExpanse();

  const handleEdit = (data) => {
    setEditingExpense(data);
  };

  return (
    <div className=" max-w-350 mx-auto bg-[#FDFDFD] rounded-lg shadow-md  p-4  mt-6 overflow-x-auto">
      <div className=" flex justify-between items-center">
        <div className="border-b-2 border-[#FD7D07] flex gap-2  items-center w-full pb-2">
          <FiList size={28} color="#FD7D07" />
          <p className="m-0 font-extrabold text-2xl">Expanse Table</p>
        </div>
      </div>
      {/* <div>
        <div className="flex h-10 w-full justify-evenly items-center gap-5 pr-2 pl-2 bg-[#fce4cd] mt-2 rounded-t-lg font-bold text-sm shadow-lg ">
          <div>#</div>
          <div>Name</div>
          <div>Title</div>
          <div>Description</div>
          <div>Gender</div>
          <div>Amount</div>
          <div>Paid By</div>
          <div>Split Rule</div>
          <div>Actions</div>
        </div>
        <div className="w-full border-2 border-[#fce4cd]  shadow-lg flex justify-center items-center flex-col p-5 ">
          <div>
            <FaFolderOpen size={24} color="#FD7D07" />
          </div>
          <p className="text-lg font-extrabold m-0 p-0">
            No expanses added yet.
          </p>
          <p className="text-xm font-semibold m-0 p-0">
            Add an expanse using the form above.
          </p>
        </div>
      </div> */}
      <table className="flex justify-center items-center pt-4 border-t-rounded-m">
        <thead className="bg-[#fce4cd]">
          <tr className="flex justify-center items-center gap-7 p-2">
            <th>#</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Gender</th>
            <th>Amount</th>
            <th>Paid By</th>
            <th>Split Rule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

    </div>
    // <div className="mt-5">
    //   <h2 className="mb-4">Expense Table</h2>
    //   <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">#</th>
    //         <th scope="col">Name</th>
    //         <th scope="col">Title</th>
    //         <th scope="col">Description</th>
    //         <th scope="col">Gender</th>
    //         <th scope="col">Amount</th>

    //         <th scope="col">Paid By</th>
    //         <th scope="col">Split Rule</th>
    //         <th scope="col">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {expanses?.map((data, index) => {
    //         return (
    //           <tr key={data.id}>
    //             <th scope="row">{index + 1}</th>
    //             <th scope="row">{data.name}</th>
    //             <th scope="row">{data.title}</th>
    //             <th scope="row">{data.description}</th>
    //             <th scope="row">{data.gender}</th>
    //             <th scope="row">{data.amount}</th>
    //             <th scope="row">{data.paidBy}</th>
    //             <th scope="row">{data.splitRule}</th>
    //             <th scope="row">
    //               <button
    //                 onClick={() => handleEdit(data)}
    //                 type="button"
    //                 className="btn btn-primary"
    //               >
    //                 Edit
    //               </button>{" "}
    //               <button
    //                 onClick={() => handleDelete(data.id)}
    //                 type="button"
    //                 className="btn btn-danger"
    //               >
    //                 Delete
    //               </button>
    //             </th>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default ExpenseList;
