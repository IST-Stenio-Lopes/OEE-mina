import styled, {css} from "styled-components";



export const DisplayFlexStyle = styled.div`
    display: flex;
    position: relative;
    ${(props) => css`
        margin-right: ${props.right}%;
        margin-left: ${props.left}%;
        margin-top: ${props.top}%;
        margin-bottom: ${props.bottom}%;
    `}
`
export const DisplayGridStyle = styled.div`
    display: grid;
    position: relative;
`

export const MarginSpaceStyle = styled.div`
    ${(props) => css`
        margin-right: ${props.right}%;
        margin-left: ${props.left}%;
        margin-top: ${props.top}%;
        margin-bottom: ${props.bottom}%;
    `}
`
export const AlignCenterStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  white-space: nowrap;

  img{
      margin-right: 10%;
      cursor: pointer;
  }

`