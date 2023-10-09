
let pokemons = {};
fetch("https://pokeapi.co/api/v2/pokemon/").then(respones => {
    if(respones.ok)
        return respones.json();
}).then(pokemons => {      
    var pokemonList = pokemons['results'];
    pokemonList.forEach(item => {
        Add2List(item['name'], item['url'], item);
    });
}).catch( error => {
    console.log("can't fetch data from API.")
});

var Add2List = (name, url, item)=>{
    var urlsplited = url.split("/");
    var imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + urlsplited[6] + ".png"

    
    var pokemonDiv = document.getElementById("pokemonlist");
    var card = document.createElement("div")
    card.setAttribute("class", "card col-4");


    var imag = document.createElement("img");
    imag.setAttribute("class", "card-img-top");
    imag.setAttribute("src", imageUrl);
    
    var nameDiv = document.createElement("div")
    nameDiv.setAttribute("class", "card-body");
    var title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerText = name;
    title.style.textTransform = "uppercase"
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", `#staticBackdrop${urlsplited[6]}`);
    button.innerText = "MORE";
    nameDiv.appendChild(title);
    nameDiv.appendChild(button);

    card.appendChild(imag);
    card.appendChild(nameDiv);
    
    pokemonDiv.appendChild(card);

  

let pokemondata = {};
    fetch(url).then(respones => {
        if(respones.ok)
            return respones.json();
    }).then(pokemons => { 
        pokemondata = pokemons    

        var data = document.createElement("p")
        data.innerText = `Weight ${pokemondata['weight']}\nHeight ${pokemondata['height']} \n ability: ${pokemondata.abilities[0].ability.name}`
        modal_body.appendChild(data)

        var img = document.createElement("img")
        img.setAttribute("src", `${pokemondata.sprites.other.home.front_default}`)
        modal_body.appendChild(img)
        console.log(pokemondata.sprites.other.home.front_default)
    }).catch( error => {
        console.log("can't fetch data from API.")
    });

var modal = document.createElement("div")
modal.setAttribute("class", "modal fade")
modal.setAttribute("id", `staticBackdrop${urlsplited[6]}`)
modal.setAttribute("data-bs-backdrop", "static");
modal.setAttribute("data-bs-keyboard", "false");
modal.setAttribute("tabindex", "-1");
modal.setAttribute("aria-labelledby", "staticBackdropLabel");
modal.setAttribute("aria-hidden", "true");

var modal_dialog = document.createElement("div")
modal_dialog.setAttribute("class", "modal-dialog")

var modal_content = document.createElement("div")
modal_content.setAttribute("class", "modal-content")

var modal_header = document.createElement("div")
modal_header.setAttribute("class", "modal-header")

var close_btn = document.createElement("button")
close_btn.setAttribute("type", "button")
close_btn.setAttribute("class", "btn-close")
close_btn.setAttribute("data-bs-dismiss", "modal")
close_btn.setAttribute("aria-label", "Close")

var title = document.createElement("h1")
title.setAttribute("class", "modal-title")
title.setAttribute("id", "staticBackdropLabel")
title.innerText = name


var modal_body = document.createElement("div")
modal_body.setAttribute("class", "modal-body")



modal_header.appendChild(title)
modal_header.appendChild(close_btn)
modal_dialog.appendChild(modal_content)
modal_content.appendChild(modal_header)
modal_content.appendChild(modal_body)
modal.appendChild(modal_dialog)
pokemonDiv.appendChild(modal)

}
