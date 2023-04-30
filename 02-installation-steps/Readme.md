<div style="font-family: 'Times New Roman'">
<h1>Installation / Making a Hardhat Project</h1>
<ol>
    <li>First, Create a Nodejs project with <code><b>npm init --y</b></code> command to be run on the terminal</li>
    <li>Install hardhat in the above made project by using <code><b>npm install hardhat</b></code> command to be run on the terminal</li>
    <li>For creating the hardhat project from scratch, run <code><b>npx hardhat</b></code> and select <b>create hardhat.config.js</b> (Initially, It only contains the compiler version for Solidity language ) option to create respoective file.For creating a template hardhat project, You can select other two options.</li>
    <li>Make three essential folders ( if you are starting from scratch ) named as contracts, scripts and tests</li>
    <li>You have to install testing libraries in hardhat project using <code><b>npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai</b></code></li>
    <li>Add following statement <code><b>require("@nomiclabs/hardhat-waffle")</b></code> to enable hardhat in our project</li>
</ol>
</div>