
export interface FileContent{
    Title: string;
    Text: string;
    EntryType: number;
}

export interface FileContentList{
    fileEntries: FileContent[];
}

export interface FileEntry {
    cid: string;
    rootcid: string;
    parentcid: string;
    creatorId: string;
    entrytype: number;

    //using the same props class to pass entrytypes for new fileentry
    newEntrytype: number;

}