import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  height: 50px;
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MHD*</Logo>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          eaque optio sit necessitatibus fugit odit a quam similique autem,
          aperiam animi cumque harum maiores corporis maxime enim ipsa!
          Voluptatem, quibusdam.
        </Description>
        <SocialContainer>
          <SocialIcon color="#000">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#454111">
            <WhatsAppIcon />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>home</ListItem>
          <ListItem>cart</ListItem>
          <ListItem>man fashion</ListItem>
          <ListItem>accessories</ListItem>
          <ListItem>my account</ListItem>
          <ListItem>order tracking</ListItem>
          <ListItem>wishlist</ListItem>
          <ListItem>terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} /> AAA
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} /> +025455545589
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} /> user@gmail.com
        </ContactItem>
        <Payment src="https://images.ctfassets.net/x4we65bqi45q/4x0eLapOitl0nBFLQ8YicK/9d39f34298dda897620329118efcdf46/shutterstock_248825623-e1460664714802-720x415.jpg?w=800&q=50" />
      </Right>
    </Container>
  );
};

export default Footer;
