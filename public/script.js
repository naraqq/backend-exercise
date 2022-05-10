

let lists = document.getElementById('lists')
let buttonList = document.getElementById("buttonList")
buttonList.addEventListener("click", list)
function list() {
 fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => generateEl(data));
  function generateEl(data) {

    const bookNames = data.books.map(e => e.title)
    const reversed = bookNames.reverse();
        var ul = document.createElement('ul');
        ul.setAttribute('id','proList');

        document.getElementById('lists').appendChild(ul);
        reversed.forEach(renderProductList);

        function renderProductList(element) {
            var li = document.createElement('li');
            li.setAttribute('class','items-li');

            ul.appendChild(li);

            li.innerHTML=li.innerHTML + element;
        }

  }

}

const authors = document.getElementById("authors")
authors.addEventListener("click", () => { window.open('api/authors')})

const allbooks = document.getElementById("allbooks")
allbooks.addEventListener("click", () => { window.open('api/allbooks')})

const isbn = document.getElementById("isbn")
isbn.addEventListener("click", () => { window.open('api/allisbn')})

const isbn_form = document.getElementById("isbn_form")
isbn_form.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.target);
})

