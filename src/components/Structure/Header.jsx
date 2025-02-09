import React, { useState } from "react";

const Header = ({ data, changeUser }) => {
  //   const [username, setUsername] = useState("");
  //   if (!data) {
  //     setUsername("Admin");
  //   } else {
  //     setUsername(data.firstName);
  //   }
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    // console.log(changeUser);
    changeUser("");
  };
  return (
    <>
      {/* <div className="flex items-center justify-between">
        <h1>
          Hello <br />
          Manisha
        </h1>
        <button className="">Log Out</button>
      </div> */}
      <div className="flex items-end justify-between px-16 py-3">
        <h1 className="text-2xl font-medium">
          Hello <br />{" "}
          <span className="text-3xl font-semibold">username 👋</span>
        </h1>
        <button
          onClick={logoutUser}
          className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
