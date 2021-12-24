# Advanced Sample Hardhat Project

## Description

CGS SmartContract boilerplate

## Pre-requirements

* Create account on https://coinmarketcap.com/ get API key and set it as `COIN_MARKET_API_KEY` env
* Create account on https://dashboard.alchemyapi.io/ and fork etherum mainnet, set `MAIN_NET_FORK_URL` env
* Run `yarn start:remix` in opened browser window go to `File explorer` sidebar and switch workspace from `default_workspace` to `-connect to localhost-`. Now you can test your compile deploy and debug your contracts through `remix`.

## Commands  

```shell
yarn start:remix # Connect your local project to Remix IDE
yarn compile # Compile contracts
yarn test # Run tests
yarn test:gas # Get gas report
yarn test:coverage # Get test coverage of your contract
yarn eth-node # Run EVM locally
yarn deploy:<network> # Deploy contracts to the <network>. You can check package.json for more details
npx hardhat clean
npx hardhat help
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
