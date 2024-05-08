import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
height: 42px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
background-color: var(--green-vara-1);
`


export function Footer(){
    return(
        <StyledFooter>
            <p className="m-0">© 2024 Open Web Academy | BOS + VARA Network</p>
        </StyledFooter>
    )
}