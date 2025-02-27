const hre = require("hardhat");

async function main() {
    const StudentRegistry = await hre.ethers.getContractFactory("StudentRegistry");
    const studentRegistry = await StudentRegistry.deploy();
    await studentRegistry.deployed();

    console.log(`StudentRegistry deployed to: ${studentRegistry.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
