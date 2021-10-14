import styled from "styled-components";

export const Container = styled.div`

background-color: #3D3F43;
border-radius: 10px;
padding: 10px;

img { 
 max-width: 100%;
 display: block;
 margin-bottom: 10px;
 border-radius: 10px;

}
input{
 margin: 10px 10px;
}
button{
 margin:10px;
 padding: 5px 5px;
 font-weight: bold;
 background-color: #d32f2f;
 color : #FFF;
 border-radius: 10px;
 &:hover{
  background-color: #9c27b0;
 }
 
}
`;