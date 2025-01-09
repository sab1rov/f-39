import React from "react";
import { Banners } from "../components/section_1";
import { InfoCards } from "../components/InfoCards";
import { DetailPack } from "../components/DetailPack";
import { InfoLists } from "../components/InfoLists";
import { InfoText } from "../components/InfoText";
import { InfoPhotosCards } from "../components/InfoPhotosCards";

function Home() {
    return (
        <div className='container'>
            <Banners />
            <InfoCards />
            <DetailPack />
            <InfoLists />
            <InfoText />
            <InfoPhotosCards />
        </div>
    );
}

export default Home;
