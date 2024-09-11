import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import HistoryButton from "./HistoryButton";
import { useSelector } from "react-redux";
const Home = () => {
  const mode = useSelector((state) => state.mode.isDark);

  return (
    <Box
      sx={{
        backgroundColor: mode ? "#000" : "#fff",
      }}
    >
      <NavBar />
      <HistoryButton />
      <Outlet />
    </Box>
  );
};

export default Home;
