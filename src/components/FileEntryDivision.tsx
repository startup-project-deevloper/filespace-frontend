import React, {useEffect, useState} from "react";
import {FileContent, FileContentList, FileEntry} from "../model/model";
import FileEntryCarousel from "./FileEntryCarousel";
import {
    API_PARAM_CREATORID,
    API_PARAM_PARENTHASH,
    API_PARAM_ROOTHASH,
    API_PATH_GET_FILEENTRY_BY_PARAM, ENTRYTYPE_PROBLEM
} from "../constants/constants";
import {Accordion, Container} from "react-bootstrap";


function FileEntryDivision(fileEntry: FileEntry) {

    var cont1 : FileContent = {
        EntryType: ENTRYTYPE_PROBLEM,
        Title: "hmmm",
        Text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }

    var testentries : FileContent[] = [cont1, cont1, cont1, cont1, cont1, cont1, cont1, cont1];

    return (
        <Container fluid>
        <Accordion className="fileentry-div" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    <FileEntryCarousel  fileEntries={testentries}/>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>




        </Container>
    );

}

export default FileEntryDivision;