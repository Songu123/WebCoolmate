var products = JSON.parse(localStorage.getItem("chaybo")) || [];
var modal_add = document.querySelector(".modal-add")[0];
var inputs = document.querySelectorAll(".modal-add .modal-body input");
var i = 1;

readAll();

function readAll() {
    var table = document.querySelector(".table tbody");
    var elements = "";
    products.forEach((e) => {
        elements += `
        <tr>
            <th scope="row">` + i + `</th>
            <td>${e.name}</td>
            <td>${e.price}</td>
            <td class="w-25"><img src="${e.img_1}" class="w-50" alt=""></td> 
            <td class="w-25"><img src="${e.img_2}" class="w-50" alt=""></td> 
            <td>
                <div class="action d-flex">
                    <div class="modal-update">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary edit-product" data-id = "${e.id}"  onclick="editProduct(this)" data-bs-toggle="modal" data-bs-target="#exampleModal">Cập nhật</button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Cập nhật sản phẩm</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input class="id" type="text" placeholder="Nhập id" hidden>
                                        <input class="name" type="text" placeholder="Nhập tên sản phẩm">
                                        <!-- <input type="text" placeholder="Nhập đặc điểm"> -->
                                        <input class="price" type="text" placeholder="Nhập giá">
                                        <!-- <input type="text" placeholder="Nhập giảm giá"> -->
                                        <input class="img_1" type="text" placeholder="Nhập ảnh 1">
                                        <input class="img_2" type="text" placeholder="Nhập ảnh 2">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" onclick="updateProduct()" data-bs-dismiss="modal">Lưu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" onclick="deleteProduct(${products.indexOf(e)})" class="btn btn-danger ms-4">Xoá</button>
                </div>
            </td>
        </tr>`;
        i++;
    });
    table.innerHTML = elements;
}



function addProduct() {
    // Assuming you have already defined the 'products' array somewhere in your code

    var name = document.querySelector(".modal-add #name").value;
    var price = document.querySelector(".modal-add #price").value;
    var img_1 = document.querySelector(".modal-add #img_1").value;
    var img_2 = document.querySelector(".modal-add #img_2").value;

    var newItem = {
        id: "id" + Math.random().toString(16).slice(2),
        name: name,
        price: price,
        img_1: img_1,
        img_2: img_2,
    };

    products.push(newItem);
    localStorage.setItem("chaybo", JSON.stringify(products));
    readAll(); // Assuming readAll is a function to update the UI or perform any other necessary tasks
    resetForm(inputs);
}


function resetForm(formSelector) {
    formSelector.forEach(function(input) {
        input.value = "";
    });
}

function editProduct(current) {
    let id = current.dataset.id
    var obj = products.filter((e) => e.id == id)[0]
    document.querySelector(".modal-update .id").value = obj.id
    document.querySelector(".modal-update .name").value = obj.name
    document.querySelector(".modal-update .price").value = obj.price
    document.querySelector(".modal-update .img_1").value = obj.img_1
    document.querySelector(".modal-update .img_2").value = obj.img_2
}


function updateProduct() {
    var id = document.querySelector(".modal-update .id").value;
    var name = document.querySelector(".modal-update .name").value;
    var price = document.querySelector(".modal-update .price").value;
    var imgSrc1 = document.querySelector(".modal-update .img_1").value;
    var imgSrc2 = document.querySelector(".modal-update .img_2").value;

    var index = products.findIndex((e) => e.id === id);

    if (index !== -1) {
        products[index] = {
            id: id,
            name: name,
            price: price,
            img_1: imgSrc1,
            img_2: imgSrc2
        };

        localStorage.setItem("chaybo", JSON.stringify(products));
        readAll();
    } else {
        console.error("Product with ID " + id + " not found.");
    }
}


// function updateProduct() {
//     var id = document.querySelector(".modal-update .id").value
//     var name = document.querySelector(".modal-update .name").value
//     var price = document.querySelector(".modal-update .price").value
//     var imgSrc1 = document.querySelector(".modal-update .img_1").value
//     var imgSrc2 = document.querySelector(".modal-update .img_2").value

//     var index = products.findIndex((e) => e.id === id)
//     products[index] = {
//         id,
//         name,
//         price,
//         imgSrc1,
//         imgSrc2
//     }
//     localStorage.setItem("chaybo", JSON.stringify(products))
//     readAll()
// }

function deleteProduct(index) {
    var result = confirm("Are you sure to delete?")
    if (result) {
        products.splice(index, 1)
        localStorage.setItem("chaybo", JSON.stringify(products))
        readAll()
    }
}