const create = () =>{
const nam = document.getElementById('name')
const email = document.getElementById('email')
const location = document.getElementById('location')
const year = document.getElementById('year')
const website = document.getElementById('website')
const video = document.getElementById('video')
const password = document.getElementById('password')
const twitter= document.getElementById('twitter')
const facebook= document.getElementById('facebook')
const instagram= document.getElementById('instagram')
const linkedin= document.getElementById('linkedin')
const Button = document.getElementById('addbtn')
Button.addEventListener('click', event => createPost(nam.value, email.value,location.value,year.value,website.value,video.value,password.value,twitter.value,facebook.value,instagram.value,linkedin.value))
}
const createPost = (name,email,location,year,website,video,password,twitter,facebook,instagram,linkedin) => {
    
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
        password:password,
        social_media : {
          twitter :twitter,
          facebook : facebook,
          linkedin : linkedin,
          instagram : instagram
      }
    }),
    headers: {
        'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'
    },
    })
  .then((r) => r.json())
  .then((resp) => {
      console.log(resp.data)
      console.log(resp.status)
    window.alert("Company added Successfuly");
  })
  .catch(error => {
    console.error('There was an error!');
    
});
}