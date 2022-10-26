// when blog button is clicked then below event listener will work 
document.getElementById('blogs').addEventListener('click', function(){
    const blogs = document.getElementById('blogs');
   blogs.style.color = 'blue';
   const news = document.getElementById('news');
   news.style.color = 'gray';
   location.href = "blogs.html";
})

// after clicking blogs,when user will click news,below event listener will work
document.getElementById('news').addEventListener('click', function(){
    const News = document.getElementById('news');
   News.style.color = 'blue';
   const blogs = document.getElementById('blogs');
   blogs.style.color = 'gray';
})

