import React from "react";
import styled from "styled-components";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import categories from "../constants";
import { useRouter } from "next/navigation";
export default function CategorySection() {
  const router = useRouter();

  const goToPage = (path) => {
    router.push(`${path}`);
  };
  return (
    <Container>
      <Header>
        <h1>Nos catégories de services</h1>
      </Header>
      <CategoriesCard>
        {categories?.map((category, index) => (
          <Flex onClick={() => goToPage(category.path)} key={index}>
            <IconFlex>
              {category.icon}
              {/* <BuildOutlinedIcon color="primary" /> */}
            </IconFlex>
            <TitleCard> {category?.title} </TitleCard>
            <Description> {category?.description} </Description>
          </Flex>
        ))}
      </CategoriesCard>
    </Container>
  );
}

const CategoriesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const IconFlex = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #eff6ff;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  flex-direction: column;

  /* Laptop S (1024px - 1280px) */
  @media (min-width: 1024px) and (max-width: 1280px) {
    /* border: 3px solid blue; */
  }

  /* Laptop M (1281px - 1440px) */
  @media (min-width: 1281px) and (max-width: 1440px) {
    /* border: 3px solid yellow; */
    /* padding-inline: 8px; */
  }

  /* Laptop L (1441px - 1920px) */
  @media (min-width: 1441px) and (max-width: 1920px) {
    /* border: 3px solid red; */
  }

  /* Desktop XL (1921px - 2560px) */
  @media (min-width: 1921px) and (max-width: 2560px) {
    /* border: 3px solid green; */
  }

  /* Desktop XXL (2561px+) */
  @media (min-width: 2561px) {
    /* border: 3px solid purple; */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 48px;
  height: 150px;
  /* border: 3px solid green; */
`;

const Flex = styled.div`
  /* border: 3px solid blue; */
  display: flex;
  width: 400px;
  height: 200px;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const TitleCard = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

const Description = styled.p`
  font-size: 16px;
  color: gray;
  /* padding: 16px; */
  text-align: center;
`;
