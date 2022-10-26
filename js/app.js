//************************** below code for showing  default all categories section will show ************************
//function for loading all categories api
const loadingAllCategories = () =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
  .then(res => res.json())
  .then(data => showCategories(data.data.news_category))
}
// function for all categories show 
const showCategories = (categories) => {
  const allCategoriesSection = document.getElementById('all-categories');
  for(const category of categories){
    const a = document.createElement('a');
    a.classList.add = ('text-secondary','text-decoration-none','fs-5','nav-item');
    a.innerText = `${category.category_name}`;
    allCategoriesSection.appendChild(a);
  }
}

loadingAllCategories(); // by default call



// ******************* for understanding purpose,how my js file will  work,i am marking as steps-1,steps-2... ,means: steps-1 first complete, then steps-2, then steps-3.. *********************


// **************************** step-5 ***************************
// function for loading specific category news by category id dynamically 
const allNewsLoad = (category_id, categoryName) => {
    const url =`https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(response => response.json())
    .then(data => dataShow(data.data, categoryName))
}

// **************************** step-6 ***************************
// this function will show category information 
function dataShow(allNews, categoryName){
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = ``;
  let count = 0; //for counting number of news in each category
    allNews.forEach(news => {
      const newsDiv = document.createElement('div');
       newsDiv.classList.add('row','bg-white', 'rounded-4', 'mt-4');
      newsDiv.innerHTML=`
      <div class="col-lg-3 col-md-5 col-sm-12 p-3">
      <img
        style="width: 260px; height: 100%;"
        class="rounded-4 w-100"
        src="${news.image_url}"
        alt=""
      />
      
    </div>
    <div class="col-lg-9 col-md-7 col-sm-12 pt-4 pb-4 pe-4 ps-3">
      <h3>${news.title}</h3>
      <p class="text-elipsis-2 text-black-50">${news.details}</p>
    
      <!-- new report information  -->
      <div
        class="d-flex flex-wrap justify-content-between align-items-center"
      >
        <div class="d-flex align-items-center">
          <img
            class="rounded-pill"
            width="40px"
            height="40px"
            src="${news.author.img}"
            alt=""
          />
          <div class="ms-2">
            <h5 class="mb-0">${news.author.name?news.author.name:'Anonymous'}</h5>
            <p class="mb-0">${news.author.published_date?news.author.published_date:'No Date'}</p>
          </div>
        </div>
        <div class="d-flex">
          <p class="mb-0"><i class="fa-regular fa-eye"></i></p>
          <p class="mb-0 ms-2">${news.total_view?news.total_view+'K':'No Views'}</p>
        </div>
        <div class="d-flex">
          <i class="fa-regular fa-star star-1"></i>
          <i class="fa-regular fa-star star-2"></i>
          <i class="fa-regular fa-star star-3"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <div onclick="loadingDetailsNews('${news._id}');" id="details" class="text-primary" data-bs-toggle="modal" data-bs-target="#showDetailsModal">
          <i title="show details news" class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
      `;
      newsContainer.appendChild(newsDiv);
      count++;
    });
    toggleSpinner(false);
    //below code for showing dynamically number of news message abobe the news container
    const foundContainer = document.getElementById('numberOfnews');
    foundContainer.innerHTML = ``;
    const div = document.createElement('div');
    div.style.color='blue';
    div.style.padding = '10px';
    div.innerHTML = `
    <h5>${count} items Found For ${categoryName}</h5>
    `;
    foundContainer.appendChild(div);
}


// **************************** step-3 ***************************
// function for loading all cateogries api provided by phero 
const loadAllCategoriesApi  = (categoryName) =>{
  const url = 'https://openapi.programming-hero.com/api/news/categories';
  fetch(url)
  .then(res => res.json())
  // call function by all news arguments as categories array 
  .then(data => getCategoryId(data.data.news_category, categoryName))
}

// **************************** step-4 ***************************
// this function find id and will call load specific category news by founded id 
function getCategoryId(categories, categoryName){
  for(const category of categories){
    if(category.category_name=== categoryName){
      const id = category.category_id;
      allNewsLoad(id, categoryName);
      return;
    }
  }
  toggleSpinner(false);
}

// ************************* step-1 ******************************
// when user click any category,then target category news will show 
document.getElementById('all-categories').addEventListener('click', function(event){
  toggleSpinner(true);
const home = document.getElementById('welcome-section');
const targetElement = event.target;
const targetText = targetElement.innerText;
if(targetText!='Home'){
       home.style.display = 'none';
       loadAllCategoriesApi(targetText);
     }
     else{
      toggleSpinner(false);
      const newsContainer = document.getElementById('news-container');
      home.style.display='block';
      newsContainer.innerHTML = ``;
      const numOfNewsContainer = document.getElementById('numberOfnews');
      // numOfNewsContainer.style.display = 'none';

     }
// **************************** step-2 ***************************
})




// this is spinner funciton
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById('spinner');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  else{
    loaderSection.classList.add('d-none');
  }
}



// ****************** step-1 details show *******************
// when user click arrow Symbol, detials news api will loading(onclick function added in arrow symbol)
const loadingDetailsNews = (news_id) => {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayNewsDetails(data.data[0]));
}

// ****************** step-2 details show *******************
// function for show details news 
const displayNewsDetails = (news) => {
 
  const newsTitle = document.getElementById('news-title');
  newsTitle.innerText =`${news.title}`;
  const authorName = document.getElementById('author-name');
  authorName.innerText =`${news.author.name? news.author.name:'Unknown Author'}`;
  const publishedDate = document.getElementById('published-date')
publishedDate.innerText = `${news.author.published_date? news.author.published_date:'Date is Not Avaialbe'}`;
const newsThumbnail = document.getElementById('news-thumbnail');
newsThumbnail.innerHTML =`
<img style="width: 90%; height:300px;" src="${news.thumbnail_url}">
`;
newsThumbnail.style.display ='flex';
newsThumbnail.style.justifyContent = 'center';
const newsDetailsContainer = document.getElementById('details-container');
newsDetailsContainer.innerText = `${news.details}`;
}
