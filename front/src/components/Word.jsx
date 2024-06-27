import React from "react";

const Word = ({char, index, typedText}) => {
    let color;

    if(index < typedText.length) {
        color = char = typedText[index] ? 'correct' : 'incorrect';
    }

    return (
        <span key={index} className={style[color]}>
            {char}
        </span>
    );
};

export default Word;