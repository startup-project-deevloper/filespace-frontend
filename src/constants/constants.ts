export const ENTRYTYPE_PROBLEM = 1;
export const ENTRYTYPE_COMMENT = 2;

export const ROOTCID_DEMO = "DID:fspace:QmduC2kdLnDy8zXVg7J3zHnpFgBT3YU19Ym2kbNmsyNfdP";

export const URL = "http://172.17.0.1"

export const chainId = "filespace-01";
export const rpcEndpoint = URL + ":26657";

export const API_PATH_GET_FILEENTRY_BY_PARAM = URL + ":8001/api/getFileEntriesByParams";
export const API_PATH_PIN_FILEENTRY = URL + ":8001/api/pinFileEntry";
export const API_PATH_PUBLISH_FILEENTRY = URL + ":8001/api/postNewFileEntry"

export const API_PARAM_ROOTHASH = "roothash";
export const API_PARAM_PARENTHASH = "parenthash";
export const API_PARAM_CREATORID = "creatorId";