function fetch(url) {
    const xhr = new XMLHttpRequest()

    xhr.onload = function(e) {
        console.log(e)
    }
    xhr.open('GET', url)
    xhr.send()
}

fetch('https://my-json-server.typicode.com/chenf/Gomoku')