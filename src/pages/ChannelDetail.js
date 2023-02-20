import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; //ใช้สำหรับเรียกใช้ URL ID
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "../component";
import { fetchFromAPI } from "../utils/fetchFromAPI"; //เรียก API

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { channelId } = useParams();

  useEffect(() => {
    const data = fetchFromAPI(`channels?part=snippet&id=${channelId}`).then(
      (data) => {
        console.log(data);
        setChannelDetail(data.items[0]); //ค่าเลข 0 คือ index ดัชนีชี้ตำแหน่ง
      }
    );
    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => {
        console.log(data);
        setVideos(data.items);
      }
    );
  }, [channelId]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(54,16,35,1) 0%, rgba(116,11,50,1) 35%, rgba(189,134,175,1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        ></div>

        <ChannelCard
          ChannelDetail={ChannelDetail}
          marginTop="-93px"
        ></ChannelCard>
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos}></Videos>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
