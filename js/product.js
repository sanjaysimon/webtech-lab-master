const productData = [
  {
    name: "FanFoot",
    sport: "Football",
    specification: ["Rs.1450/-", "Discount offer", "<strong>Color options</strong> available"],
    stockYear: 2019,
    photo: "pic/cosco.jpg"
  },
  {
    name: "Hockeyyy Stickz",
    sport: "Hockey",
    stockYear: 2018,
    photo: "pic/adidas.jpg"
  },
  {
    name: "Glovz",
    sport: "Boxing",
    specification: ["Rs.850/-", "Combo Offer", "<strong>Color option</strong> available"],
    stockYear: 2020,
    photo: "pic/gloves.jpeg"
  }
];

function year(syear){
  let calculatedYear = new Date().getFullYear() - syear;
  if(calculatedYear == 1){
    return '1 year ago'
  }else if (calculatedYear == 0){
    return 'Brand new!'
  }else{
    return `since ${calculatedYear} years`
  }
}

function spec(spec){
  return `
  <h4>Specifications</h4>
  <ul class="specs-list"> 
  ${spec.map((sp) => `<li>${sp}</li>`).join('')}
  </ul>
  `
}

function sportTemplate(pro){
  return `
  <div class="sport">
    <img class="pro-photo" src="${pro.photo}">
    <h2 class="pro-name">${pro.name} <span class="type">(${pro.sport})</span></h2>
    <p><strong>Stock Year:</strong> ${year(pro.stockYear)}</p>
    ${pro.specification ? spec(pro.specification):''}
  </div>
  `
}

document.getElementById("app").innerHTML = `
<h1 class="app-title">Products (${productData.length} results)</h1>
${productData.map(sportTemplate).join('')}
<p class="footer">These ${productData.length} stocks were added recently. Check back soon for fresh stocks.</p>
`