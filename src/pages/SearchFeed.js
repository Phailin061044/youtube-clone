import React, { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SideBar, Videos } from "../component";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null); // Videos คือ State setVideos คือ function
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]); //ค่าที่มีการเปลี่ยนแปลงจะเรียกใช้ useEffect
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Result for {searchTerm}{" "}
          <span style={{ color: "#fc1503" }}>Videos</span>
        </Typography>
        {<Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default SearchFeed;
