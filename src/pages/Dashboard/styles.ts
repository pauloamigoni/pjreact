import styled, { css } from 'styled-components';
import { shade } from 'polished';
interface FormProps{
    hasError: boolean;

}
export const Title = styled.h1`

    color: #3A3A3A;
    max-width: auto;
    line-height: 56px;
    margin-top: 20px;
    font-size: 28px;
    font-family: 'Press Start 2P', cursive;
    align-items: center;
    text-align: center;
`;


export const Form = styled.form<FormProps>`
margin-top: 20px;
max-width: 100%;
display: flex;

input {
    flex: 1;
    height:50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3A3A3A;
    border: 2px solid #FFFF;

    ${(props) => props.hasError && css `
        border-color: #c53030;
        border-right: 0;
    ` }
    &::placeholder{
        color: #a8a8b3;
    }
}
button{
    width: 210px;
    height:50px;
    border: 0;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    color: #FFFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
        background: ${shade(0.3,'#04D361')};
    }
}
`;

export const Error = styled.span`
display: block;
color: #c53030;
margin-top: 3px;
`;


export const Repositories = styled.div`
 margin-top: 40px;
 max-width: 100%;

 a{

     background: ${shade(0.05, '#FFF')};
     border-radius: 5px;
     width: 100%;
     padding: 8px;
     display: block;
     text-decoration: none;

     display: flex;
     align-items: center;
     transition: transform 0.2s;

      &:hover{
            transform: translateX(10px);
         }

        & + a {
            margin-top: 12px;
        }

     img{
         width: 64px;
         height: 64px;
         border-radius: 50%;
     }

     div {
         margin: 8px;
         flex: 1;

         strong{
            font-size: 16px;
            color: #3D3D4D;
         }
         p{
             font-size: 14px;
             color: #A8A8B3;
             margin-top: 4px;
         }
     }

      svg {
             margin-left: auto;
             color: #cbcbd6;
         }



 }
`;
