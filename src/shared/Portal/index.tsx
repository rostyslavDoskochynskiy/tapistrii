import React from 'react';
import { createPortal } from "react-dom"

interface Props {
    children: React.ReactNode;
    element?: HTMLElement; 
}

export const Portal = (props: Props) => {
    const { children, element = document.body } = props  
    return createPortal(children, element)
}