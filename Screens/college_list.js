const getPosts = () => {
    let arr=[]
    fetch('https://camprec.herokuapp.com/api/college/list/1',{
        method:'GET'
    })
    .then((r) => r.json())
    .then(resp => {
         arr=resp;
         console.log(resp)
    });
    // let i;
    // forEach(i in arr) ;{
    //     $('#my_table').append(<tr>
    //             <td>${i.name}</td>
    //             <td>${i.email}</td>
    //             <td><input type="button">delete</input></td>
    //         </tr>);
    //     };
}
document.addEventListener('DOMContentLoaded', function() {
    getPosts()
  })


