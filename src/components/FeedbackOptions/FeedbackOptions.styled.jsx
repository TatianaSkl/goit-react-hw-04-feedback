import styled from '@emotion/styled';

export const Button = styled.button`
  margin-right: 10px;
  padding: 10px;
  overflow: hidden;
  border-radius: 10px;

  box-shadow: ${props => props.theme.shadows.medium};

  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};
  font-weight: 600;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    background-color: ${props => props.theme.colors.accent};
  }
`;
