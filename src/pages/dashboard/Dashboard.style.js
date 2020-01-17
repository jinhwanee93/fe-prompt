import styled from 'styled-components';

export const DashboardContainer = styled.div`
    background: #F1F4F9;
    padding: 30px;
`;

export const DashboardTitleContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 0 30px 0; 
    
`;

export const DashboardTitle = styled.div`
    color: grey;
    font-size: 24px;
`;

export const DashboardSub = styled.div`
    color: #C6C9CE;
    font-size: 14px;
`;

export const DashboardButton = styled.button`
    background: #55B4E5;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-family: 'Times';
    font-size: 14px;
    padding: 12px;
    outline: none;
`;

export const DashboardBox = styled.div`
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);
    padding: 34px;
`;

export const DashboardLabel = styled.div`
    color: black;
    display: inline-block;
    font-size: 24px;
`;

export const DashboardSubLabel = styled.div`
    color: #C6C9CE;
    display: inline-block;
    font-size: 14px;
    margin: 0 18px;
`;

export const DashboardLabelContainer = styled.div`
    padding: 0 0 30px 0;

    &.graph-label {
        display: flex;
        justify-content: space-between;
    }
`;

export const DashboardNumberContainer = styled.div`
    border-bottom: 1px solid rgb(225, 225, 225);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 30px; 
`;

export const DashboardInt = styled.div`
    text-align: center;
    width: 100%;
    border-left: 1px solid rgb(225, 225, 225);

    h2 {
        font-size: 30px;
        margin: 14px 0;
    }

    p {
        color: #C6C9CE;
        font-size: 14px;
    }

    &:first-child{ 
        border: none;
    }
`;

export const DashboardGraphContainer = styled.div`
    border-bottom: 1px solid rgb(225, 225, 225);
    padding: 30px 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const DashboardGraphInner = styled.div`
    width: 100%;
    margin: 0 100px 0 0;

    &:last-child {
        margin: 0;
    }
`;

export const DashboardGraphFilter = styled.button`
    height: 30px;
    border-radius: 4px;
    border: 2px solid rgb(225, 225, 225);
    color: rgb(225, 225, 225);
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 6px 0 0;
    padding: 0 14px;

    &:last-child {
        margin: 0;
    }

    &.active {
        background: #5CCC98;
        border: none;
        color: white;
    }

    &.filter {
        background: #55B4E5;
        border: none;
        color: white;
    }
`;

export const DashboardGraph = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 330px;
    width: 100%;

    &.graph-02 {
        height: 260px;
    }
`;

export const DashboardGraph02Info = styled.div`
    display: flex;
    justify-content: space-between;
`;
