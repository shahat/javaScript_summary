class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author; //_author  is a private variable
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer); //anonymous
novel.writer = "newAuthor"; // this is setter
console.log(novel.writer); // newAuthor  and this is the getter
