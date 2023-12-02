const inpaddbtn =  document.getElementById('addbtn');
const inptitle =  document.getElementById('title');
const inpauthor =  document.getElementById('author');
const inppubyear =  document.getElementById('pubyear');
const inpbooklist =  document.getElementById('booklists');

inpaddbtn.addEventListener("click",()=>{
   // console.log("something")
    const title = inptitle.value;
    const author = inpauthor.value;
    const year = inppubyear.value;

    if(!title || !author || isNaN(year))
    {
        alert("please enter valid inputs");
        return;
    }
    const  list = document.createElement('li');
    list.className = 'list-group-item d-flex justify-content-between align-item-center';
    list.innerHTML = `<strong>${title}</strong> By ${author} Year: ${year}
    <button class =" btn btn-danger" onclick ="remove(event)">Remove</button>`;

    inpbooklist.appendChild(list);
    
    inptitle.value = '';
    inpauthor.value = '';
    inppubyear.value = '';
});

function remove(event){
    const list = event.target.parentNode;
    inpbooklist.removeChild(list);
}