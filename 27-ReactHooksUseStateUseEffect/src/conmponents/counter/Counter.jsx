import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [customValue, setCustomValue] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByCustom = () => {
    setCount(count + Number(customValue));
  };

  const decrementByCustom = () => {
    setCount(count - Number(customValue));
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
      <>
      <div className={styles.counterBody}>
        <div className={styles.titleBoxes}><h1 className={styles.counterTitle}>COUNTER</h1> </div>   
      
      <div className={styles.counterDisplay}>
        <span className={styles.counterValue}>{count}</span>
      </div>
      
      <div className={styles.buttonGroup}>
        <button 
          className={`${styles.counterButton} ${styles.decrementButton}`} 
          onClick={decrement}
        >
          -
        </button>
        <button 
          className={`${styles.counterButton} ${styles.incrementButton}`} 
          onClick={increment}
        >
          +
        </button>
      </div>
      
      <button 
        className={`${styles.counterButton} ${styles.resetButton}`} 
        onClick={resetCounter}
      >
        Reset
      </button>
      
      <div className={styles.customControl}>
        <input
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          className={styles.customInput}
          min="1"
        />
        
        <div className={styles.customButtonGroup}>
          <button 
            className={`${styles.counterButton} ${styles.customDecrementButton}`} 
            onClick={decrementByCustom}
          >
            -{customValue}
          </button>
          <button 
            className={`${styles.counterButton} ${styles.customIncrementButton}`} 
            onClick={incrementByCustom}
          >
            +{customValue}
          </button>
        </div>
      </div>
    </div></>
  );
};

export default Counter;