import React from "react";

function Button({ clickHandler, isDisabled, children }) {
    return (
     <button
         type="button"
         onClick={clickHandler}
         disabled={isDisabled}
         >
         { children }
     </button>
    );
}
export default Button;