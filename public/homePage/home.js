

// Delete when database is ready
const eventInfo = [{
    "name": "Charity",
    "location": "Oshkosh",
    "date": "4/30/2024",
    "hours": "12pm - 5pm"
},
{
    "name": "Charity",
    "location": "Oshkosh",
    "date": "4/30/2024",
    "hours": "12pm - 5pm"
}]

//Modify when database is ready
const generateEvents = ({name, location, date, hours, description}) => {
    const ul = document.querySelector(' div .eventItems  ul')
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const br = document.createElement('br')
    const names = `${name}`
    const locations = `${location}`
    const dates = `${date}`
    const hour = `${hours}`

    ul.append(li)
    li.append(h3)
    li.append(h4)
    li.append(p)
    li.append(p2)
    li.append(br)

    h3.textContent = names
    h4.textContent = locations
    p.textContent = dates
    p2.textContent = hour
}


for (let i = 0; i < eventInfo.length; i++) {generateEvents(eventInfo[i])}// Delete when database is ready
