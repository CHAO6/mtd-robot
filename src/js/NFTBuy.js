
let userAddress = []
let NFTAddress = []
let initTime = '2022-04-27 13:34:50'
let timerStart = null
let timerCircular = null

// 判断是否到时间抢购
function isTimeStart () {
  let initialTime = Date.parse(new Date(initTime))
  timerStart = setInterval(() => {
    let currentTime = Date.parse(new Date())
    if (initialTime === currentTime) {
      circularBuying()
      clearInterval(timerStart)
    }
  }, 1000)
}

// 时间范围内循环购买
function circularBuying () {
  console.log('-------------')
  timerCircular = setInterval(() => {
    console.log('-------------')
  }, 120000)
}

// 随机挑选NFT地址
function randomNFTs(arr, count) {
  let shuffled = arr.slice(0)
  let i = arr.length
  let min = i - count
  let temp
  let index
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function NFTBuy () {
  for (let i = 0; i < 1000; i++) {
    NFTAddress.push(i)
  }
  console.log(randomNFTs(NFTAddress, 20))
  isTimeStart()
}

export default NFTBuy;
