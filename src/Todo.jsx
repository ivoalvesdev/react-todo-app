import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Todo({ text }) {
  const [show, setShow] = useState(true);
  const [opacity, setOpacity] = useState("100");

  return (
    show && (
      <div
        className={`text-xl p-4 bg-slate-800 rounded-xl mb-4 flex gap-4 justify-between transition-all flex-wrap opacity-${opacity}
        hover:translate-y-[-3px]`}
      >
        <p className={`${opacity === "50" ? "line-through" : ""}`}>{text}</p>
        <div className="flex gap-4">
          <button
            className="text-3xl text-teal-500"
            onClick={() =>
              opacity === "100" ? setOpacity("50") : setOpacity("100")
            }
          >
            <FaCheckCircle />
          </button>
          <button
            className="text-3xl text-teal-600"
            onClick={(e) => {
              e.target.parentElement.parentElement.parentElement.style.transition =
                "all 150ms ease";
              e.target.parentElement.parentElement.parentElement.style.transform =
                "scale(0)";
              setTimeout(() => {
                setShow(!show);
              }, 150);
            }}
          >
            <FaTimesCircle />
          </button>
        </div>
      </div>
    )
  );
}
