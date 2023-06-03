import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <>
      {keys.map(key => (
        <Button key={key} onClick={() => onLeaveFeedback(key)}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </Button>
      ))}
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
