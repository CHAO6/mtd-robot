// 用户地址
let userAddress = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
// 所有在售NFT
let allSaleNFT = [{ price: 1, address: false }]
// 最低价格
let lowPrice = 0

// 条件判断
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

// 合约--购买
function NFTBuy () {
  let randomUser = randomAccount()
};

// 随机账号
function randomAccount () {
  let randomIndex = 0

  randomIndex = Math.floor(Math.random() * userAddress.length + 1) - 1
  return userAddress[randomIndex]
};

export default NFTShopping;
