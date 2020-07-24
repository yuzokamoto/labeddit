import React from "react";

import {
  FooterSocialNetwork,
  FooterContainer,
  FooterMenu,
  FooterLogo,
} from "./styles";

import { BulbTwoTone } from "@ant-design/icons";

function Footer() {
  return (
    <FooterContainer>
      <FooterMenu>
        <ul>
          <li>
            <a href="#">Quem Somos</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Trabalhe Conosco</a>
          </li>
          <li>
            <a href="#">Assessoria de Imprensa</a>
          </li>
          <li>
            <a href="#">Entre em Contato Conosco</a>
          </li>
        </ul>
      </FooterMenu>

      <FooterLogo>
        <BulbTwoTone
          twoToneColor="#FA4400"
          style={{
            fontSize: "4.5em",
          }}
        />
      </FooterLogo>

      <FooterSocialNetwork />
      <hr />
    </FooterContainer>
  );
}

export default Footer;
