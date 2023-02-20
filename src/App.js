import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages";
import { NavBar } from "./component";

const App = () =>{
    return (
    <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
        <NavBar/>
        <Routes>
            <Route  path="/" element={<Feed />}/>
            <Route  path="/video/:videoId" element={<VideoDetail />}/>
            <Route  path="/channel/:channel" element={<ChannelDetail />}/>
            <Route  path="/search/:searchTerm" element={<SearchFeed />}/>
        </Routes>
    </Box>
    </BrowserRouter>
    );
}

export default App;