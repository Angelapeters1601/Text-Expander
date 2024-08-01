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

{
  /* <div className="box">
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </div>
      <div className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </div> */
}
