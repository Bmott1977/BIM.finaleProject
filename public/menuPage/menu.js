

// Delete when database is ready
const menuFoods = [{
    "name": "Hot Dog",
    "price": "$1",
    "description": "Bla"
},{
    "name": "Brat",
    "price": "$2",
    "description": "Bla"
},{
    "name": "Corn Dogs",
    "price": "$1",
    "description": "Bla"
}]

//Modify when database is ready
const generateMenu = ({name, price, description}) => {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    const br = document.createElement('br')
    const names = `${name}`
    const prices = `${price}`
    const descriptions = `${description}`
    ul.append(li)
    li.append(h3)
    li.append(h4)
    li.append(br)
    li.append(p)
    li.append(br)
    h3.textContent = names
    h4.textContent = prices
    p.textContent = descriptions
}


for (let i = 0; i < menuFoods.length; i++) {generateMenu(menuFoods[i])}