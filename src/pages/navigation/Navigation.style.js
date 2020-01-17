import styled from 'styled-components';

export const NavigationContainer = styled.div`
    background: #2B343D;
    width: 234px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const NavigationHeader = styled.div`
    background: #59A7CF;
    height: 60px;
    width: 100%;
    margin: 0 0 30px 0;
`;

export const NavigationButtonContainer = styled.div`
    padding: 0 0 30px 0;
`;

export const NavigationButton = styled.div`
    align-items: center;
    display: flex;
    color: #717785;
    height: 48px;
    padding: 0 24px;
    position: relative;
    cursor: pointer;

    p {
        margin: 0 0 0 24px;
    }

    &.active {
        background: white;
    }
`;

export const NavigationActive = styled.div`
    background: #59A7CF;
    width: 4px;
    height: 18px;
    position: absolute;
    right: 0;
`;