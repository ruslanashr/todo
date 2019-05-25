var col_todo = document.querySelector('.col-todo');
const input = document.querySelector('.form-control')

function addtodo(el) {
    const text = `<div class="input-group mb-3 todo">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input"></input>
                        </div>
                    </div>
                        <span>${el}</span>
                        <button type="button" class="btn btn-danger">X</button>
                </div>`
    const position = "beforeend";
    col_todo.insertAdjacentHTML(position, text);
}
document.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const el = input.value.trim();
        if(el){
            addtodo(el);
        }
        input.value = "";
    }
})
document.addEventListener("click", function(event){
    let button = event.target;
    const buttonclass = button.classList.contains('add');
    const el = input.value.trim();
    if(buttonclass){
        if(el){
            addtodo(el);
        }
        input.value = "";
    }
})

function removetodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}
col_todo.addEventListener("click", function(event){
    let element = event.target;
    const elementclass = element.classList.contains('btn-danger');
    if(elementclass){
        removetodo(element);
    }
})