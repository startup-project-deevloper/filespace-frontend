import React, {CSSProperties} from "react";
import Card from "react-bootstrap/Card";
import { FileContent} from "../model/model";
import {inspect} from "util";
import {ENTRYTYPE_COMMENT, ENTRYTYPE_PROBLEM} from "../constants/constants";


function FileEntryCard(filecontent: FileContent) {

    var cardstyle : CSSProperties;

    switch (filecontent.EntryType){
        case ENTRYTYPE_PROBLEM:
            cardstyle = {width: '30rem', height:'18rem', }
            break;
        case ENTRYTYPE_COMMENT:
            cardstyle = {width: '18rem', height:'24rem'}
            break;
        default:
            cardstyle = {width: '18rem', height:'24rem'}
    }

    return(
        <Card className="overflow-auto" style={cardstyle} key={filecontent.Title} >
            <Card.Body>
                <Card.Title>{filecontent.Title}</Card.Title>
            <Card.Text>
            {filecontent.Text}
            </Card.Text>
            </Card.Body>
        </Card>);
}


export default FileEntryCard;