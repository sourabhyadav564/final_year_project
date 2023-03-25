import React, { useState } from "react";
import "./App.css";
import "./homepage.css";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
// import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import "aos/dist/aos.css";
import Homepagecompsix from "./components/Homepagecompsix.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ecommerce from './abis/Ecommerce.json';
import Web3 from 'web3';
import './App.css';

function App() {
  const [account, setaccount] = useState('')
  const [ecommerce, setecommerce] = useState('')
  const [usercounter, changeusercounter] = useState(null)
  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    setaccount(accounts[0])
    console.log(accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = Ecommerce.networks[networkId]
    if (networkData) {
      const ecommerce_ = new web3.eth.Contract(Ecommerce.abi, networkData.address);
      const usercounter_ = await ecommerce_.methods.counter().call();
      // console.log(usercounter_);
      console.log(usercounter_);
      setecommerce(ecommerce_);
      // changeusercounter(usercounter_);

    } else {
      // window.alert('Ecommerce contract not deployed to detected network.')
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Homepagecompsix />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
