
const loadAllPhone = async (status,brandname) => {
    console.log("Working")
    document.getElementById('spin').style.display = "none"

    try {

        const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        const data = await res.json()
 

        if(status){
            displayAllPhone(data.data)
        }
        else{
            displayAllPhone(data.data.slice(0,6))

        }

    } catch (error) {
        console.log(error)

    }

}

const displayAllPhone = (phones) => {

    console.log(phones)

}


const handleSearch = () => {
    document.getElementById('spin').style.display = "block"
    setTimeout(() => {
        loadAllPhone()
    }, 1000)

}

loadAllPhone()