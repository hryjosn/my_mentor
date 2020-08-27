import styled from "@emotion/styled";

export const SignBackground = styled.div`
    background-image: url(/image/snowMountain_bg.jpg); 
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.7;
`
export const SignUpForm = styled.form`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SignUpContainer = styled.div`
    padding: 20px 30px;
    min-width: 80%;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.7)  ;
   
`
export const SignUpContent = styled.div` 
    text-align: center;
`
export const InputContainer = styled.div` 
    @media (min-width: 768px) {
        box-sizing: border-box;
        padding: 0 10rem;
    }
    
    @media (min-width: 1023px) {
        box-sizing: border-box;
        padding: 0 22rem;
    }
    margin: 70px 0;
`
export const InputDiv = styled.div` 
    margin: 20px 0;
`
export const BackButton = styled.div` 
    cursor: pointer;
`
export const SignUpDescription = styled.div` 
    font-size: 10px;
    color: gray;
`
export const PhoneInputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .PhoneInputCountryIcon{
    height:20px;
    width:32px;
  }
  input{
        min-width: 226px;
        height: 34px;
        border: none;
        border-bottom: 1px solid #999;
  }
  input:focus{
      outline: none;
  }
  .PhoneInput {
     width: 100%;
     --PhoneInputCountryFlag-borderColor: none;
     .PhoneInputInput {
       background: transparent;
    }
    
   }  
`;

