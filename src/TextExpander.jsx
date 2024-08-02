import React, { useState } from "react";
import Texts from "./Texts";

function TextExpander({
  text,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded,
  className,
}) {
  return (
    <div>
      <Texts
        text={text}
        buttonColor={buttonColor}
        collapseButtonText={collapseButtonText}
        collapsedNumWords={collapsedNumWords}
        expandButtonText={expandButtonText}
        expanded={expanded}
        className={className}
      />
    </div>
  );
}

export default TextExpander;
