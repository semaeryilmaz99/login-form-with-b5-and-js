function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.sayTitle = function() {
        console.log(this.title)
    };
}

let theHobbit = new Book('The Hobbit', 'j. r. Tolkien', '596');
let theLordOfTheRings = new Book('lotr', 'somebody', '457');

theHobbit.sayTitle();