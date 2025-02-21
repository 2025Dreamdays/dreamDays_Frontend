const friendsButton = document.getElementById('friendsButton');
const checkDisplayLink = () => {
    window.location.href = "file:///C:/Users/sieun/Desktop/dd/dreamDays_Frontend/loading.html"
}
friendsButton.addEventListener('click', checkDisplayLink);

axios.get("http://swapi.dev/api/people/1")
    .then(res => {
        console.log("Response:", res)
    })

