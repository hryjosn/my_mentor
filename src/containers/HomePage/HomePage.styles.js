import styled from "@emotion/styled";

export const IssueContainer = styled.div`
  display: grid;
  padding: 2rem 5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  grid-gap: 1rem;
  height: 85%;
  box-sizing: border-box;
`

export const IssueItem = styled.div`
  border: 1px #c6c4c4 solid;
  border-radius: 10px;
  padding: 2rem 1rem;
  
`
export const IssueTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center; 

`
