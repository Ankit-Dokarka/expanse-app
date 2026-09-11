import { useEffect, useState } from "react";

import { useUserExpanse } from "../context/userExpanseContext";
import { useForm } from "react-hook-form";
import { FaWallet, FaCrown, FaRupeeSign } from "react-icons/fa";
import {
  FiUser,
  FiUsers,
  FiFileText,
  FiPieChart,
  FiPlus,
} from "react-icons/fi";

const members = ["Ritik", "Neeraj", "Ankit", "Kunal"];

const ExpenseForm = ({ admin }) => {
  const { register, handleSubmit, reset } = useForm({});
  const { handleExpanse, editingExpense, setEditingExpense } = useUserExpanse();

  useEffect(() => {
    if (!editingExpense) {
      return;
    }

    reset({
      name: editingExpense.name,
      gender: editingExpense.gender,
      title: editingExpense.title,
      description: editingExpense.description,
      amount: editingExpense.amount,
      paidBy: editingExpense.paidBy,
      splitRule: editingExpense.splitRule,
    });
  }, [editingExpense]);

  const onSubmit = (data) => {
    handleExpanse(data);
    reset({
      name: "",
      gender: "",
      title: "",
      description: "",
      amount: "",
      paidBy: "",
      splitRule: "",
    });
  };
  return admin ? (
    <p>Welcom to admin page</p>
  ) : (
    <div className="max-w-350 mx-auto  bg-[#FDFDFD] rounded-lg shadow-md overflow-x-auto  p-4 ">
      {/* Title */}
      <div className="flex justify-center items-center gap-6 pb-2 mt-2 mb-2">
        <div className="h-12 w-12 rounded-4xl flex justify-center items-center bg-[#FD7D07]">
          <FaWallet color="white" size={24} />
        </div>
        <h2 className="font-bold text-mb">
          {editingExpense ? "Edit Expense" : "Add Expense"}
        </h2>
      </div>
      <form
        className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white  rounded-2xl shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <div className="flex gap-2 items-center mb-2">
            <FiUser size={20} color="#FD7D07" />
            <label className=" font-bold text-sm">Name</label>
          </div>
          <input
            className="border-2 outline-none border-amber-600 px-1 py-1 rounded-md"
            type="text"
            placeholder="Enter name"
            {...register("name")}
          />
        </div>
        <div>
          <div className="flex gap-2 items-center mb-2">
            <FiUsers size={20} color="#FD7D07" />
            <label className=" font-bold text-sm">Gender</label>
          </div>
          <div className="flex justify-start items-center gap-3">
            {["Male", "Female", "Other"].map((gender) => {
              return (
                <>
                  <input
                    type="radio"
                    name={gender}
                    value={gender}
                    {...register("gender")}
                    id={gender}
                  />
                  <label htmlFor={gender} className=" text-sm">
                    {gender}
                  </label>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2  mb-2">
          <div className="flex gap-2">
            <FaCrown size={20} color="#FD7D07" />
            <label className="font-bold text-sm">Title</label>
          </div>

          <input
            className="border-2 outline-none border-amber-600 px-1 py-1 rounded-md"
            type="text"
            placeholder="Example: Dinner"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
          <div className=" flex  gap-2 items-center">
            <FiFileText size={20} color="#FD7D07" />
            <label className="font-bold text-sm">Description</label>
          </div>

          <textarea
            className="border-2 outline-none border-amber-600 px-1 py-1 rounded-md"
            rows="4"
            placeholder="Enter description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-2  mb-2">
          <div className="flex gap-2">
            <FaRupeeSign size={20} color="#FD7D07" />
            <label className="font-bold text-sm">Amount</label>
          </div>

          <input
            className="border-2 outline-none border-amber-600 px-1 py-1 rounded-md"
            type="text"
            {...register("amount")}
          />
        </div>
        <div className="flex flex-col gap-2  mb-2 col-span-1 md:col-span-2">
          <div className="flex gap-2">
            <FiUser size={20} color="#FD7D07" />
            <label className="font-bold text-sm">Paid By</label>
          </div>
          <select
            className="border-2 outline-none border-amber-600 px-1 py-1 rounded-md"
            {...register("paidBy")}
          >
            <option value="">Select person</option>

            {members.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="flex gap-2 items-center mb-2">
            <FiPieChart size={20} color="#FD7D07" />
            <label className=" font-bold text-sm">Split Type</label>
          </div>
          <div className="flex justify-start items-center gap-4">
            {["Equal", "Percentage"].map((splitRule) => {
              return (
                <>
                  <input
                    id={splitRule}
                    type="radio"
                    name={splitRule}
                    value={splitRule}
                    {...register("splitRule")}
                  />
                  <label htmlFor={splitRule}> {splitRule}</label>
                </>
              );
            })}
          </div>
        </div>
        <button className="bg-[#FD7D07] flex justify-center items-center rounded-lg text-white gap-2 px-0.5 py-2 fw-bold">
          <FiPlus color="white" size={20} />
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
