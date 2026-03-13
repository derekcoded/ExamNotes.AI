import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-red-600">
        Payment Failed ❌
      </h1>

      <p className="mt-2 text-gray-600">
        Something went wrong. Please try again.
      </p>

      <button
        onClick={() => navigate("/pricing")}
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}

export default PaymentFailed;