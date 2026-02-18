import React from "react";

export default function Header(props) {
  return (
    <div className="text-4xl font-bold flex justify-center p-2.5 bg-gray-400 border-b  border-b-gray-400">
      <header> {props.title} </header>
    </div>
  );
}
