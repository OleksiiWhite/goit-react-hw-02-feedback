import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);
  console.log(arr);
  return arr.map(a => {
    return (
      <button
        key={a}
        type="button"
        className={styles.optionBtn}
        name={a}
        onClick={onLeaveFeedback}
      >
        {a === 'good' ? 'good' : a === 'neutral' ? 'neutral' : 'bad'}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
