import styled, {css} from 'styled-components'


export const SelectBox = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    position: relative;

    ${(props) => css`
        margin-right: ${props.right}%;
        margin-left: ${props.left}%;
        margin-top: ${props.top}%;
        margin-bottom: ${props.bottom}%;
        padding-left: ${props.pleft}%;
        padding-right: ${props.pright}%;
        padding-top: ${props.ptop}%;
        padding-bottom: ${props.pbottom}%;
        width: ${props.width}%;
        height: ${props.height}%;
    `}
    cursor: pointer;
`

export const NameDefaultSelectBox = styled.p`
    color: rgba(199, 199, 199, 1);
`