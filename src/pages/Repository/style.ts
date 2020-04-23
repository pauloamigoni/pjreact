import  styled from "styled-components";
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;


    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
         &:hover{
             color: #666;
         }
    }


    svg{
        margin-right: 4px;
    }
`;

export const RespositporyInfo = styled.section`
margin-top: 40px;


header{
    display: flex;
    align-items: center;
    font-family: 'Days One', cursive;


    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }

    div{
        margin-left: 40px;

        strong{
            font-size: 18px;
            color: #3d3d4d;
        }
        p{
            font-size: 16px;
            color: #737380;
            margin-top: 4px;
        }
    }


}

ul{
    display: flex;
    list-style: none;
    margin-top: 30px;
    align-items: center;
    text-align: center;

    li{

        & + li {
            margin-left: 120px;
        }
        strong {
            display: block;
            font-size: 26px;
            color: #3d3d4d;
        }

         span {
            display: block;
            margin-top: 4px;
            color: #6c6c80;
        }


    }
}

`;



export const Issues = styled.div`
 margin-top: 40px;

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



     div {
         margin: 8px;
         flex: 1;

         strong{
            font-size: 14px;
            color: #3D3D4D;
         }
         p{
             font-size: 12px;
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
