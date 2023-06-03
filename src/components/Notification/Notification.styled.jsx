import styled from '@emotion/styled';

export const Text = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;
