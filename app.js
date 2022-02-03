async function getProducts() {
  let url = "https://s3.amazonaws.com/open-to-cors/assignment.json";

  try {
    let res = await fetch(url);
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  let products = await getProducts();
  const productList = Object.values(products.products);
  productList.sort( function ( a, b ) { return b.popularity - a.popularity; } );
  let html = "";

  productList.map((product, index) => {
    let htmlSegment = `
      <tr id="productlists">
      <th scope="row">${index+1}</th>
      <td>${product.title}</td>
      <td>${product.subcategory}</td>
      <td>${product.price}</td>
      <td>${product.popularity}</td>
    </tr>
  `;

    html += htmlSegment;
  });

  // let container = document.getElementsByClassName("row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3");
  // container.innerHTML = html;

  document.getElementById("productlists").innerHTML = html;
}

renderUsers();
