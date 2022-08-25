window.onload = () => {
  const button = document.getElementById('button')
  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Micro task 1'))
    console.log('Listener 1')
  })
  button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Micro task 2'))
    console.log('Listener 2')
  })

  // button.click()
  // (1) if we click by hand, logs: Listener 1 -> Micro task 1 -> Listener 2 -> Micro task 2
  // (2) if we use button.click, logs: Listener 1 -> Listener 2 -> Micro task 1 -> Micro task 2
  // the difference here is when `Listener 1` has been logged, in (1), we have empty call stack -> invoke micro task. 
  // but in (2), we still have Script in call stack -> call script then call micro tasks. 
  // src: https://www.youtube.com/watch?v=cCOL7MC4Pl0
}