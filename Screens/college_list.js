var current_page = 1;
const fun = (current_page)  => {
let url ="https://camprec.herokuapp.com/api/college/list/" + current_page
fetch(url,{
method:'GET'
})
.then((r) => r.json())
.then(resp => {
    arr=resp;
    console.log(resp)
    $("#college_list").empty();

    resp.forEach((user) => {

    $("#college_list").append(`
    <tr>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td><input class="btn" type="button" value="delete"></input></td>
    </tr>
    `)
    });

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