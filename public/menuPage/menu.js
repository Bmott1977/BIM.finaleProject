

// commit out when database is ready
// const menuFoods = [{
//     "name": "Hot Dog",
//     "price": "$1",
//     "description": "Bla"
// },{
//     "name": "Brat",
//     "price": "$2",
//     "description": "Bla"
// },{
//     "name": "Corn Dogs",
//     "price": "$1",
//     "description": "Bla"
// }]

// commit out when fetch is working
// const fakefetch = (url) => {
//     if (url === '/api/menu') {
//         return menuFoods
//     }
// }

//Modify when database is ready
const generateMenu = async () => {
    const response = await fetch('/menu')
    const {name, price, description} = await response.json()

    response.forEach(({name, price, description}) => {

        const ul = document.querySelector(' div .javamenu ul')
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const br = document.createElement('br')

        ul.append(li)
        li.append(h3)
        li.append(h4)
        li.append(br)
        li.append(p)
        li.append(br)

        h3.textContent = name
        h4.textContent = price
        p.textContent = description

    })

    
}

generateMenu()

//or (let i = 0; i < menuFoods.length; i++) {generateMenu(menuFoods[i])}