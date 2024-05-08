
// commit out when fetch is working
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

// commit out when fetch is working
const fakefetch = (url) => {
    if (url === '/api/events') {
        return eventInfo
    }
}

//Modify when database is ready
const generateEvents = async () => {
    const response = await fakefetch('/api/events')
    const {name, location, date, hours} = await response//.json()

    response.forEach(({name, location, date, hours}) => {

        const ul = document.querySelector(' div .eventItems  ul')
        const li = document.createElement('li')
        const su = document.createElement('summary')
        const de = document.createElement('details')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const br = document.createElement('br')

        ul.append(li)
        li.append(de)
        de.append(su)
        de.append(h4)
        de.append(p)
        de.append(p2)
        li.append(br)

        su.textContent = name
        su.style.fontWeight = 'bold'
        h4.textContent = location
        p.textContent = date
        p2.textContent = hours
    });



    
}

//for (let i = 0; i < eventInfo.length; i++) {generateEvents(eventInfo[i])}

generateEvents()

