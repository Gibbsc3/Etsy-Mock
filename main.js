fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent ('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('basketball jerseys') + '&includes=Images,Shop'))
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {

    json.results.forEach(function(result){
      //creates image tag and adds src url via object
      var img = document.createElement('img')
      img.setAttribute('src', result.Images[0].url_170x135)

      //creats div with a class name of foo
      var div = document.createElement('div')
      div.classList.add('foo')
      //creats div with a class name of foo
      var divWrap = document.createElement('div')
      div.classList.add('wrap')

      // creates h6 tag for item title
      var titleText = document.createTextNode(result.title)
      var title = document.createElement('h6')
      title.classList.add('title')

      // creates p tag for item price
      var priceText = document.createTextNode(result.price)
      var price = document.createElement('p')
      price.classList.add('price')

      // creates p tag for username of  seller
      var userText = document.createTextNode(result.Shop.login_name)
      var user = document.createElement('p')
      user.classList.add('username')


      //placing all elements into appropiate tages
      divWrap.appendChild(div)
      divWrap.appendChild(div)
      div.appendChild(img)
      div.appendChild(title)
      div.appendChild(price)
      div.appendChild(user)
      price.appendChild(priceText)
      title.appendChild(titleText)
      user.appendChild(userText)
      //puts the div into site body
      document.body.appendChild(div);
    })
  })
