import { useForm } from "react-hook-form";

export const Register = () =>{
    const { handleSubmit,register } = useForm();
    const data = JSON.parse(localStorage.getItem("usersData"));
    let usersData = data ? data : {};

    const onSubmit = (data) => {
       if(usersData[data.email]){
         alert("User already exists");
       }else{
          usersData[data.email] = data;
          localStorage.setItem("usersData", JSON.stringify(usersData));
       }
    }
    return (
        <div className="w-100  p-2 bg-white shadow-lg rounded-md">
            <h2 className="text-xl font-bold text-center">Register</h2>
            <form action="" className="flex justify-center flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input className="border-2" type="text" id="name" {...register("name")} />
                <label htmlFor="email">Email</label>
                <input className="border-2" type="email" id="email" {...register("email")} />
                <label htmlFor="password">Password</label>
                <input className="border-2" type="password" id="password" {...register("password")}      />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input className="border-2" type="password" id="confirmPassword" {...register("confirmPassword")} />
                <button type="submit" className="bg-[#FEF1DF] p-2 text-center rounded-md cursor-pointer">Register</button>
            </form>
        </div>
    )
}