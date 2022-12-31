import styled from 'styled-components';

export const ButtonFeedback = styled.button`
  margin-right: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.radii.sm};
  border-color: ${p => p.theme.colors.border};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
`;
