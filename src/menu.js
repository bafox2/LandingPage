//maybe make cards based off an object 
//maybe add those objects to an array and create the items automatically

const itemFactory = (name, desc, season, image) => {

    return { name, desc, season, image };
};

item1 = itemFactory("Beet Sunrise", "Hand dug beets sliced to precision and prepared with a vinigrette", "Spring", "./pageImages/beetgarden.jpg")
item2 = itemFactory("Spring's Bounty", "Carefully molded into a freshly bloomed sapling, this dish reflects the freshness of the season", "Spring", "./pageImages/beandish.jpg")
item3 = itemFactory("Caviar", "Sourced locally, caviar from a local farm near Higginsville", "All", "./pageImages/caviar.jpg")
item4 = itemFactory("Oragami Surprise", "Inspired by the Japanese craft, this ginger dish delights in design and taste", "Fall", "./pageImages/oragami.jpg")
item5 = itemFactory("Orange Delight", "Little known citrus farm 'Durotar Harvest' delivers our fruit daily, and is showcased here", "Summer", "./pageImages/orangedelight.jpg")
item6 = itemFactory("Little Italy", "Proscuetto, melon, and an apple glazed yoghurt star in this Italian inspired special", "Spring", "./pageImages/proscuetto.jpg")
item7 = itemFactory("Quail Egg", "Stolen right from the nest, you can't have a more fresh taste", "Spring", "./pageImages/quailegg.jpg")

//create dom elements for each object, add each dom element to a div, add each div to the menu

// function getMenu {
//     let menu = []
//     for (i = 0; i < 7; i++) {
//         menu.push(`item[${i}]`)

//     }
//     console.log(menu)
//     return menu
// }

let menu = []
menu.push(item1, item2, item3, item4, item5, item6, item7)
console.log(menu)

function getMenu() {
    for (i = 0; i < 7; i++) {
        let card = document.createElement(card)
        card.setClass("menuitem")
        let foodname = document.createElement("h1")
        let fooddesc = document.createElement("p")
        let season = document.createElement('span')
        let foodpic = document.createElement('img')
        foodname.innerText = menu[i].name
        fooddesc.innerText = menu[i].desc
        season.innerText = menu[i].season
        foodpic.setAttribute("src", menu[i].image)
        card.appendChild(foodname, fooddesc, season, foodpic)
        document.querySelector('#content').appendChild(card)
        console.log('worked')

    }
}
export default { getMenu }