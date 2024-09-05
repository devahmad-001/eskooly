'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { btnAttributes } from '../../../../Type';

function CustomLink(props: any | btnAttributes) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={props.href}
            style={{
                color: props.color,
                textDecoration: isHovered ? `${props.hoverunderline}` : 'none',
                fontWeight: props.fontWeight,
                fontSize: props.fontSize,
                lineHeight: props.lineHeight,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {props.text}
        </Link>
    );
}

export default CustomLink;
