import React from "react";
import FooterStyles, { FooterNav } from "../styles/footerStyle";
import Link from "next/link";
import Icon from "./icon";

const Footer = () => {
    return (
        <FooterNav>
            <Icon fill='#fff'></Icon>
            <FooterStyles.Ul>
                <FooterStyles.Li>
                    <Link href='/'>Politicas de Privacidade</Link>
                </FooterStyles.Li>
                <FooterStyles.Li>
                    <Link href='/'>Termos e condições</Link>
                </FooterStyles.Li>
                <FooterStyles.Li>
                    <Link href='/'>Suporte</Link>
                </FooterStyles.Li>
            </FooterStyles.Ul>
        </FooterNav >
    )
}

export default Footer;