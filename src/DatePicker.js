import React from "react";

function DatePicker(props) {
  return (
    <div>
      <p>
        Change date:{" "}
        <input
          type="date"
          value={props.date}
          onChange={props.handleDateChange}
        />
      </p>
    </div>
  );
}

export default DatePicker;
