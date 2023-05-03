<div style="font-family:'Times New Roman'">
    <h1>Deployment Of Smart Contracts</h1>
    <p>For deployment on all types of networks, We will make a script file in the scripts folder: -</p>
    <p>Below are the steps for each different network<p>
    <h2>Hardhat local network</h2>
    <ol>
        <li>Add the same code as my scripts/deploy.js in your file of your project</li>
        <li>Run <code><b>npx hardhat run scripts/deploy.js</b></code> in the terminal to deploy your contract and get the deployed contract address</li>
    </ol>
    <h2>Goerli / Any test ethereum network</h2>
    <ol>
        <li>Make the changes as mine in your hardhat.config.js file</li>
        <li>The keys used in the hardhat.config.js can be gotten in the following way
            <ol>
                <li><b>ALCHEMY Private Key</b></li>
                <ol>
                    <li>Go to alchemy website and Sign Up / Sign In there</li>
                    <li>Click on Create App Button and fill the following info in it like below: -
                    <img src="./images/alchemy app creation.png" /></li>
                    <li>After creating the application, From the list of applications, Click on <b>View Key</b> button to copy the api key to put in the alchemy_private_key variable in .env file</li>
                    <li>Also, Copy the url from previous button clicking to place it in url variable in .env file</li>
                </ol>
                <li><b>Test Network Private Key</b></li>
                <ol>
                    <li>Go to Metamask</li>
                    <li>Switch to your desired test network</li>
                    <li>Click on three dots, click on account details, Click on Export Private key, Give your password on input prompt and copy the private key</li>
                    <li>Place the copied key into the goerli test network key variable in .env file</li>
                </ol>
            </ol>
        </li>
        <li>Run <code><b>npx hardhat run scripts/deploy.js --network goerli</b></code> (any test network) to deploy the smart contract </li>
    </ol>
</div>
