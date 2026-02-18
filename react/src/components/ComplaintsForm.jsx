import { useEffect, useState } from "react";

export default function ComplaintsForm(props) {
  const [verify, setVerify] = useState(false);
  const [pass, setPass] = useState("");

  async function getVerify() {
    const res = await fetch("http://localhost:3003/api/admin/login", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ password: pass }),
    });
    setVerify(res.status === 200);
  }

  return (
    <div>
      <form
        action=""
        className="border flex flex-col m-6 bg-white shadow-2xl rounded-[8px] border-gray-400 p-5 gap-9"
      >
        <h1 className="text-2xl font-bold self-center border-b border-gray-400">
          {props.textH1}{" "}
        </h1>
        <div className="self-center">
          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            id="pass"
            type="password"
            placeholder="password..."
            className="self-center min-w-3 border shadow-2xl  border-gray-400  rounded-[5px] h-9 hover:cursor-auto  focus:outline-green-500 "
          />
          <label className="self-center font-semibold" htmlFor="pass">
            {" "}
            :סיסמה
          </label>
        </div>

        <button
          className="border self-center border-green-600 bg-green-500 rounded-[5px] p-1.5 shadow hover:bg-green-600 font-semibold"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            getVerify();
          }}
        >
          התחברות 
        </button>
        {verify ? (
          <label className="self-center border p-3 border-green-500 rounded-[5px] bg-green-300 ">יש אישור כניסה</label>
        ) : (
          <label className="self-center border p-3 border-red-500 rounded-[5px] bg-red-300 ">אין אישור כניסה</label>
        )}
      </form>
    </div>
  );
}
