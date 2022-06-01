let contactOl = document.querySelector('.contacts_ol')

let inputName = document.querySelector('.input_name'),
    inputNum = document.querySelector('.input_phone');

function btnSubmit() {
    if (inputName.value.length < 1 && inputNum.value.length < 1) {
        alert('Ma`lumot kiriting?')
    } else {
        
        let contactLi = document.createElement('li');
        contactLi.classList.add('contact_li')
        contactOl.append(contactLi)
    
        let pName = document.createElement('p'),
            pNum = document.createElement('p'),
            btnRemove = document.createElement('button');
    
        pName.classList.add('contact_row');
        pNum.classList.add('contact_row');
        btnRemove.classList.add('cnt_remove');
        
        contactLi.append(pName);
        contactLi.append(pNum);
        contactLi.append(btnRemove);
        
        btnRemove.textContent = 'Remove';
        
        pName.textContent = inputName.value.toLocaleUpperCase();
        pNum.textContent = inputNum.value.toLocaleUpperCase();
    
        inputName.value = '';
        inputNum.value = '';
    
        btnRemove.onclick = function remove() {
            contactOl.removeChild(contactLi)
        }
    }


    
}

