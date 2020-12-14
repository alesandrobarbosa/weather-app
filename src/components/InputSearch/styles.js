import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
`;

export const ContainerInput = styled.div `
  display: flex;
  margin: auto;
  width: 100%;
`;

export const Input = styled.input `
  width: 90%;
  padding: 20px;
  border: 1px solid #cccccc;
  border-radius: 30px 0px 0px 30px;
  outline: none;
`;

export const Button = styled.button `
  position: relative;
  background-color: #94a295;
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  padding: 0 40px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  outline: 0;
  border-radius: 0px 30px 30px 0px;
  &:after {
      content: "";
      background: #FFFFFF;
      display: block;
      position: absolute;
      padding-top: 300%;
      padding-left: 350%;
      margin-left: -40px!important;
      margin-top: -120%;
      opacity: 0;
      transition: all 0.8s
  }
  &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s
  }
`;

export const Image = styled.img `
  width: 20px;
`;