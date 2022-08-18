let database = [];

//get general news(Top)
async function getdata(){
    let data= await fetch('https://newsapi.org/v2/top-headlines?country=eg&category=general&apiKey=afb3659dfb7541b2804b14388bacac67')
    let realdata = await data.json();
    realdata = realdata.articles
    displayTopNews(realdata);
}
// call function
getdata();
// display general news (Top)
function displayTopNews(realdata){
    // if description is not exist
    for (let i = 0; i < realdata.length; i++) {
         if(realdata[i].description == null){
            realdata[i].description = 'لا يوجد شرح متوفر حاليا'
    }  
    }
    // if image is not exist
    for (let i = 0; i < realdata.length; i++) {
        if(realdata[i].url == null){
            realdata[i].url = '../img/404.jpg'
    }  
    }
   
    let cartona=`
    <div class="carousel-item active">
    <div class="row">
        <div class="col-md-12 col-lg-6 position-relative">
            <div class="general card">
                <img src="${realdata[1].urlToImage}" alt="" class="w-100 h-img">
                <div class="card-body card-height">
                    <h6 class="font-right">${realdata[1].source.name}</h6>
                    <h3 class="card-title font-right fs-5 fw-bolder">${realdata[1].title}</h3>
                    <p class="card-text font-right">${realdata[1].description.slice(0,220)}</p>  
                    <a href="${realdata[1].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>               
                </div>
            </div>    
        </div>
        <div class="col-md-12 col-lg-6 position-relative">
            <div class="general card">
                <img src="${realdata[2].urlToImage}" alt="" class="w-100 h-img">
                <div class="card-body card-height">
                    <h6 class="font-right">${realdata[2].source.name}</h6>
                    <h3 class="card-title font-right fs-5 fw-bolder">${realdata[2].title}</h3>
                    <p class="card-text font-right">${realdata[2].description.slice(0,220)}</p>  
                    <a href="${realdata[2].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>
                </div>
            </div>    
        </div>
    </div>
    </div>

    <div class="carousel-item">
    <div class="row">
        <div class="col-md-12 col-lg-6 position-relative">
            <div class="general card">
            <img src="${realdata[3].urlToImage}" alt="" class="w-100 h-img">
            <div class="card-body card-height">
                <h6 class="font-right">${realdata[3].source.name}</h6>
                <h3 class="card-title font-right fs-5 fw-bolder">${realdata[3].title}</h3>
                <p class="card-text font-right">${realdata[3].description.slice(0,220)}</p>  
                <a href="${realdata[3].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>
            </div>
        </div>    
    </div>
        <div class="col-md-12 col-lg-6 position-relative">
            <div class="general card">
            <img src="${realdata[4].urlToImage}" alt="" class="w-100 h-img">
            <div class="card-body card-height">
                <h6 class="font-right">${realdata[4].source.name}</h6>
                <h3 class="card-title font-right fs-5 fw-bolder">${realdata[4].title}</h3>
                <p class="card-text font-right">${realdata[4].description.slice(0,220)}</p>  
                <a href="${realdata[4].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>
            </div>
        </div>    
        </div>
    </div>
  </div>

  <div class="carousel-item">
    
    <div class="row">
    <div class="col-md-12 col-lg-6 position-relative">
    <div class="general card">
        <img src="${realdata[5].urlToImage}" alt="" class="w-100 h-img">
        <div class="card-body card-height">
            <h6 class="font-right">${realdata[5].source.name}</h6>
            <h3 class="card-title font-right fs-5 fw-bolder">${realdata[5].title}</h3>
            <p class="card-text font-right">${realdata[5].description.slice(0,220)}</p>  
            <a href="${realdata[5].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>
            </div>
        </div>    
    </div>
    <div class="col-md-12 col-lg-6 position-relative">
    <div class="general card">
      <img src="${realdata[6].urlToImage}" alt="" class="w-100 h-img">
        <div class="card-body card-height">
            <h6 class="font-right">${realdata[6].source.name}</h6>
            <h3 class="card-title font-right fs-5 fw-bolder">${realdata[6].title}</h3>
            <p class="card-text font-right">${realdata[6].description.slice(0,220)}</p>  
            <a href="${realdata[6].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>
        </div>
        </div>    
      </div>
    </div>
  </div>
    `
    document.getElementById('in-carousal').innerHTML = cartona
}


//get main news 
async function changeCategory(Change){
    let data= await fetch(`https://newsapi.org/v2/top-headlines?country=eg&category=${Change}&apiKey=afb3659dfb7541b2804b14388bacac67`)
    let realdata = await data.json();
    realdata = realdata.articles;
    database = realdata;
    console.log(database)
    displayCategory()
    
}


//display main news
function displayCategory(){
    let cartona = '';
    for(let i = 0 ; i < database.length ; i++){
        //if description is not exist
        if(database[i].description == null){
            database[i].description = "لا يوجد شرح متوفر حاليا"
        }
        //if image is not exist
        if(database[i].urlToImage == null){
            database[i].urlToImage = '../img/404.jpg'
        }
        cartona +=`
        <div class="col-md-6 col-lg-4 position-relative">
        <div class="general card">
          <img src="${database[i].urlToImage}" alt="" class="w-100 h-img-content">
          <div class="card-body card-height">
              <h6 class="font-right">${database[i].source.name}</h6>
              <h3 class="card-title font-right fs-5 fw-bolder">${database[i].title.slice(0,80)}</h3>
              <p class="card-text font-right">${database[i].description.slice(0,170)}</p>  
              <a href="${database[i].url}" target="_blank" class="btn text-primary fs-5 py-2 px-4 pos-mine">اكمل قرائة<i class="uil uil-arrow-right"></i></a>               
          </div>
        </div>    
      </div>
        `
    }
    document.getElementById('rowContent').innerHTML = cartona ;
}
//call function
changeCategory('business')
// if user click link get news
let links = document.querySelectorAll('.nav-link-inner')
for(let i = 0 ; i < links.length ; i++){
    links[i].addEventListener('click' , function(e){
         
        changeCategory(e.target.innerHTML);
        document.getElementById('main-header').innerHTML =`
        <h2 class="ps-2">${e.target.innerHTML}</h2>
            <hr>
        `
    })
}

let mainHeader = document.getElementById('main-header')