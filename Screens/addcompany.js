const create = () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const location = document.getElementById('location')
    const year = document.getElementById('year')
    const website = document.getElementById('website')
    const video = document.getElementById('video')
    const password = document.getElementById('password')
    const Button = document.getElementById('addbtn')
    Button.addEventListener('click', event => createPost(name.value, email.value,location.value,year.value,website.value,video.value,password.value))
}
const createPost = (name,email,location,year,website,video,password) => {
    
    console.log(1)
    fetch('https://camprec.herokuapp.com/api/company/signup', {
    method: 'POST',
    body: JSON.stringify({
        name: name,
        email: email,
        location:location,
        year_of_established:year,
        website:website,
        vedio_link:video,
        password:password
    }),
    headers: {
        'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'
    },
    })
  .then((r) => r.json())
  .then((resp) => {
      console.log(res.data)
    window.alert("Company added Successfuly");
  })
  .catch(error => {
    console.error('There was an error!');
    
});
}