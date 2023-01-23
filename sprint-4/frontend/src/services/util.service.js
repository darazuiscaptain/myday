export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    getMonthName,
    getColors,
    calculateTime
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 300){
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function getMonthName(date) {
    const monthNames = ["Jan`", "Feb`", "March", "April", "May", "June",
        "July", "Aug`", "Sep`", "Oct`", "Nov`", "Dec`"
    ]
    return monthNames[date.getMonth()]
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function getColors() {
    return [
        '#a25ddc',
        '#FBBC04',
        '#F1E4DE',
        '#FDCFE8',
        '#F28B82',
        '#FFF475',
        '#CCFF90',
        '#CBF0F8',
        '#A7FFEB',
        '#D7AEFB',
        '#E6C9A8',
        '#E8EAED',
    ]
}

function calculateTime(time) {
    const currentTime = new Date().getTime()
    const timeDiff = Math.floor((currentTime - time) / 60000)
    if(timeDiff >= 60 * 24 * 7) {
        const week = Math.floor(timeDiff / (60 * 24 * 7))
        return `${week}w`
    } else if(timeDiff >= 60 * 24) {
        const day = Math.floor(timeDiff / (60 * 24))
        return `${day}d`
    } else if (timeDiff >= 60) {
      const hours = Math.floor(timeDiff / 60)
      return `${hours}h`
    } else if(timeDiff >= 2) {
        const minutes = timeDiff % 60
        return `${minutes}m`
    } else return 'just now'
    
}