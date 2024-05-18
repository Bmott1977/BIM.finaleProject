const contactInfo = [{
    "email": "FranksTruck@gmail.com",
    "Phone" : "920-345-1433"

}]

const generateContact = async () => {
    const response = await contactInfo

    response.forEach(({email, Phone}) => {
        const ul = document.querySelector('div .javacontact')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')

        ul.append(h3)
        ul.append(h4)

        h3.textContent = email
        h4.textContent = Phone
    } )
}
generateContact()