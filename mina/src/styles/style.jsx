import styled, {css} from "styled-components";



export const DisplayFlexStyle = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    
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
    
    ${(props) => css`
        margin-right: ${props.right}%;
        margin-left: ${props.left}%;
        margin-top: ${props.top}%;
        margin-bottom: ${props.bottom}%;
        width: ${props.width}%;
        height: ${props.height}%;
        padding-left: ${props.pleft}%;
        padding-right: ${props.pright}%;
        padding-top: ${props.ptop}%;
        padding-bottom: ${props.pbottom}%;
    `}
`

export const MarginSpaceStyle = styled.div`

    ${(props) => css`
        margin-right: ${props.right}%;
        margin-left: ${props.left}%;
        margin-top: ${props.top}%;
        margin-bottom: ${props.bottom}%;
        width: ${props.width}%;
        height: ${props.height}%;
        padding-left: ${props.pleft}%;
        padding-right: ${props.pright}%;
        padding-top: ${props.ptop}%;
        padding-bottom: ${props.pbottom}%;
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