import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPersonBooth,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";
import styled from "styled-components";

const Wait = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <LargeTxtx>
            Join the waitlist for<span> HashIT!</span>{" "}
          </LargeTxtx>
          <InputHolder>
            <Input>
              <Icon>
                <FaPersonBooth />
              </Icon>
              <input placeholder="Full name" />
            </Input>
            <Input>
              <Icon>
                <MdMail />
              </Icon>
              <input placeholder="Email Address" />
            </Input>
          </InputHolder>
          <Button>Get notified when HashIT is live</Button>

          <Icons>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaPinterest />
          </Icons>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Wait;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  color: black;
  font-size: 25px;
  gap: 10px;
`;

const Button = styled.div`
  width: 300px;
  height: 50px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: black;
  color: white;
  font-size: 15px;
  @media (max-width: 320px) {
    width: 280px;
  }
`;

const Icon = styled.div``;

const InputHolder = styled.div``;

const Input = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: grey;
  gap: 5px;
  background-color: white;
  border-radius: 6px;
  padding-left: 10px;
  margin: 30px 0;
  border: 2px solid grey;

  @media (max-width: 320px) {
    width: 270px;
  }

  input {
    flex: 1;
    height: 50px;
    outline: none;
    border-radius: 6px;
    border: none;
  }
`;

const LargeTxtx = styled.div`
  width: 100%;
  font-size: 50px;
  font-weight: 800;
  text-align: center;
  span {
    color: #ec5a24;
    margin-left: 5px;
  }
`;

const Wrapper = styled.div`
  width: 54%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;
