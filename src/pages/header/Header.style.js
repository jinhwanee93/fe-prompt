import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #55B4E5;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
`;

export const HeaderSearch = styled.input`
    background: transparent;
    border:none;
    color:white;
    font-family: 'Roboto'; // this is not working at the moment...
    font-size: 14px;
    outline: none;

    ::placeholder {
        color:white;
    }
`;

export const HeaderProfile = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 60px;
    width: 60px;
`;
