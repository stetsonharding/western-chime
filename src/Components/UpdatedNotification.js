import React from "react";
import checkBoxIcon from "../Assets/checkBoxIcon.png";

let notificationContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  padding: "0",
  margin: "0",
};

let notifications = {
  padding: "0px",
  margin: "6px",
};

function UpdatedNotification(props) {
  return (
    <div style={notificationContainer}>
      <h3 style={notifications}>{props.notification}</h3>
      <img
        src={checkBoxIcon}
        alt="check box"
        height="22"
        width="22"
        style={{ paddingBottom: "10px" }}
      />
    </div>
  );
}

export default UpdatedNotification;
