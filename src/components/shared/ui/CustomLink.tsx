'use client'
import Link from 'next/link';
import React, { useState } from 'react';

function CustomLink(props:any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={props.href}
            style={{
                color: props.color,
                textDecoration: isHovered ? 'underline' : 'none',
                fontWeight: props.fontWeight,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {props.text}
        </Link>
    );
}

export default CustomLink;
