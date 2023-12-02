let h2 = document.querySelectorAll('.header-bg')
let colors = ['#AD23FA', '#2325FA', '#2369FA', '#F423FA', '#cd7f32', '#00a86b']

for (let i = 0; i < h2.length; i++) {
    let bgDiv = document.createElement('div')
    
    bgDiv.style.height = h2[i].offsetHeight + 10 + 'px'
    bgDiv.style.width = h2[i].querySelector('h2').offsetWidth + 10 + 'px'
    bgDiv.style.transform = `rotate(${randomInteger(-3, 3)}deg)`
    bgDiv.style.backgroundColor = `${colors[randomInteger(0, colors.length - 1)]}`
    bgDiv.style.borderRadius = randomInteger(0, 15) + 'px'

    bgDiv.classList.add('square-bg')
    h2[i].append(bgDiv)
}

function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min)
    random = Math.floor(random)
    return random
}