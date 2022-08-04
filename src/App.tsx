import { useState } from "react";
import "./App.css";
import Icon from "../public/icon.svg";

function ContentCard({ key }: { key: number }) {
  return (
    <div
      key={key}
      className="text-center mt-10 text-white border-2 rounded-md w-[400px] mx-auto py-4 bg-slate-900"
    >
      <p>Content</p>
      <a className="cursor-pointer underline">Link</a>
    </div>
  );
}
const cards = [...Array(50)].map((val, index) => <ContentCard key={index} />);

function App() {
  return (
    <>
      <div className="absolute z-20 w-full flex flex-col justify-center align-middle pb-16">
        <h1 className="text-center mt-32 mb-[100px] font-bold text-white heading">
          Vapor Wave
        </h1>
        <img
          src="/icon.png"
          alt="vaporwave icon"
          className="max-w-[300px] mx-auto"
        />
        {cards}
      </div>
      <div className="h-[200px] bg-gradient-to-b bg-slate-900"></div>
      <div className="h-[300px] bg-gradient-to-b from-slate-900 to-fuchsia-400"></div>
      <div className="h-[50px] bg-gradient-to-b from-fuchsia-400 to-cyan-300"></div>
      <div
        style={{
          transform: "perspective(200px) rotateX(40deg)",
        }}
        className="relative top-[-210px]"
      >
        <div className="h-[650px] w-[300%] translate-x-[-50%] floor-bg">
          <div className="floor"></div>
        </div>
      </div>
    </>
  );
}

export default App;
