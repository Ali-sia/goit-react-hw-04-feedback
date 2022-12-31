import PropTypes from 'prop-types';
import { ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onFeedback }) => {
  let optionsKeys = Object.keys(options);

  return (
    <>
      {optionsKeys.map(option => (
        <ButtonFeedback type="button" name={option} onClick={onFeedback}>
          {capitalizeFirstLetter(option)}
        </ButtonFeedback>
      ))}
    </>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default FeedbackOptions;

FeedbackOptions.prototypes = {
  onFeedback: PropTypes.func.isRequired,
};
