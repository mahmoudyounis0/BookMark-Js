var x = document.querySelector('.btn');
var SiteName = document.querySelector('.content_inputs .in-1');
var Url = document.querySelector('.content_inputs .in-2');
var content_table = document.getElementById('tableContent');
var array_collect = [], sites = {};
var i = 0;
x.addEventListener('click', function () {
    if (SiteName.value != "" || Url.value != "") {
        sites = {
            siteName: SiteName.value,
            url: Url.value
        }
        array_collect.push(sites);
        displayall();
        clear();
    }
});

function displayall() {
    var collect = "";
    for (let i = 0; i < array_collect.length; i++) {
        collect += `<tr>
        <td>${i + 1}</td>
        <td>${array_collect[i].siteName}</td>
        <td><a href="${array_collect[i].url}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square text-info"></i></a></td>
        <td><i class=" fa-solid fa-xmark text-danger" onclick=del(${i});></i></td>
        </tr>`
    }
    content_table.innerHTML = collect;
}
function clear() {
    SiteName.value = "";
    Url.value = "";
}
function del(i) {
    array_collect.splice(i, 1);
    displayall();
}










// content.innerHTML=`
// <td>1</td>
//           <td>facebook</td>
//           <td><a href="https://www.facebook.com/" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square text-info"></i></a></td>
//           <td><i class=" fa-solid fa-xmark text-danger"></i></td>
//         </tbody>`