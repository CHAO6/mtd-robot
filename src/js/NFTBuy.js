import Web3 from 'web3'

// 账户地址
let userAddressArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// 初始启动时间
let initTime = '2022-04-27 15:59:00'
// 最大随机数(由于向下取整，需要多加1)
let max = 5
// 最小随机数
let min = 1
// 循环总调用次数
let callsNum = 4
// 循环购买间隔时间
let circularTime = 2000
// 合约--abi
const abi = []
// -------------------- 以上参数手动更改 --------------------
// 清除启动时间定时器
let timerStart = null
// 清除循环购买定时器
let timerCircular = null

// 1.判断是否到时间抢购
function isTimeStart () {
  web3ApiBuy()
  let initialTime = Date.parse(new Date(initTime))
  timerStart = setInterval(() => {
    let currentTime = Date.parse(new Date())
    if (initialTime === currentTime) {
      circularBuying()
      clearInterval(timerStart)
    }
  }, 1000)
}

// 2.时间范围内循环购买
function circularBuying () {
  let countUp = 0
  timerCircular = setInterval(() => {
    countUp += 1
    BuyNFT(countUp)
    // 本次脚本结束
    if (countUp === callsNum) {
      console.log(userAddressArr, '-----------------')
      clearInterval(timerCircular)
    }
  }, circularTime)
}

// 3.NFT购买
function BuyNFT(lastCount) {
  let toBuyNFTArr = []
  // 判断是否是最后一次
  if (lastCount === callsNum) {
    toBuyNFTArr = queryNFT()
  } else {
    // 挑选随机数量的地址
    let randomNum = Math.floor(Math.random() * (max - min)) + min
    toBuyNFTArr = randomUsers(userAddressArr, randomNum)
  }
  console.log(toBuyNFTArr, new Date(), '***')
  // 循环购买NFT
  toBuyNFTArr.forEach(eactNFT => {
    web3ApiBuy(eactNFT)
  })
}

// 合约--购买
async function web3ApiBuy(nftAddress) {
  // 合约连接
  const contract = new Web3()
  console.log(contract)
  // contract.methods.get
  // 购买成功后删除
  userAddressArr.splice(userAddressArr.indexOf(nftAddress), 1)
}

// 合约--查询剩余NFT名额
function queryNFT() {
  // eg：剩余6个NFT名额
  return randomUsers(userAddressArr, 6)
}

// 随机挑选用户地址
function randomUsers(arr, count) {
  let newArr = arr.slice(0)
  let i = arr.length
  let min = i - count
  let temp
  let index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = newArr[index];
    newArr[index] = newArr[i];
    newArr[i] = temp;
  }
  return newArr.slice(min);
}

export default isTimeStart;
