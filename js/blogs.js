// when blog button is clicked then below event listener will work 
document.getElementById('blogs').addEventListener('click', function(){
    const blogs = document.getElementById('blogs');
   blogs.style.color = 'blue';
   const news = document.getElementById('news');
   news.style.color = 'gray';
   const allNewsContainer = document.getElementById('all-news-container');
   const newsContainer = document.getElementById('news-container');
   const categoriesContainer = document.getElementById('categories-container');
   categoriesContainer.style.display = 'none';
   allNewsContainer.style.display = 'none';
   newsContainer.style.display = 'none';
//    location.href = "blogs.html";
const blogsContaier = document.getElementById('blogs-container');
const div = document.createElement('div');
div.innerHTML = `
<div class="variable-difference">
        <article>
          <h3>Difference Between var, let And Const Keywords</h3>
          <table class="first-talbe">
            <thead>
              <tr>
                <th>Var</th>
                <th>Let</th>
                <th>Const</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The scope of a var variable is functional scope.</td>
                <td>The scope of a let variable is block scope.</td>
                <td>The scope of a const variable is block scope.</td>
              </tr>
              <tr>
                <td>It can be updated and re-declared into the scope.</td>
                <td>
                  It can be updated but cannot be re-declared into the scope.
                </td>
                <td>It cannot be updated or re-declared into the scope.</td>
              </tr>
              <tr>
                <td>It can be declared without initialization.</td>
                <td>It can be declared without initialization.</td>
                <td>It cannot be declared without initialization</td>
              </tr>
              <tr>
                <td>
                  It can be accessed without initialization as its default value
                  is “undefined”.
                </td>
                <td>
                  It cannot be accessed without initialization otherwise it will
                  give ‘referenceError’.
                </td>
                <td>
                  It cannot be accessed without initialization, as it cannot be
                  declared without initialization.
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>

      <!-- difference between arrow and regular funciton  -->
      <div class="function-difference">
        <article>
          <h3>difference between arrow and regular funciton</h3>
          <table>
            <thead>
              <tr>
                <th>Arrow Funciton</th>
                <th>Regular Funciton</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Arrow Funciton allows a developer to accomplish the same
                  result with fewer lines of code and approximately half the
                  typing.
                </td>
                <td>
                  On The OtherHands, Regular Functon needs more line of codes
                </td>
              </tr>
              <tr>
                <td>
                  Curly brackets aren’t required if only one expression is
                  present: <br />
                  <pre>let add = (x, y) => x + y;</pre>
                </td>
                <td>
                  Curly brackets arenrequired although one expression is present
                </td>
              </tr>
              <tr>
                <td>
                  If there’s only one argument, then the parentheses are not
                  required either: <br />
                  <pre>let squareNum = x => x * x;</pre>
                </td>
                <td>
                  If there’s only one argument, then the parentheses are
                  required <br />
                  <pre>squareNum(x){x*x}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
      <!-- why should we use templetes string  -->
      <div class="templetes-string">
        <article>
          <h3>Why should you use template string?</h3>
          <p>
            Templates Strings are an alternative to string concatenation. They
            allow variables to be injected into string literals to form fully
            interpolated strings. They also honor newline characters and other
            breaks within the string literal.
          </p>
        </article>
      </div>
      <!-- When to Use forEach(), map(), filter(), find(), and reduce() on JavaScript Arrays  -->
      <div class="array-methods">
        <h3>When to Use forEach(), map(), filter(), find(), and reduce() on JavaScript Arrays</h3>
        <article>
          <h4>.forEach()</h4>
          <p>
            Function .forEach() is another form of just a plain for loop that
            can be used to iterate through array items. This case of a function
            is used for more complex arrays, for example, an array of objects
            with a lot of entries than just an array of integers.
          </p>
        </article>
        <article>
          <h4>.map()</h4>
          <p>
            Function .map() is a manipulative function that can modify each
            element’s content in an array that it is called on. This function
            returns a new array with modified values, the array that it is
            called on will stay still. This function is useful for adding a
            little change to an already existing array, for example adding a
            property to an object or modifying it. Its construction and use are
            identical to the previous function .forEach() and both can be used
            interchangeably.
          </p>
        </article>
        <article>
          <h4>.filter()</h4>
          <p>
            Function .filter() is a search function that returns all the
            elements that fulfil the assigned condition. You can search by
            simple terms, for example, that element is equal to a certain
            integer, or by more advanced terms, for example, searching for an
            object with certain property that is equal to something. Both
            examples have a very frequent use as a developer. This function
            returns an array of found results, if any, even if only 1 match is
            found. If a function does not find any match, it simply returns an
            empty array.
          </p>
        </article>
        <article>
          <h4>.find()</h4>
          <p>
            Function .find() is also a search function like the previous but
            they differ in one small detail — this function returns only one
            match in an array. If in an array is more than one result, the
            function will return the first that has matched.
          </p>
        </article>
      </div>
`;
blogsContaier.appendChild(div);
})

// after clicking blogs,when user will click news,below event listener will work
document.getElementById('news').addEventListener('click', function(){
    const News = document.getElementById('news');
   News.style.color = 'blue';
   const blogs = document.getElementById('blogs');
   blogs.style.color = 'gray';
   const categoriesContainer = document.getElementById('categories-container');
   categoriesContainer.style.display = 'block';
   const allNewsContainer = document.getElementById('all-news-container');
   const newsContainer = document.getElementById('news-container');
   allNewsContainer.style.display = 'block';
   newsContainer.style.display = 'block';
   const blogsContaier = document.getElementById('blogs-container');
   blogsContaier.style.display = 'none';
})

