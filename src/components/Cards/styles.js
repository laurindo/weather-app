import styled, { css } from 'styled-components'

export const WrapperContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 10px;
`

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.backgroundMedium};
  min-height: 200px;
  border-radius: 5px;
  cursor: pointer;
  ${props =>
    props.selected &&
    css`
      background-color: #06314a;
      border-bottom: solid 1px #a95cdc;
      box-shadow: #8c18d857 0px 20px 55px 0px;
    `}
`

export const WrapperCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`
