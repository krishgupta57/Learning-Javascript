async function dataaccess() {
    let data = await fetch('http://localhost:3000/userdetails')
    let res = await data.json()
    console.log(res)
    let finaldata = res.map((i)=>`
        <tr>
        <td> ${i.name} </td>
        <td> ${i.city} </td>
        <td> ${i.age} </td>
        <td> ${i.contact} </td>
        <td> ${i.email} </td>
        </tr>
        `)

        document.querySelector('#data').innerHTML = finaldata
}

dataaccess()

