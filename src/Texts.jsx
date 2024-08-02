import React, { useState } from "react";

function Texts({
  text,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded = false,
}) {
  const buttonStyle = {
    color: buttonColor,
    border: "none",
    cursor: "pointer",
  };

  const [isCollapsed, setIsCollapsed] = useState(!expanded);

  const handleToggle = () => {
    setIsCollapsed((currState) => !currState);
  };

  const getDisplayText = () => {
    if (isCollapsed) {
      return text.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div>
      <div className="box">
        {getDisplayText()}
        <button style={buttonStyle} onClick={handleToggle}>
          {isCollapsed ? expandButtonText : collapseButtonText}
        </button>
      </div>
    </div>
  );
}

export default Texts;
