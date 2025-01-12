import React from "react";
import NavBar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import { Category } from "@mui/icons-material";
import CategorySection from "./components/CategorySection";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function index() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CategorySection />
    </div>
  );
}
