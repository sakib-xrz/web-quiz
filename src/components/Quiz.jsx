import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTemplate from "./QuizTemplate";

const Quiz = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;
  const { name, questions } = quiz;
  return (
    <div>
      <h1 className="text-4xl font-bold leading-none text-neutral mt-8">
        Quiz of {name}
      </h1>
      {questions.map((allQuestion) => (
        <QuizTemplate
          key={allQuestion.id}
          allQuestion={allQuestion}
        ></QuizTemplate>
      ))}
    </div>
  );
};

export default Quiz;
