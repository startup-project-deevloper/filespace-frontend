import React ,  { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { assertIsBroadcastTxSuccess, SigningStargateClient, coins, defaultRegistryTypes} from "@cosmjs/stargate";
import { Fileentry } from "./proto/fileentry";
import { Vote } from "./proto/vote";
import {MsgCreateVote, MsgCreateVoteResponse, MsgPublishfileentry, MsgPublishfileentryResponse} from "./proto/tx"
import * as http from "http";

const ENTRYTYPE_PROBLEM = 1;
const ENTRYTYPE_COMMENT = 2;

const ROOTCID_DEMO = "DID:fspace:QmduC2kdLnDy8zXVg7J3zHnpFgBT3YU19Ym2kbNmsyNfdP";

const URL = "http://172.17.0.1"

const chainId = "filespace-01";
const rpcEndpoint = URL + ":26657";

const API_PATH_GET_FILEENTRY_BY_PARAM = URL + ":8001/api/getFileEntriesByParams";
const API_PATH_PIN_FILEENTRY = URL + ":8001/api/pinFileEntry";
const API_PATH_PUBLISH_FILEENTRY = URL + ":8001/api/postNewFileEntry"

const API_PARAM_ROOTHASH = "roothash";
const API_PARAM_PARENTHASH = "parenthash";
const API_PARAM_CREATORID = "creatorId";


const anyWindow: any = window;

var sdkaddress: string;


if (typeof window !== 'undefined' && !window.onunhandledrejection) {
    window.onunhandledrejection = function (event) {
        console.log(event.reason)
        alert(event.reason);
        return false;
    };
}

function App() {
  return (
    <div className="App">
      <header>
      </header>
	  <body>
      {/*  <KeplrControls /> */}

        <FileEntryList cid={""} rootcid={ROOTCID_DEMO} parentcid={""} creatorId={""} entrytype={ENTRYTYPE_PROBLEM} newEntrytype={0}/>

		<NewEntryForm  parentcid={"ThisIstheParentsParentsCID"} rootcid={"ThisIstheRootCID"} cid={"ThisIstheParentsCID"} newEntrytype={ENTRYTYPE_PROBLEM} creatorId={""} entrytype={0}/>
	  
			<div>
				<p>Test du wichser</p>
				<button onClick={checkKeplr}> Check Keplr
				</button>
				<button onClick={requestChainAdd}> Add Chain
				</button>
			</div>
	  </body>
    </div>
  );
}

function getOwnCreatorId() {
    return sdkaddress;
}

const requestChainAdd = async () => {
	 
	console.log("requestChainAdd")
	
	if (typeof window === 'undefined') return

  if (anyWindow.keplr == null) {
    alert('Please install Keplr Extension')
  } else {
    if (anyWindow.keplr.experimentalSuggestChain) {
      try {
		  console.log("adding chain")
		  
		//await window.keplr.experimentalSuggestChain(local)
		await anyWindow.keplr.experimentalSuggestChain({
                    // Chain-id of the Cosmos SDK chain.
                    chainId: chainId,
                    // The name of the chain to be displayed to the user.
                    chainName: "filespace",
                    // RPC endpoint of the chain.
                    rpc: URL + ":26657",
                    // REST endpoint of the chain.
                    rest: URL + ":1317",
                    // Staking coin information
                    stakeCurrency: {
                        // Coin denomination to be displayed to the user.
                        coinDenom: "TIME",
                        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                        coinMinimalDenom: "utime",
                        // # of decimal points to convert minimal denomination to user-facing denomination.
                        coinDecimals: 6,
                        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                        // coinGeckoId: ""
                    },
                    // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
                    // The 'stake' button in Keplr extension will link to the webpage.
                    // walletUrlForStaking: "",
                    // The BIP44 path.
                    bip44: {
                        // You can only set the coin type of BIP44.
                        // 'Purpose' is fixed to 44.
                        coinType: 118,
                    },
                    // Bech32 configuration to show the address to user.
                    // This field is the interface of
                    // {
                    //   bech32PrefixAccAddr: string;
                    //   bech32PrefixAccPub: string;
                    //   bech32PrefixValAddr: string;
                    //   bech32PrefixValPub: string;
                    //   bech32PrefixConsAddr: string;
                    //   bech32PrefixConsPub: string;
                    // }
                    bech32Config: {
                        bech32PrefixAccAddr: "space",
                        bech32PrefixAccPub: "spacepub",
                        bech32PrefixValAddr: "spacevaloper",
                        bech32PrefixValPub: "spacevaloperpub",
                        bech32PrefixConsAddr: "spacevalcons",
                        bech32PrefixConsPub: "spacevalconspub"
                    },
                    // List of all coin/tokens used in this chain.
                    currencies: [{
                        // Coin denomination to be displayed to the user.
                        coinDenom: "TIME",
                        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                        coinMinimalDenom: "utime",
                        // # of decimal points to convert minimal denomination to user-facing denomination.
                        coinDecimals: 6,
                        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                        // coinGeckoId: ""
                    }],
                    // List of coin/tokens used as a fee token in this chain.
                    feeCurrencies: [{
                        // Coin denomination to be displayed to the user.
                        coinDenom: "TIME",
                        // Actual denom (i.e. uatom, uscrt) used by the blockchain.
                        coinMinimalDenom: "utime",
                        // # of decimal points to convert minimal denomination to user-facing denomination.
                        coinDecimals: 6,
                        // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
                        // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
                        // coinGeckoId: ""
                    }],
                    // (Optional) The number of the coin type.
                    // This field is only used to fetch the address from ENS.
                    // Ideally, it is recommended to be the same with BIP44 path's coin type.
                    // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
                    // So, this is separated to support such chains.
                    coinType: 118,
                    // (Optional) This is used to set the fee of the transaction.
                    // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
                    // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
                    // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
                    gasPriceStep: {
                        low: 0.0,
                        average: 0.0,
                        high: 0.0
                    }
                });
		
      } catch {
        alert('Failed to suggest the chain')
      }
    } else {
      alert('Please use the recent version of keplr extension')
    }
  }
}

const checkKeplr = async () =>{
	
    if (!anyWindow.keplr) {
        alert("Please install keplr extension");
    } else {

        // Enabling before using the Keplr is recommended.
        // This method will ask the user whether or not to allow access if they haven't visited this website.
        // Also, it will request user to unlock the wallet if the wallet is locked.
        await anyWindow.keplr.enable(chainId);
    
        const offlineSigner = anyWindow.getOfflineSigner(chainId);
    
        // You can get the address/public keys by `getAccounts` method.
        // It can return the array of address/public key.
        // But, currently, Keplr extension manages only one address/public key pair.
        // XXX: This line is needed to set the sender address for SigningCosmosClient.
        const accounts = await offlineSigner.getAccounts();
    
        // Initialize the gaia api with the offline signer that is injected by Keplr extension.
		const client = await SigningStargateClient.connectWithSigner(
		  rpcEndpoint, // Replace with your own RPC endpoint
		  offlineSigner,
		);
    }
}
	
interface FileEntry {
    cid: string;
	rootcid: string;
	parentcid: string;
	creatorId: string;
	entrytype: number;

    //using the same props class to pass entrytypes for new fileentry
    newEntrytype: number;

}	

	
const addFileEntryTX = async (fileEntry: FileEntry) =>{

	console.log("addFileEntryTX");
  
	await anyWindow.keplr.enable(chainId);
	
	const offlineSigner =
		anyWindow.getOfflineSigner != null
		  ? anyWindow.getOfflineSigner(chainId)
		  : null
	  if (offlineSigner == null) return 'error'

	const accounts = await offlineSigner.getAccounts();
	
	console.log({accounts});
	
	sdkaddress = accounts[0].address;
	
	// @ts-ignore
	const myRegistry = new Registry([
	  ...defaultRegistryTypes,
	  ["/hanshq.filespace.filespace.MsgPublishfileentry", MsgPublishfileentry], // Replace with your own type URL and Msg class
	]);
	
	const client = await SigningStargateClient.connectWithSigner(
	  rpcEndpoint, // Replace with your own RPC endpoint
	  offlineSigner,
	  { registry: myRegistry },
	);

    //TODO change from CID to DID
    console.log(fileEntry.newEntrytype);
    console.log(fileEntry.newEntrytype.valueOf())

	const message = {
	  typeUrl: "/hanshq.filespace.filespace.MsgPublishfileentry", // Same as above
	  value: MsgPublishfileentry.fromPartial({
          creator: sdkaddress,
          did: fileEntry.cid,
          rootdid: fileEntry.rootcid,
          parentdid: fileEntry.parentcid,
          entrytype: fileEntry.newEntrytype.valueOf(),
	  }),
	};
	
	console.log({message});
	
	const fee = {
	  amount: [
		{
		  denom: "utoken", // Use the appropriate fee denom for your chain
		  amount: "120000",
		},
	  ],
	  gas: "200000",
	};
	

    //TODO handle exception no tokens / acc on chain

	const response = await client.signAndBroadcast(sdkaddress, [message], fee);
	
	console.log({ response })
	
	try{
		
		assertIsBroadcastTxSuccess(response);
		
		//PIN ipfs cid
		
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ did: fileEntry.cid })
		};
		
		console.log("pin request for " + fileEntry.cid);
		
		fetch(API_PATH_PIN_FILEENTRY, requestOptions)
		.then(res => {
			if(res.status == 204){
				alert("SUCCESS");
			}
		}).catch(error =>{
            console.log(error)
            alert(error)
        })
		
	}catch{
		alert("Failed to deliver tx");
	}
}

interface FileContentList{
   fileEntries: FileContent[];
}

interface FileContent{
    Title: string;
    Text: string;
}

function FileEntryList(fileEntry: FileEntry) {
  const [error, setError] = useState<any>([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<FileContent[]>([])



    var queryString = API_PATH_GET_FILEENTRY_BY_PARAM;

    var params = new URLSearchParams();

      if(fileEntry.rootcid){
          params.append(API_PARAM_ROOTHASH, fileEntry.rootcid);
      }
    if(fileEntry.parentcid){
        params.append(API_PARAM_PARENTHASH, fileEntry.parentcid);
    }
    if(fileEntry.creatorId){
        params.append(API_PARAM_CREATORID, fileEntry.creatorId);
    }

    const query = queryString + "?"+ params

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(query)
      .then(res => {
          if(res.status == 200){
              return res.json()
          }
      }).then(
        (result) => {
            console.log(result);

            var fc = result as FileContentList;

            console.log(fc);

            setIsLoaded(true);
            setItems(result != undefined ? fc.fileEntries : []);
            setError(null)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);

          setIsLoaded(true);
          setError(error);
        }
      ).catch(error =>{
        console.log(error)
        alert(error)
      })
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {
            items.map((item,index) => (
          <li key={index}>{item.Title}
            {item.Text}
          </li>
        ))}
      </ul>
    );
  }
}


function NewEntryForm(parentEntry: FileEntry) {
	
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
	const _title = formData.get('title');
	const _text = formData.get('text');
	
	
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Title: _title, Text: _text })
    };
	
	fetch(API_PATH_PUBLISH_FILEENTRY, requestOptions)
        .then(response => response.json())
        .then(data => {
            var createdDID = data.did as string;

            addFileEntryTX({
                creatorId: "",
                entrytype: 0,
                newEntrytype: parentEntry.newEntrytype,
                cid: createdDID,
                rootcid: parentEntry.rootcid,
                parentcid: parentEntry.cid}
            )
                .catch(error =>{
                    console.log(error)
                    alert(error)
                });
        })};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="title"
          id="title"
          name="title"
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
	
export default App;
