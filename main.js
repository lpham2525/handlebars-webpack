let ourRequest = new XMLHttpRequest()
ourRequest.open('GET', 'https://learnweb.github.io/json-example/pets-data.json')
ourRequest.onload = () => {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    let data = JSON.parse(ourRequest.responseText)
    createHTML(data)
  } else {
    console.log('We connected to the server, but it returned an error.')
  }
}

ourRequest.onerror = () => {
  console.log('Connection error')
}

ourRequest.send()

function createHTML(petsData) {
  console.log('testing from our function')
  console.log(petsData)
}
