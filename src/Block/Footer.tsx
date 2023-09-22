import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container>2023 HashIT App Ltd. Allrights reserved.</Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #808080;
`;
