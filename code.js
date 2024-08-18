const insert= document.querySelector('#insert')
window.addEventListener('keydown', (e)=>{
let key = e.key
let keycode=e.keyCode
let code = e.code
    insert.innerHTML= `<div class="color">
<table class="mytable">
<tr>
<th>key</th>
<th>keyCode</th>
<th>Code</th>
</tr>

<tr>
<td>${e.key===' ' ? 'space': e.key}</td>
<td>${e.keyCode}</td>
<td>${e.code}</td>
</tr> 
</table>
</div>`


// const trow= document.createElement('tr')
// // const trowd= document.createElement('td')
// trow.innerHTML=`
// <td>${key===' ' ? 'space': e.key}</td>
// <td>${keycode}</td>
// <td>${code}</td>`
// document.querySelector('.mytable').appendChild(trow)

// setInterval(insertvalue,2000)
})