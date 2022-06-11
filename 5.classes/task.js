class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount; 
        this.state = state;
        this.type = type;
    }

     fix(){
        this.state = this.state * 1.5;
        return this.state
    }

    set state(value){
        if (value < 0 ){
            this._state = 0
            
        } else if (value > 100){
            this._state = 100
        } else {
            this._state = value;
        }
        
        return this._state
    }

    get state(){
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type ){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, releaseDate, pagesCount, state, type ){
        super(releaseDate, pagesCount, state, type);
        this.type = "book";
        this.author = author;
    }

    
}

class NovelBook extends Book {
    constructor(author, releaseDate, pagesCount, state, type){
        super(author, releaseDate, pagesCount, state, type);
        this.type = "novel"
    }
    
}

class FantasticBook extends Book {
    constructor(author, releaseDate, pagesCount, state, type){
        super(author, releaseDate, pagesCount, state, type);
        this.type = "fantastic"
    }
    
}


class DetectiveBook extends Book {
    constructor(author, releaseDate, pagesCount, state, type){
        super(author, releaseDate, pagesCount, state, type);
        this.type = "detective"
    }
    
}
class Library {
    constructor(name){
        this.name = String(name);
        
    }

    books = [];

    addBook(book){
        let arr = []
        arr.push(book);
        if (book.state > 30) {
            this.books.push(book)
        }

    }

    findBookBy(type, value){
        let findBook = this.books.find(item => item[type] === value);
        if (findBook == undefined) {
            return null;
        } else {
            return findBook;
        }
    }

    giveBookByName(bookName){
        let giveBook = this.books.find(book => book.name === bookName)
        if (giveBook === undefined){
            giveBook = null;
        }

        this.books = this.books.filter(book => book.name !== bookName);
        
        return giveBook;
        

        }
    }


    class Student {
        constructor(name){
            this.name = name;
            this.subject = []
        }
        

        addMark(mark, subject){
            this.subject.push(subject)
            let marks = this.subject.find(item => item === subject);
            if (marks !== undefined){
                marks.push(mark)
                this.subject = this.subject.find(item => item === subject).push(marks)
            }
            
    }


    
    }
        
    




// Задача 2



