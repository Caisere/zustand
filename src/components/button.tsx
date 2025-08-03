import React from "react";

type ButtonPropType = {
    children: React.ReactNode,
    onClick: () => void
}

const Button = ({onClick, children}: ButtonPropType) => {
    return <button onClick={onClick}>
        {children}
    </button>
};

export default Button;
