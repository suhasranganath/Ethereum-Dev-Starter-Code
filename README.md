# Ethereum Dev Starter Code
This repo contains starter code to develop a ethereum project on local machine. It also contains simple local environment to test solidity contracts using mocha and to deploy those contracts using infura.

## Steps to get started.
<ol>
  <li>Clone the repo
    <code><pre>$ git clone https://github.com/suhasranganath/Ethereum-Dev-Starter-Code.git </pre></code></li>
  <li> Install node packages
    <code><pre>$ npm install </pre></code></li>
  <li> Update the current simple contract code( contracts/Inbox.sol ) with your contract code </li>
  <li> Update <b>compile.js</b> so that it exports 'Interface' and 'Bytecode' of your new contract<br>
    Eg: Replace ':Inbox' with ':Contract_Name'.</li>
  <li> Compile your contract 
    <code><pre>$ node compile.js </pre></code></li>
  <li> Add your test code to <b>Inbox.test.js</b> file. </li>
  <li> Test your contract 
    <code><pre>$ npm run test </pre></code></li>
  <li> Update Mnemonic Words(12 words) and Infura api in <b>deploy.js</b> </li>
  <li> Deploy your code to test/mainnet
    <code><pre>$ node deploy.js </pre></code></li>

## Folder Structure
Below is the folder structure of the repo.

![Folder Structure](https://user-images.githubusercontent.com/7945917/41022341-dd51275c-6986-11e8-962b-ffaf9fe3fba9.png)

<ol>
  <li> <b>contracts/Index.sol</b> - Simple solidity contract code </li>
  <li> <b>test/Index.test.sol</b> - Mocha test code for the contract code </li>
  <li> <b>compile.js</b> - Uses solidity compiler solc to compile and exports Interface and Bytecode of the contract. </li>
  <li> <b>deploy.js</b> - Deployment code. Uses Infura api to connect and deploy contract to test/mainnet ethereum networks </li>
</ol>
  
