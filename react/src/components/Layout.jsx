import React from "react";
import { Link } from "react-router";

export default function Layout(props) {
  return (
    <div>
      <form
        action=""
        className="border flex flex-col m-6 bg-white shadow-2xl rounded-[8px] border-gray-400 p-5 gap-9"
      >
        <h1 className="text-2xl font-bold self-center border-b border-gray-400">
          {props.textH1}
        </h1>

        <label className="self-center font-semibold">
          כאן חיילים יכולים לשלוח תלונות באנונימיות
        </label>

        <Link
          className="border self-center border-green-600 bg-green-500 rounded-[5px] p-1.5 shadow hover:bg-green-600 font-semibold"
          to={props.link}
        >
          לשליחת תלונות {/*צריך להוסיף פה את הלינק הנכון */}
        </Link>
      </form>
    </div>
  );
}
