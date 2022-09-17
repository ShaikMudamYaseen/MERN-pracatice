import React from "react";

const Footer = () => {
    const style={
        backgroundColor: "white",
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
  return (
    <div style={style}>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>
        copyright&copy; 2022
      </p>
    </div>
  );
};

export default Footer;
