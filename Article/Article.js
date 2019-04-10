// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.expandArticle());
    this.delBtn = this.domElement.querySelector(".delBtn");
    this.delBtn.textContent = "x";
    this.delBtn.addEventListener('click', () => {
      this.remove();
    });
  }
remove(){
  this.domElement.parentNode.removeChild(this.domElement); //this was hard to figure out
}
  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articleGen = (title, _date, msg)  => {
  const parArt = document.querySelector('.articles');
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const date = document.createElement('p');
  const p = document.createElement('p');
  const span = document.createElement('span');

  div.className = "article";
  date.className = "date";
  span.className = "expandButton";

  parArt.appendChild(div);
  div.appendChild(h2);
  div.appendChild(date);
  div.appendChild(p);
  div.appendChild(span);

  h2.textContent = title;
  date.textContent = _date;
  p.textContent = msg;
  }

  let temptitle = "This is a new article!"
  let tempMsg = "This is a new article message"
// Invoke new articles here
articleGen(temptitle, "April 10, 2019", tempMsg);








let articles = document.querySelectorAll(".article");
articles.forEach((item) => {
  let delBtn = document.createElement("span");
  item.prepend(delBtn);
  delBtn.className = "delBtn";
  delBtn.style.float = "right";
  delBtn.style.padding = "5px";
  delBtn.style.margin = "5px 0";
  delBtn.style.textAlign = "center";
  delBtn.style.cursor = "pointer";
  new Article(item);
});
