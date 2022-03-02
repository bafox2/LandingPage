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

let clear = () => {
    const myNode = document.querySelector('#content')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}