import PropTypes from 'prop-types';
import { FeedbackList } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <FeedbackList>
      <li> Good: {good}</li>
      <li> Neutral: {neutral}</li>
      <li> Bad: {bad}</li>

      <li>Total: {total}</li>
      <li>Positise feedback: {positivePercentage}%</li>
    </FeedbackList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
