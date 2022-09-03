import React from "react";

const Home = () => {
  return (
    <>
      <div
        className=" text-white"
        style={{
          fontSize: "5rem",
          textAlign: "left",
          top: "10%",
          position: "absolute",
        }}
      >
        Let's make shopping
      </div>
      <div
        style={{
          fontSize: "2rem",
          textAlign: "left",
          position: "absolute",
          top: "27%",
          color: "white",
        }}
      >
        Go to the store to see the products.
      </div>
      <div className="home">
        <div className="balon"></div>
        <div className="balon"></div>
        <div className="balon"></div>
        <div className="balon"></div>
        <div className="balon"></div>
        <div className="balon"></div>
      </div>
    </>
  );
};

export default Home;
