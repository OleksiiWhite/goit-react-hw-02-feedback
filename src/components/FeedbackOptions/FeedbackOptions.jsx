import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(a => {
    console.log(options);
    return (
      <button
        key={a}
        type="button"
        className={styles.optionBtn}
        name={a}
        onClick={onLeaveFeedback}
      >
        {a}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
