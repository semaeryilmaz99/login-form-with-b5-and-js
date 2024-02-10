function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.sayTitle = function () {
        console.log(this.title)
    };
    this.sayAuthor = function () {
        console.log(this.author)
    };
}

let theHobbit = new Book('The Hobbit', 'j. r. Tolkien', '596');
let theLordOfTheRings = new Book('lotr', 'somebody', '457');

theHobbit.sayTitle();
theLordOfTheRings.sayTitle();
theHobbit.sayAuthor();
theLordOfTheRings.sayAuthor();