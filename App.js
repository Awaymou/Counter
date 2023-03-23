function countUp(){
    let counterVal = Number(localStorage.getItem('counter'))
    let lastUpdate = localStorage.getItem('lastUpdated')
    let newCount = counterVal + 1
    let currentDate = new Date().toLocaleDateString();

    localStorage.setItem('counter', newCount)
    localStorage.setItem('lastUpdated', currentDate)

    $('.updatedDate').text(currentDate)
    $('.counterValue').text(newCount)
}


function countDown(){
    let counterVal = Number(localStorage.getItem('counter'))
    let newCount = counterVal - 1

    localStorage.setItem('counter', newCount)

    $('.counterValue').text(newCount)
}

let counterVal = Number(localStorage.getItem('counter'))
let updateDate = localStorage.getItem('lastUpdated')

$('.counterValue').text(counterVal)
$('.updatedDate').text(updateDate)


