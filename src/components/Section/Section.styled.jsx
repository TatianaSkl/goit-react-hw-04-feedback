import styled from '@emotion/styled';

export const SectionBox = styled.section`
  padding-top: ${props => props.theme.spacing(10)};
`;
export const Heading = styled.h2`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
  text-shadow: 1px 1px 2px ${props => props.theme.colors.gray};

  margin-bottom: ${props => props.theme.spacing(5)};
`;
