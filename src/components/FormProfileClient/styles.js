import styled from "styled-components";

export const SpanError = styled.span`
  font-size: 15px;
  color: red;
  text-align: center;
  margin:5px;
`;

export const FormUpdate = styled.form`
    max-width: 923px;
    width: 100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
`

export const Input = styled.input`
    max-width: 416px;
    width:90vw;
    height: 63px;
    border: 4px solid #F7F4F3;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: transparent;
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    padding:5px;
    font-size: 20px;
    line-height: 38px;
    color: #F7F4F3;
    margin: 0 20px;
    
    @media(min-width: 914px) {
        max-width: ${props => (props.isDesktop ? `873px` : `416px`)};
    }
`;

export const Label = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 38px;
    color: #F7F4F3;
    margin: 15px 20px 5px 20px;
`;

export const ButtonForm = styled.button`
    max-width: 416px;
    width:90vw;
    height: 63px;
    border: 4px solid #F7F4F3;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: transparent;
    margin:40px 20px 0 20px;
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 38px;
    color: #F7F4F3;
    &:hover{
        background-color:white;
        color:black;
        cursor:pointer;
    }
`;

export const DivInput = styled.div`
    display:flex;
    justify-content:center;
    align-items:left;
    flex-direction:column;
`

export const CardLogin = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

