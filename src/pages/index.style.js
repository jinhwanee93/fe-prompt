import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto';
    }
`;

export const GlobalPosition = styled.div`
    display: flex;
`;

export const GlobalContent = styled.div`
    width: 100%;
`;
