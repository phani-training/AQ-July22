//create a class to represent a book
//Entity class. 
class Book{
    constructor(id, title, price, author){
        this.id =id;
        this.title =title
        this.price = price
        this.author = author;
    }

}


class BookRepositore{
    constructor(){
        this.bookList = []; //create a blank array when the bookRepositore is instantiated.  
        this.addNewBook(new Book(111, "JavaScript Learning", 500, "Andrew Torslen"));
        this.addNewBook(new Book(112, "HTML 5 Learning", 500, "Smith Kuber"));
        this.addNewBook(new Book(113, "Learning Kannada", 500, "SS Shastri"));
        this.addNewBook(new Book(114, "2 States", 500, "Chetan Bhagat"));
        this.addNewBook(new Book(115, "Bangalore Sight Seeing", 500, "Shivaram Karanth"));
    }

    //Create
    addNewBook(book){
        this.bookList.push(book);
    }

    //Update
    updateBook(book){
        for (let i = 0; i < this.bookList.length; i++) {
            if(this.bookList[i].id == book.id){
                this.bookList.splice(i, 1, book);
                return;
            }
        }
        throw "Book not found to update";
    }

    //delete
    deleteBook(id){
        let selected = this.getBookById(id);
        if(selected == undefined){
            throw "Book not found to delete"; //throw is another form of jump statement used when U want to raise an exception.
        }
        const index = this.bookList.indexOf(selected);
        this.bookList.splice(index, 1);
    }

    //Read
    getAllBooks() {
        return this.bookList;
    }

    //Read
    getBookById(id){
        return this.bookList.find((book) => book.id == id);
    }
}


