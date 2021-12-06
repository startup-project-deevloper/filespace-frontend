import React from "react";
import AliceCarousel from "react-alice-carousel";
import FileEntryCard from "./FileEntryCard";
import {FileContentList} from "../model/model";

function FileEntryCarousel(items : FileContentList){

    return(
        <AliceCarousel
            responsive={{
                0: {
                    items: 1,
                },
                1024: {
                    items: 3
                }
            }}
            disableDotsControls
            disableButtonsControls
            mouseTracking={true} >
            {items.fileEntries.map((filecontent) => {
                return(
                    <FileEntryCard EntryType={filecontent.EntryType} Text={filecontent.Text} Title={filecontent.Title}/>);
            })}
        </AliceCarousel>
    );
}

export default FileEntryCarousel;