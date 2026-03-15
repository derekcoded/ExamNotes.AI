import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function Pricing() {
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [paying, setPaying] = useState(false);
  const [payingAmount, setPayingAmount] = useState(null);
  const handlePaying = async (amount) => {
    try {
      setPayingAmount(amount);
      setPaying(true);

      // call backend to create razorpay order
      // const res = await fetch(
      //   "http://localhost:8000/api/payment/create-order",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ amount }),
      //   },
      // );
      const res = await fetch(
        "https://examnotes-aiserver2.onrender.com/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials:"include",
          body: JSON.stringify({ amount }),
        },
      );

      const order = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        name: "ExamNotes.AI",
        description: "Buy Credits",

        handler: async function (response) {
          try {
            // const verifyRes = await fetch(
            //   "http://localhost:8000/api/payment/verify-payment",
            //   {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            const verifyRes = await fetch(
              "https://examnotes-aiserver2.onrender.com/api/payment/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  amount: amount,
                }),
              },
            );

            const data = await verifyRes.json();

            // if(data.success){
            //   alert("Payment Successful 🎉 Credits Added!")
            // } else {
            //   alert("Payment verified but credits not added")
            // }
            if (data.success) {
              // go to success page
              navigate("/payment-success");
            } else {
              // go to failed page
              navigate("/payment-failed");
            }
          } catch (error) {
            console.log(error);
          navigate("/payment-failed")
          }

          setPaying(false);
          setPayingAmount(null);
        },

        theme: {
          color: "#6366f1",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
      alert("Payment failed");
    } finally {
      setPaying(false);
      setPayingAmount(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 relative">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
      >
        ⬅️ Back
      </button>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold">Buy Credits</h1>
        <p className="text-gray-600 mt-2">
          Choose a plan that fits your study needs
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          title="starter"
          price="₹10"
          amount={10}
          credits="50 Credits"
          description="Perfect for quick revisions"
          features={[
            "Generate AI notes",
            "Exam-focused answers",
            "Diagrams & charts support",
            "Fast generation",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          paying={paying}
          payingAmount={payingAmount}
          onBuy={handlePaying}
        />
        <PricingCard
          popular
          title="popular"
          price="₹50"
          amount={50}
          credits="100 Credits"
          description="Best value for students"
          features={[
            "All Starter features",
            "More credits per ₹",
            "Revision mode access",
            "Priority AI response",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          paying={paying}
          payingAmount={payingAmount}
          onBuy={handlePaying}
        />
        <PricingCard
          title="Pro Learner"
          price="₹100"
          amount={100}
          credits="250 Credits"
          description="For serious exam preparation"
          features={[
            "Maximum credit value",
            "Unlimited revisions",
            "Charts & Diagrams",
            "Ideal for full syllabus",
          ]}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          paying={paying}
          payingAmount={payingAmount}
          onBuy={handlePaying}
        />
      </div>
    </div>
  );
}
function PricingCard({
  title,
  price,
  amount,
  credits,
  description,
  features,
  popular,
  selectedPrice,
  setSelectedPrice,
  onBuy,
  paying,
  payingAmount,
}) {
  const isSelected = selectedPrice === amount;
  const isPayingThisCard = paying && payingAmount === amount;
  return (
    <motion.div
      onClick={() => setSelectedPrice(amount)}
      whileHover={{ y: -4 }}
      className={`relative cursor-pointer
    rounded-xl p-6 bg-white
    border transition ${
      isSelected
        ? "border-black"
        : popular
          ? "border-indigo-500"
          : "border-gray-200"
    }
    `}
    >
      {popular && !isSelected && (
        <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded bg-indigo-600 text-white">
          Popular
        </span>
      )}
      {isSelected && (
        <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded bg-black text-white">
          Selected
        </span>
      )}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <div className="mt-4">
        <p className="text-3xl font-bold">{price}</p>
        <p className="text-sm text-indigo-600">{credits}</p>
      </div>
      <button
        disabled={isPayingThisCard}
        onClick={(e) => {
          e.stopPropagation();
          onBuy(amount);
        }}
        className={`w-full mt-5 py-2 rounded-lg font-medium transition
      ${
        isPayingThisCard
          ? "bg-gray-300 cursor-not-allowed"
          : isSelected
            ? "bg-black text-white"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
      }`}
      >
        {isPayingThisCard ? "Redirecting..." : "Buy Now"}
      </button>
      <ul className="mt-5 space-y-2 text-sm text-gray-600">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-green-600">✓</span>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
export default Pricing;
