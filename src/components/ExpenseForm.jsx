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

const ExpenseForm = () => {
  const { register, handleSubmit, reset } = useForm({});
  const { handleExpanse, editingExpense, setEditingExpense } = useUserExpanse();

  useEffect(() => {
    if (!editingExpense) {
      return;
    }

    setName(editingExpense.name);
    setGender(editingExpense.gender);
    setTitle(editingExpense.title);
    setDescription(editingExpense.description);
    setAmount(editingExpense.amount);
    setPaidBy(editingExpense.paidBy);
    setSplitRule(editingExpense.splitRule);
  }, [editingExpense]);

  const onSubmit = (data) => {
    console.log(data);
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
  return (
    <div className="max-w-350 mx-auto  bg-[#FDFDFD] rounded-lg shadow-md  p-4 ">
      {/* Title */}
      <div className="flex justify-content-center align-items-center gap-6 pb-2 mt-2 mb-2">
        <div className="h-12 w-12 rounded-4xl flex justify-content-center align-items-center bg-[#FD7D07]">
          {" "}
          <FaWallet color="white" size={24} />
        </div>
        <h2 className="fw-bold text-sm">
          {" "}
          {editingExpense ? "Edit Expense" : "Add Expense"}
        </h2>
      </div>
      <form
        className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white  rounded-2xl shadow-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <div className="flex gap-2 align-items-center mb-2">
            <FiUser size={20} color="#FD7D07" />
            <label className=" fw-bold text-sm">Name</label>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            {...register("name")}
          />
        </div>
        <div>
          <div className="flex gap-2 align-items-center mb-2">
            <FiUsers size={20} color="#FD7D07" />
            <label className=" fw-bold text-sm">Gender</label>
          </div>
          <div className="flex justify-content-start items-center gap-3">
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
            <label className="fw-bold text-sm">Title</label>
          </div>

          <input
            type="text"
            className="form-control"
            placeholder="Example: Dinner"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
          <div className=" flex  gap-2 items-center">
            <FiFileText size={20} color="#FD7D07" />
            <label className="fw-bold text-sm">Description</label>
          </div>

          <textarea
            className="form-control h-100"
            rows="4"
            placeholder="Enter description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col gap-2  mb-2">
          <div className="flex gap-2">
            <FaRupeeSign size={20} color="#FD7D07" />
            <label className="fw-bold text-sm">Amount</label>
          </div>

          <input type="text" className="form-control" {...register("amount")} />
        </div>
        <div className="flex flex-col gap-2  mb-2 col-span-1 md:col-span-2">
          <div className="flex gap-2">
            <FiUser size={20} color="#FD7D07" />
            <label className="fw-bold text-sm">Paid By</label>
          </div>
          <select className="form-select" {...register("paidBy")}>
            <option value="">Select person</option>

            {members.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="flex gap-2 align-items-center mb-2">
            <FiPieChart size={20} color="#FD7D07" />
            <label className=" fw-bold text-sm">Split Type</label>
          </div>
          <div className="flex justify-content-start items-center gap-4">
            {["Equal", "Percentage"].map((splitType) => {
              return (
                <>
                  <input
                    type="radio"
                    name={splitType}
                    value={splitType}
                    {...register("gender")}
                  />
                  <label className="form-check-label"> {splitType}</label>
                </>
              );
            })}
          </div>
        </div>
        <button className="bg-[#FD7D07] flex justify-center items-center rounded-lg! text-white gap-2 px-1 py-3 fw-bold">
          <FiPlus color="white" size={20} />
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
