var current_page = 1;
const fun = (current_page)  => {
    $("#college_list").empty();
    $("#load").append(`
        <h1 class="loader"></h1>
    `)
let url ="https://camprec.herokuapp.com/api/college/list/" + current_page
fetch(url,{
method:'GET'
})
.then((r) => r.json())
.then(resp => {
    arr=resp;
    console.log(resp)
    $("#load").empty();
    $("#college_list").empty();

    resp.forEach((user) => {

    $("#college_list").append(`
    <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td><input class="btn btn3" type="button" value="delete" onclick=\"deleteTag(this,current_page)\"></input></td>
    </tr>
    `)
    });

});
}
function deleteTag(btn,current_page) {
    // select the row that's concerned
    var row = btn.parentNode.parentNode;
  
    // select the name of this row
    var name = row.children[0].textContent;
  
    // remove the row on client side
    row.parentNode.removeChild(row);
  //remove the row from server side
    let url ="https://camprec.herokuapp.com/api/college/delete"
fetch(url,{
method:'POST',
body: JSON.stringify({
    name: name
  
}),
headers: {
    'Accept':'*/*','Content-Type': 'application/json', 'Accept-Encoding' : 'gzip, deflate, br', 'Connection' : 'keep-alive'
},

})
.then((r) => r.json())
.then(resp => {
fun(current_page)

});
  
  }
function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < 10) {
        current_page++;
        changePage(current_page);
    }
}
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var page_span = document.getElementById("page");
    // Validate page
    if (page < 1) page = 1;
    if (page > 10) page = 10;

    page_span.innerHTML = page;
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == 10) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
    fun(page);
}
window.onload = function() {
    changePage(1);
};