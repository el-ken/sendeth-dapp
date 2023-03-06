
const main = async () => {


  const Transactions = await hre.ethers.getContractFactory('ethereumSender'); //this is like a function factory or a class that is going to generate instances of that specific contract;
  const transactions = await Transactions.deploy();

  await transactions.deployed();

 

  console.log("Transactions deployed to:", transactions.address);
  //Transactions deployed to: 0xA2315d884Bf4cb8d3162cE707D01De9571AD3A1c
  
  
}


const runMain = async () =>{
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();