import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 24px 24px 8px 24px;
`
export const CalendarContainer = styled.div`
  margin: 0 8rem;
`
export const AccountTitle = styled.div`
  font-size: 1.375rem;
`
export const AccountSubtitle = styled.div`
  color: #5f6368;
  font-size: .875rem;
`
export const FormContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #dadce0;
  box-sizing: border-box;
  overflow: hidden;
  @media(min-width: 796px){
    margin: 0 6rem;
  }
`
export const InfoLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr; 
  padding: 16px 10px;
  border-bottom: 1px solid #dadce0;
  .label{
     display: flex;
     align-items: center;
  }
  .MuiInputBase-input{
     height: 0.8em;
  }
`
export const NameInfoLabel = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr; 
  padding: 16px 10px;
  border-bottom: 1px solid #dadce0;
  .label{
     display: flex;
     align-items: center;
  }
  .MuiInputBase-input{
     height: 0.8em;
  }
`
