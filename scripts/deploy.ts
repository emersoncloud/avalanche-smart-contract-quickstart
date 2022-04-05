import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"

const main = async(): Promise<any> => {
  const Coin: ContractFactory = await ethers.getContractFactory("ExampleERC20")
  const coin: Contract = await Coin.deploy()

  await coin.deployed()
  console.log(`Coin deployed to: ${coin.address}`)

  const Counter: ContractFactory = await ethers.getContractFactory("Counter")
  const counter: Contract = await Counter.deploy()

  await counter.deployed()
  console.log(`Counter deployed to: ${counter.address}`)

  const Multicall: ContractFactory = await ethers.getContractFactory("Multicall")
  const multicall: Contract = await Multicall.deploy()

  await multicall.deployed()
  console.log(`Multicall deployed to: ${multicall.address}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
