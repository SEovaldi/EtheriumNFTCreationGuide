import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ethers } from "ethers";
import detectEthereumProvider from '@metamask/detect-provider';
import abi from "../../abis/Nobles.json"
import { Noble, NobleBody, NobleStats } from './noble.interface';
declare var window: any

@Component({
  selector: 'app-nobles',
  templateUrl: './nobles.component.html',
  styleUrls: ['./nobles.component.scss']
})
export class NoblesComponent implements OnInit {

  public contractAddress: string | undefined;
  public contractABI: any;
  public provider: ethers.providers.Web3Provider | undefined;
  public contract!: any;
  public accounts: Array<string> = [];
  public nobles: Array<any> = [];
  // public contract!: ethers.Contract;

  constructor() { 
    this.contractAddress = environment.contractAddress;
    this.contractABI = abi.abi;
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.provider.getSigner());
  }

  ngOnInit(): void {
    // console.log("contract: ", this.contract);
    // console.log("contractAddress: ", environment.contractAddress);
    const noblesJSON = localStorage.getItem('cachedNobles');
    console.log("noblesJSON: ", noblesJSON);
    if (noblesJSON){
      const parsedNobles = JSON.parse(noblesJSON);
      console.log("parsedNobles: ", parsedNobles);
      this.nobles = parsedNobles;
    }
  }

  async connect(): Promise<void> {
    try {
      const provider: any = await detectEthereumProvider();
      
      // returns an array of accounts
      this.accounts = await provider.request({ method: "eth_requestAccounts" });
      
      // check if array at least one element
      if (this.accounts.length > 0) {
        console.log('account found', this.accounts);
      } else {
        console.log('No account found');
      }
    } catch (error) {
      console.log(error);
    }
  }
}