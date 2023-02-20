import React from "react";
import { Stack, Box } from "@mui/material";
import { Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  //console.log(videos);
  return (
    <Stack
      direction={direction ||"row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, index) => {
        console.log(item);
        return (
          <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
