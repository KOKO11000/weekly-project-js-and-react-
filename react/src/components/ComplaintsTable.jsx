import React, { useEffect, useState } from "react";

export default function ComplaintsTable(props) {
  const [verify, setVerify] = useState(false);
  const [complaint, setComplaint] = useState("");
  const [message, setmessage] = useState("");
const handleComplaintChange =(e)=>{
    setComplaint(e.target.value)
}
const handleMessageChange =(e)=>{
    setmessage(e.target.value)
}
 const getVerify = async()=> {
    
    console.log(verify);
    
    const res = await fetch("http://localhost:3003/api/complaints", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ complaint,message }),
    });
    setVerify(res.status === 200);
    console.log(verify);
    
  }


  return (
    <div>
      <form
        action=""
        method="post"
        className="border flex flex-col m-6 bg-white shadow-2xl rounded-[8px] border-gray-400 p-5 gap-9"
      >
        <h1 className="text-2xl font-bold self-center border-b border-gray-400">
          {props.textH1}
        </h1>
        <div className="self-end">
          <select  onChange={handleMessageChange}className="border " name="complaints" id="complaint-field">
            <option value="אוכל">אוכל</option>
            <option value="שינה">שינה</option>
            <option value="תש">ת"ש</option>
            <option value="מפקדים">מפקדים</option>
            <option value="מסדר">מסדר</option>
            <option value="ניקיון">ניקיון</option>
            <option value="אחר">אחר</option>
          </select>
          <label htmlFor="complaint-field"> :תחום תלונה</label>
        </div>
        <label htmlFor="contect-label" className="self-end">
          {" "}
          :תוכן התלונה
        </label>
        <textarea onChange={handleComplaintChange}
          rows={2}
          type="text"
          name="complaints"
          id="contect-field"
          placeholder="Write Your Complaint..."
          className="border-2 field-sizing-content row-auto"
        ></textarea>
        <button 
          className="border self-center border-green-600 bg-green-500 rounded-[5px] p-1.5 shadow hover:bg-green-600 font-semibold"
          type="submit"
          
          onClick={getVerify}
        >
          שליחה {/*צריך להוסיף פה את הלינק הנכון */}
        </button>
        {verify ? (
          <label className="self-center border p-3 border-green-500 rounded-[5px] bg-green-300 ">
            התלונה נשלחה בהצלחה
          </label>
        ) : (
          <label className="self-center border p-3 border-red-500 rounded-[5px] bg-red-300 ">
            יש בעיה בשליחה של התלונה{" "}
          </label>
        )}
        {/* ככה עושים הודעה מוחבאת שכאשר true היא מוצגת*/}
      </form>
    </div>
  );
}
