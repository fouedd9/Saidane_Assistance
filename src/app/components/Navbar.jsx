"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
export default function NavBar() {
  return (
    <Container>
      <LogoFlex>
        <Flex>
          <Logo>SAIDANE_ASSISTANCE</Logo>
        </Flex>
        <LinkStyle>
          <TextLink>Trouver un artisan</TextLink>
          <TextLink>Nos services</TextLink>
          <TextLink>Comment ça marche</TextLink>
        </LinkStyle>
      </LogoFlex>
      <RightSide>
        <AccountCircleIcon />
      </RightSide>
    </Container>
  );
}
const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border: 3px solid purple; */
  flex: 0.5;
`;
const LogoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid red; */
  flex: 1;
`;
const LinkStyle = styled.div`
  display: flex;
  gap: 32px;
  padding: 0px 12px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 32px;
  align-items: center;
  /* border: 3px solid green; */
`;

const Flex = styled.div`
  display: flex;
`;

const TextStyle = styled.p`
  color: purple;
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #2563eb;
`;

const TextLink = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: gray;
`;
