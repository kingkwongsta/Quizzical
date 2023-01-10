import { useState } from "react";
import { nanoid } from "nanoid";
import blob_top from "../assets/blob-top.png";
import blob_bot from "../assets/blob-bottom.png";
import Options from "./options";

export default function Quiz(props) {
  // const [isSelected, setIsSelected] = useState(false);
  // function handleSelect() {
  //   setIsSelected((x) => !x);
  // }
  // // Variable to dynamically generate answer options
  // console.log("checking Quiz Options");
  // const styles = { backgroundColor: isSelected ? "#D6DBF5" : "transparent" };
  // const answerElements = props.options.map((x) => {
  //   return (
  //     <>
  //       <div className="quiz-options-container">
  //         <button
  //           key={nanoid()}
  //           className="quiz-button"
  //           style={styles}
  //           onClick={handleSelect}
  //         >
  //           {x}
  //         </button>
  //       </div>
  //     </>
  //   );
  // });
  return (
    <div className="quiz-container">
      <h3>the quiz page</h3>
      {/* <h2 className="quiz-question">{props.question}</h2>
      <div className="quiz-options">{answerElements}</div> */}
      <hr className="quiz-border" />
    </div>
  );
}
