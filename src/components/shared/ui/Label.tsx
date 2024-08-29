import React from 'react'
import styled from '@emotion/styled'
import { labelAttributes } from '../../../../Type'

export default function Label(props: labelAttributes) {
    const LabelInput = styled.label`
    display: ${props.display};
    color: var(${props.color});
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    text-decoration: ${props.textDecoration};
    letter-spacing: ${props.letterSpacing};
    line-height: ${props.lineHeight};
   `
    return (
        <>
            <LabelInput htmlFor={props.html}>{props.text}</LabelInput>
        </>
    )
}
