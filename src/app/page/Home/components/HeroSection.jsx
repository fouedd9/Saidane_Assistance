"use client";

import { Opacity } from "@mui/icons-material";
import { Input, TextField } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import Image from "next/image";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
export default function NavBar() {
  return (
    <HeroContainer>
      <HeroContentFlex>
        <HeadText>Trouvez le bon artisan pour vos travaux</HeadText>
        <DescriptionText>
          Des professionnels qualifiés et vérifiés pour tous vos projets
        </DescriptionText>
        <TextField
          style={{
            zIndex: 2,
            width: "600px",
            backgroundColor: "white",
            borderRadius: "25px",
          }}
          placeholder="Rechercher un artisan"
          id="outlined-controlled"
          onChange={() => console.log("searching")}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <SearchIcon
                style={{ color: "gray", width: "40px", fontSize: "42px" }}
              />
            ),
          }}
        />
      </HeroContentFlex>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("./HeroSection.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 550px;
  /* border: 3px solid green; */
  opacity: 1;

  /* Calque semi-transparent sur l'image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: blue; /* Couleur de votre calque */
    opacity: 0.2; /* Ajustez la transparence ici */
    z-index: 1; /* Place le calque au-dessus de l'image */
  }
`;

const HeadText = styled.p`
  /* position: relative; */
  z-index: 9;
  color: aliceblue;
  font-weight: 800;
  font-size: 48px;
  font-family: "Roboto", sans-serif;
`;

const SearchBar = styled(Input)`
  z-index: 2;
`;

const HeroContentFlex = styled.div`
  z-index: 2;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DescriptionText = styled.p`
  color: white;
  z-index: 2;
  font-size: 18px;
  line-height: normal;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 400;
`;
