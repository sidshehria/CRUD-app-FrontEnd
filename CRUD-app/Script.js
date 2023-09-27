let addBtn = document.getElementById('add_btn')
        addBtn.addEventListener('click', addProduct)
        let parentList = document.getElementById('parentList');
        function addProduct(e){
            if(parentList.children[0].className == "emptyMsg"){
                parentList.children[0].remove()
            }
            let currentBtn = e.currentTarget;
            let currentInput = currentBtn.previousElementSibling;
            let currentProductName = currentInput.value;

            let newLi = document.createElement('li')
            //newLi.classList.add('list-group-item')
            newLi.className = "list-group-item d-flex justify-content-between"
            newLi.innerHTML = `<h3 class="flex-grow-1">${currentProductName}</h3>
                <button class="btn btn-warning mx-3" onclick="editProduct(this)">Edit</button>
                <button class="btn btn-danger" onclick="removeProduct(this)">Remove</button> `

            parentList.appendChild(newLi);
        }

        function removeProduct(currElement){
            currElement.parentElement.remove();
            let parentList = document.getElementById('parentList');
            if(parentList.children.length <= 0){
                let newEmptyMsg = document.createElement("h3")
                newEmptyMsg.classList.add("emptyMsg")
                newEmptyMsg.textContent = "List is Empty. Please enter Product Name!!"
                parentList.appendChild(newEmptyMsg);
            }
        }

        function editProduct(currElement){
            if(currElement.textContent == "Done"){
                currElement.textContent = "Edit"
                let currentProductName = currElement.previousElementSibling.value
                let currHeading = document.createElement('h3');
                currHeading.className = "flex-grow-1"
                currHeading.textContent = currentProductName
                currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling);

            }else{
            currElement.textContent = "Done"
            let currProductName = currElement.previousElementSibling.textContent;
            let currInput = document.createElement('input');
            currInput.type = "text"
            currInput.placeholder = "Product Name"
            currInput.className = "form-control"
            currInput.value = currProductName;

            currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
            }
        }