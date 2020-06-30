var url ="https://restcountries.eu/rest/v2/all"
    fetch(url)
    .then((response)=>{
      return response.json()
    })
    .then((result)=>{


      var b = result.map((i)=>{return i.flag;})
      var f= result.map((i)=>{return i.name;})
      var g= result.map((i)=>{return "Capital: "+ i.capital;})
      var h= result.map((i)=>{return "Region: "+ i.region;})
      var j= result.map((i)=>{return "Population: "+ i.population;})
      
      for(var i=0; i<result.length; i++)
  {
    var header = document.createElement('div')
    header.innerHTML=f[i];
    header.setAttribute('class','card text-center')
    header.setAttribute('class',' card-header')
    header.setAttribute('style',' font-weight:bold')
    
    var image = document.createElement('img')
    image.setAttribute('src',b[i])
    image.setAttribute('class','card-img-top')

    
    var details = document.createElement('p')
    details.innerHTML=g[i];
    details.setAttribute('class','card-body')
    details.setAttribute('class','card-text')

    var details1 = document.createElement('p')
    details1.innerHTML=j[i];
    details1.setAttribute('class','card-body')
    details1.setAttribute('class','card-text')
    
    var details2 = document.createElement('p')
    details2.innerHTML=h[i];
    details2.setAttribute('class','card-body')
    details2.setAttribute('class','card-text')
    

    var cardB = document.createElement('div')
    cardB.setAttribute('class','card')

    cardB.appendChild(image)
    cardB.appendChild(details)
    cardB.appendChild(details1)
    cardB.appendChild(details2)


    var card = document.createElement('div')
    card.setAttribute('class','col mb-4')

    card.appendChild(header)
    card.appendChild(cardB)
    document.getElementById('a').append(card)
    
  }
    
    })
    .catch((er)=>{console.log('error');})


