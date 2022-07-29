
## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
git clone https://github.com/0xsatya/hardhat-boilerplate-ts.git
cd hardhat-boilerplate-ts
yarn
```

Once installed, let's run Hardhat's testing network:

```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
```
