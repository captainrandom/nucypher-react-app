import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeAlice } from './characters';
import { Enrico } from 'nucypher-ts';
import { useEthers } from '@usedapp/core';

function App() {
  const {library, account, deactivate, activateBrowserWallet, chainId} = useEthers()
  console.log('chainId', chainId);
  console.log('library', library);
  console.log('account', account);

  function encrypt(data: string): Uint8Array {
    if (!library) {
      return new Uint8Array();
    }
    const alice = makeAlice(library)
    // const bob = makeBob()

    // create policy
    const policyEncryptingKey = alice.getPolicyEncryptingKeyFromLabel('test-gifs')

    const enrico = new Enrico(policyEncryptingKey)
    return enrico.encryptMessage(data).ciphertext
    // return new Uint8Array();
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
