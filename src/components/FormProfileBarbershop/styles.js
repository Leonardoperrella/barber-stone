import styled from "styled-components";
import { Checkbox, FormControlLabel } from "@material-ui/core"

export const SpanError = styled.span`
  font-size: 15px;
  color: red;
  text-align: center;
  margin:5px;
`;

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
`;

export const Label = styled.p`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 38px;
    color: #F7F4F3;
    margin: 15px 0 5px 0;
    width:100%;
`;

export const ButtonForm = styled.button`
    max-width: 416px;
    width:90vw;
    height: 63px;
    border: 4px solid #F7F4F3;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: transparent;
    margin-top:40px;
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
    align-items:center;
    flex-direction:column;
`

export const CardLogin = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export const CheckboxLazer = styled(Checkbox)`
    margin-right:20px;
`
export const ImgCheck = styled.img`
    margin-right:20px;
    border-radius:10px;
`
export const FormControl = styled(FormControlLabel)`
`
export const DivCheck = styled.div`
    width:100%;
    display: flex;
    justify-content: right;
    margin:5px auto;
`
export const LabelCheck = styled.span`
    font-family: "Bebas Neue",Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 38px;
    color: #F7F4F3;
`

