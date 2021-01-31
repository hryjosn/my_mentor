import styled from "@emotion/styled";

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`
export const ColumnBox = styled.div`
  display: flex;
  text-align: center;
  padding: 15px 0;
  @media (max-width: 1023px) {
    font-size: 0.75rem;
  }

  .root {
    flex: 1;
    margin: 0 5px;

    .title-box {
      padding: 10px 0;
      color: #484848;
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




