setTimeout(() => {
  console.log('Set Time Out 1000')
}, 1000)
setTimeout(() => {
  console.log('Set Time Out 0')
}, 0)
const myPromise = new Promise((resolve, reject) => {
  let x = 0;
  if (x !== 0) {
    console.log('Resolve in promise')
    resolve()
  } else {
    console.log('Reject in promise')
    reject()
  }
})
myPromise.then(() => {
  console.log('Resolve')
}, () => {
  console.log('Reject')
}).finally(() => {
  console.log('Finally')
})
console.log('End of main')