import React from "react";

function DatePicker(props) {
  return (
    <div>
      <p>
        Change date:{" "}
        <input
          type="date"
          value={props.currentDate}
          onChange={props.handleDateChange}
        />
      </p>
    </div>
  );
}
