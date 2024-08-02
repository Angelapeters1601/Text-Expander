import React, { useState } from "react";
import Texts from "./Texts";

function TextExpander({
  text,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded,
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
      />
    </div>
  );
}

export default TextExpander;
