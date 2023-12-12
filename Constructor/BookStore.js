function Book(title,author,genre,price){
    this.title=title;
    this.author=author
    this.genre=genre
    this.price=price
}

function Author(name,birthYear,nationality){
    this.name=name
    this.birthYear=birthYear
    this.nationality=nationality
}


Book.prototype.getBookInfo=function(){
    console.log(`
    Title Of The Book : ${this.title}
    Author Of The Book : ${this.author}
    Genre Of The Book : ${this.genre}
    Price Of The Book : ${this.price}`
    )
}
let Book1 = new Book("Rich Dad Poor Dad","Robert Kiyosaki", "Personal Finance", 99)
let Book2 = new Book("Zero To One","Peter Thiel", "Personal Finance", 199)


Book1.getBookInfo()
Book2.getBookInfo()