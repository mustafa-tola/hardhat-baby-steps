<div style="font-family:'Times New Roman'">
    <h1>Debugging Of Smart Contracts</h1>
    <p>Means to execute the program line by line for checking any bugs / defects in code. The steps to debug smart contracts is as follows: -</p>
    <ol>
        <li>Add <code><b>import "hardhat/console.sol"</b></code> before the defination of smart contract at the start of .sol file</li>
        <li>The above library enables developers us to use javascript console.log in solidity code</li>
        <li>Add <code><b>console.log(sample string,...variables)</b></code> in the line where i need to find the value of something</li>
        <li>Call the method through any method (for example, make test for calling this method) to test that console.logs are displaying the values correctly or not</li>
    </ol>
</div>