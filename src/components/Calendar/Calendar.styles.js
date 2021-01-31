import styled from "@emotion/styled";

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`
export const ColumnBox = styled.div`
  display: flex;
  text-align: center;
  padding: 15px 20px;
  font-size:20px;
  font-weight: bold;
  .validDay {
    background-color: #7d61ed;
    color: white;
    border-radius: 10px;
  }

  .invalidDay {
    color: black
  }
  .root {
    flex: 1;
    margin: 0 5px;

    .title-box {
      padding: 10px 0;
    }

    .time-list {
      .time {
        padding: 3px 0;
        color: #b6b6b6;
        font-weight: 700;
        &.validTime {
          color: #02cab9;
        }
      }
    }
  }

  

  .line {
    width: 112px;
    height: 47px;
    background-color: aqua;
    border-radius: 5px 0 0 5px;
  }
  
`

