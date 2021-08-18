import React from 'react';

import {SectionTitleWrapper, SectionBgWrapper} from './sectionTitle.style'

export const SectionTitle = ({children, ...props}) => {

    const AllClasses = ["title__wrapper"];
    if (props.className) {
        AllClasses.push(props.className);
    }

    return(
        <SectionTitleWrapper {...props} className={AllClasses.join(" ")}>
            {children}
        </SectionTitleWrapper>
    )
}

export const SectionBackground = ({children}) => {
    return(
        <SectionBgWrapper>
            {children}
        </SectionBgWrapper>
    )
}
