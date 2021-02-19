console.log("%cAl rights reserved !", "color:orange");

const vehicules = document.querySelector(".vehicules");
const form = document.querySelector(".reservation form");
const actualise = document.querySelector(".actualise");


const initialize = () => {

    vehicules.innerHTML = form.innerHTML = "";

    data.vehicules.map(mapsElements);

}



const data = {
    vehicules: [{
            name: "moto",
            price: 10,
            img: "https://freepngimg.com/thumb/motorcycle/1-moto-png-image-motorcycle-png-picture-download.png",
            boiteVitesse: [

            ],
            carbirant: [
                { name: "electrique", percent: 5 }, { name: "escence", percent: 14 }
            ]

        },
        // end
        {
            name: "citadine",
            price: 12,
            img: "https://i1.wp.com/www.carideal.com/blog/wp-content/uploads/2018/02/volkswagen-up-2018-e1518202458842.png?resize=770%2C364",
            boiteVitesse: [
                { name: "mannuelle", percent: 14 }
            ],
            carbirant: [
                { name: "electrique", percent: 5 }, { name: "diesel", percent: 21 }, { name: "hybride", percent: 9 }, { name: "escence", percent: 14 }
            ]

        },
        // begin

        {
            name: "compact",
            price: 14,
            img: "https://st.automobilemag.com/uploads/sites/10/2015/11/2015-toyota-corolla-s-at-sedan-angular-front.png",
            boiteVitesse: [
                { name: "mannuelle", percent: 14 }
            ],
            carbirant: [
                { name: "diesel", percent: 21 }, { name: "hybride", percent: 9 }, { name: "escence", percent: 14 }

            ]

        },
        // end
        {
            name: "berline",
            price: 20,
            img: "https://unfallhilfe-berlin.de/wp-content/uploads/2019/07/mercedes-benz-2845333_640.png",
            boiteVitesse: [
                { name: "automatique", percent: 5 }
            ],
            carbirant: [
                { name: "diesel", percent: 21 }, { name: "hybride", percent: 9 }, { name: "escence", percent: 14 }

            ]

        },
        // begin
        // end
        {
            name: "Utilitaire",
            price: 16,
            img: "https://www.autoavantages.fr/images/voitures/defaut/std/6030-std.png",
            boiteVitesse: [
                { name: "mannuelle", percent: 14 }
            ],
            carbirant: [
                { name: "diesel", percent: 21 }

            ]

        },
        // begin
        // end
        {
            name: "Engine de chantier",
            price: 900,
            img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.preventalis.fr%2Fextranet%2Fdocuments%2Fimages%2FR372m%2520c9.jpg&f=1&nofb=1",
            boiteVitesse: [
                { name: "mannuelle", percent: 14 }
            ],
            carbirant: [
                { name: "electrique", percent: 5 }, { name: "diesel", percent: 21 }, { name: "hybride", percent: 9 }, { name: "escence", percent: 14 }

            ]

        },
        // begin
        // end
        {
            name: "camion",
            price: 900,
            img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F09%2FCargo-Truck-Free-PNG-Image.png&f=1&nofb=1",
            boiteVitesse: [
                { name: "mannuelle", percent: 14 }
            ],
            carbirant: [
                { name: "diesel", percent: 21 }

            ]

        },
        // begin

    ]
}

const mapsElements = (item, index) => {

    vehicules.innerHTML += `
    <div class="vehicule" data-index="${index}">
    <img src="${item.img}" alt="">
    <div class="vehicule-body">
        <h3>${item.name}</h3>
    </div>
</div>
    `

    ;
    const vehicule = document.querySelectorAll(".vehicule");
    vehicule.forEach(item => {
        item.addEventListener("click", onSelect);
    })
}

const mapForm = index => {
    form.innerHTML = "";
    const { boiteVitesse, carbirant } = data.vehicules[index];
    if (boiteVitesse.length > 0) {
        boiteVitesse.map((item, index) => {
            if (index === 0) form.innerHTML += "<h2> Boite Vitesse :  </h2>";
            form.innerHTML += `<input type="radio" value="${item.percent}" name="bv" id="bv"/> ${item.name}`;
        })
    }
    if (carbirant.length > 0) {
        carbirant.map((item, index) => {
            if (index == 0) form.innerHTML += `    <h2>    Carburant :      </h2>`;
            form.innerHTML += `
            <input type="radio" value="${item.percent}" name="carb"  id="carb"/> ${item.name}
            <br>
            `;
        })

    }
    if (carbirant.length > 0 || boiteVitesse.length > 0) {
        form.innerHTML += `
          <h2>
            Number of days :
        </h2>
        <input type="number" name="number" min="1" max="20">
      
 <input type="hidden" name="price" value="${data.vehicules[index].price}" />
        <input type="submit" value="Submit"> 
        `;
    }
}
const onSelect = e => {
    const index = e.target.parentNode.getAttribute("data-index");
    HideUnselectedItems(index);
    mapForm(index);
}

const calcul = () => {

    const { bv, carb, price, number } = form;
    let pricecarb = 0,
        pricebv = 0,
        total = 0;
    try { if (carb.value !== undefined) pricecarb = (Number(carb.value) / 100) * price.value; } catch (error) { console.error(error); }

    try { if (bv.value !== undefined) pricebv = (Number(bv.value) / 100) * price.value; } catch (error) { console.error(error); }

    total = (Number(price.value) + pricecarb + pricebv) * number.value;

    console.log(total);
    document.querySelector(".resultat").innerHTML = total + " $";
    scrollTo(0, 0);
    // Prix total = (prix de véhicules + percentage carburant + percentage boite à vitesse)*durée de réservation

}

const onSubmit = e => {
    e.preventDefault();
    calcul();

}

const HideUnselectedItems = i => {
    vehicules.innerHTML = "";
    const filtredData = data.vehicules.filter((item, index) => index == i);
    filtredData.map(mapsElements);
    const vehicule = document.querySelectorAll(".vehicule");
    vehicule.forEach(item => {
        item.removeEventListener("click", onSelect);
    })
}



data.vehicules.map(mapsElements);

actualise.addEventListener("click", () => {
    initialize();
});
form.addEventListener("submit", onSubmit);