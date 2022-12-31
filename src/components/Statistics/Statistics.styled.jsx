import styled from 'styled-components';

export const FeedbackList = styled.ul`
  font-size: ${p => p.theme.fontSizes.m};
  li:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
