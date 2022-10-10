import React, { useContext } from "react";
import { TopicsContext } from "../Main";
import Header from "./Header";
import TopicCard from "./TopicCard";

const Home = () => {
  const topics = useContext(TopicsContext);
  return (
    <div className="container mx-auto">
      <Header></Header>
      <h2
        id="all-topic"
        className="font-semibold lg:text-5xl text-2xl pb-12 pt-5"
      >
        Web Development Quiz
      </h2>
      <div className="w-10/12 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-28">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic}></TopicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
