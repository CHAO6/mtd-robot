
const userAddress = []
const allSaleNFT = [{ price: 1, address: false }]
const lowPrice = 0

// 随机账号
function randomAccount (min, max) {
  let randomIndex = 0

  randomIndex = Math.floor(Math.random() * (max - min)) + min
  return userAddress[randomIndex]
};

// 购买NFT
function NFTBuy () {
  const address = randomAccount(0, 20)
  console.log(address)
};

// 条件判读
function NFTShopping () {
  if (allSaleNFT.legnth > 0) {
    allSaleNFT.forEach((each, index) => {
      if (each.price < lowPrice) {
        if (each.address === false) {
          NFTBuy()
        }
      }
    })
  }
};

export default NFTShopping;
