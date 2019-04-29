// const cors = require('cors')
const div = document.getElementById('shortned-url')
function shorten () {
  const url = document.getElementById('url').value
  //   console.log(url)
  const options = {
    method: 'POST',
    body: JSON.stringify({ url: url }),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  fetch('http://localhost:3001/shortify/shorten/', options)
    .then(res => res.json())

    .then(res => {
      const a = document.createElement('a')
      div.style.display = 'block'
      div.innerHTML = ' '
      a.href = 'http://localhost:3001/shortify/' + res.id
      a.textContent = 'http://localhost:3001/shortify/' + res.id
      div.appendChild(a) 
      ClearFields()
    })
}
function ClearFields () {
  document.getElementById('url').value = ' '
}
