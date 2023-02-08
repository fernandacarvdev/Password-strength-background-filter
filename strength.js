const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e)=>{ //o evento acontece pelo input
    const input = e.target.value
    const length = input.length
    const blurValue = 20 - length * 2 //o blur muda com a força da senha
    background.style.filter = `blur(${blurValue}px)`  //linha que altera o filtro
})