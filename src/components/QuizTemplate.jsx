import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import "../css/QuizTemplate.css";

const QuizTemplate = ({ allQuestion, index }) => {
  const { question, options, correctAnswer } = allQuestion;
  const [correctAns, setCorrectAns] = useState();
  console.log(correctAns);
  const handleCorrectAnswer = (e) => {
    if (correctAnswer === e.target.value) {
      toast.success("Right Answer", { autoClose: 1000 });
    } else {
      toast.error("Wrong Answer", { autoClose: 1000 });
    }
  };
  return (
    <>
      <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto my-8">
        <div className="card glass rounded-md bg-slate-200 hover:bg-slate-200">
          <div className="card-body">
            <div className="py-4 px-2 rounded-md bg-white bg-opacity-50 backdrop-blur-xl drop-shadow-lg">
              <div className="flex justify-end mr-5 text-2xl">
                <label
                  htmlFor="my-modal-3"
                  className="modal-button cursor-pointer"
                  onClick={() => setCorrectAns(correctAnswer)}
                >
                  <FaEye></FaEye>
                </label>
              </div>

              {/* -------- */}
              <div className="question">
                <h4 className="pb-4 font-bold">Question {index + 1}</h4>
                <h3 className="font-semibold">{question.slice(3,-4)}</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-6">
              {options.map((option) => (
                <label
                  onChange={handleCorrectAnswer}
                  value={option}
                  className="flex items-center text-left border-2 border-gray-300 rounded-md p-3 cursor-pointer hover:bg-white hover:bg-opacity-50 hover:backdrop-blur-xl hover:border-gray-400"
                >
                  <input
                    value={option}
                    type="radio"
                    name="radio-1"
                    className="radio mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-md relative">
          <label
            onClick={() => setCorrectAns(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Correct Answer</h3>
          <p className="py-4">{correctAns}</p>
        </div>
      </div>
    </>
  );
};

export default QuizTemplate;
