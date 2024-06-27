import { useEffect, useRef } from 'react';
import Word from "./Word";
import styles from '../styles/Main.module.css'; 

const WordDisplay = ({typedText, handleInputChange, randomWords}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const renderWords = () => {
    if (randomWords) {
      return randomWords.map((char, index) => {
        let color;
        if (index < typedText.length) {
          color = char === typedText[index] ? 'correct' : 'incorrect';
        }
        return (
          <span key={index} className={styles[color]}>
            {char}
          </span>
        );
      });
      } else {
        return null; 
      }
  };

  return (
    <div>
      {renderWords()}
      <input
        ref={inputRef}
        type="text"
        value={typedText}
        onChange={handleInputChange}
        className={styles.hiddenInput}
      />
    </div>
  );
}

export default WordDisplay;
