import PropTypes from 'prop-types';
import { SectionBox, Heading } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      {title && <Heading>{title}</Heading>}
      {children}
    </SectionBox>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
