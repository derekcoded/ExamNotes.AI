import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCredits } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://examnotes-aiserver2.onrender.com", {
        credentials: "include",
      });

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await fetch("http://localhost:8000/api/user/currentuser", {
  //       credentials: "include",
  //     });

      const user = await res.json();

      dispatch(updateCredits(user.user.credits));
    };

    fetchUser();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>
      <p className="mt-2 text-gray-600">
        Credits added to your account
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg"
      >
        Go Home
      </button>
    </div>
  );
}

export default PaymentSuccess;