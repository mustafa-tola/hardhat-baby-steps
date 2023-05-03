const main = async () => {
    const [deployer] = await ethers.getSigners(); //returns the list of account addresses and their related information
    const Token = await ethers.getContractFactory("Token"); //creates the instance of the token contract
    const deployContract = await Token.deploy(); //deploys the token contract
    console.log("Token Address: ",deployContract.address); //prints the address of the deployed contract
}

main()
    .then(() => process.exit()) //Successfully exiting the program
    .catch((error) => {
        console.error(error); //Prints the error message
        process.exit(1); //Exiting the program abruptly
    })
