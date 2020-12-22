import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
`

export const VideoContainer = styled.div`
 position: relative;
  flex:1;
  margin: 20px;
  border-radius: 20px;
  max-width: 100%;
  width: auto;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  transform: rotateY(180deg);
  -webkit-transform:rotateY(180deg); /* Safari and Chrome */
  -moz-transform:rotateY(180deg);
  
`
export const IssueTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center; 

`
