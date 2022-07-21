const title = document.getElementById('title');
const desc = document.getElementById('description');
const titlebox = document.getElementById('titlebox');
const descbox = document.getElementById('descbox');
const editbtn = document.getElementById('edit');
const deletebtn = document.getElementById('delete');
const savebtn = document.getElementById('save');
const table = document.getElementById('Table');
const descCont = document.getElementById('desc');

let titleCont = [];
let descC = [];
let id = localStorage.getItem('id');
console.log(id);
savebtn.addEventListener('click', ()=>{
    if(titlebox.value && descbox.value){
        localStorage.setItem("title"+id.toString(), titlebox.value);
        localStorage.setItem("description"+id.toString(), descbox.value);
        localStorage.setItem('id', parseInt(id)+1);
        location.reload();
    }else{
        alert('Please fill the fields to save');
        // const desTr = document.createElement('tr');
        // desTr.classList.add('desc');
        // table.appendChild(desTr);
        // const titleTd = document.createElement('td');
        // const titleTdtxt = document.createTextNode(titlebox.value);
        // titleTd.appendChild(titleTdtxt);
        // desTr.appendChild(titleTd);
    
        // const descTd = document.createElement('td');
        // const descTdtxt = document.createTextNode(descbox.value);
        // descTd.appendChild(descTdtxt);
        // desTr.appendChild(descTd);
    
        // const editBtnElt = document.createElement('button');
        // const editBtnTxt = document.createTextNode("Edit");
        // editBtnElt.appendChild(editBtnTxt);
        // desTr.appendChild(editBtnElt);
    
        // const deleteBtnElt = document.createElement('button');
        // const deleteBtnTxt = document.createTextNode("Delete");
        // deleteBtnElt.appendChild(deleteBtnTxt);
        // desTr.appendChild(deleteBtnElt);
        
        
    }

})
for(let i=0; i<localStorage.length/2-1; i++){
    titleCont.push(localStorage.getItem(`title${i}`));
    descC.push(localStorage.getItem(`description${i}`));
    console.log("this is array",descC);
}
console.log("title", titleCont);
console.log("title length", titleCont.length);
let del;
for(let i = 0; i < titleCont.length; i++){
    console.log(titleCont[i]);
    // const key = localStorage.key(i+1);
    // const value = localStorage.getItem(key);
    // const key2 = localStorage.key(i+0);
    // const value2 = localStorage.getItem(key2);

    const desTr = document.createElement('tr');
    desTr.classList.add('desc');
    table.appendChild(desTr);
    desTr.setAttribute('id', `${i}`);
    const titleTd = document.createElement('td');
    const titleTdtxt = document.createTextNode(titleCont[i]);
    titleTd.appendChild(titleTdtxt);
    desTr.appendChild(titleTd);

    const descTd = document.createElement('td');
    const descTdtxt = document.createTextNode(descC[i]);
    descTd.appendChild(descTdtxt);
    desTr.appendChild(descTd);

    const editBtnElt = document.createElement('button');
    const editBtnTxt = document.createTextNode("Edit");
    editBtnElt.appendChild(editBtnTxt);
    desTr.appendChild(editBtnElt);

    const deleteBtnElt = document.createElement('button');
    const deleteBtnTxt = document.createTextNode("Delete");
    deleteBtnElt.setAttribute('id', "deletebtn");
    deleteBtnElt.appendChild(deleteBtnTxt);
    del = document.getElementById(`${i}`);
    desTr.appendChild(deleteBtnElt);
}

editbtn.addEventListener('click', () => {
    titlebox.value = title.innerHTML;
    descbox.value = desc.innerHTML;
})
deletebtn.addEventListener('click', () => {
    descCont.remove();
    del.remove();
})