const {expect} = require("chai");

describe("Token Contract",() => {
    it("Deployment should assign total supply of tokens to the owner / caller of the contract",async () => {
        const [owner] = await ethers.getSigners(); //returns the list of account addresses and their related information
        console.log("Signer object ",owner);
        const Token = await ethers.getContractFactory("Token"); //creates the instance of the token contract
        const tokenDeployment = await Token.deploy(); //deploys the token contract
        const ownerBalance = await tokenDeployment.balanceOf(owner.address); //calling the balanceOf method of contract
        console.log("Owner address",owner.address); //printing the address of the contract caller
        // expect(await tokenDeployment.totalSupply()).to.equal(ownerBalance); //checking if the total balance of the owner is equal to the balance present in contract
        expect(await tokenDeployment.totalSupply()).to.equal(10); //checking if the total balance of the owner is equal to 10
    }) //the block for creating a test case

    it("calls the transfer method successfully",async () => {
        const [owner] = await ethers.getSigners(); //returns the list of account addresses and their related information
        console.log("Signer object ",owner);
        const Token = await ethers.getContractFactory("Token"); //creates the instance of the token contract
        const tokenDeployment = await Token.deploy(); //deploys the token contract
        const ownerBalance = await tokenDeployment.transfer(owner.address,10); //calling the balanceOf method of contract
    })
}) //the block for creating test cases of similar purpose