const bookArr = [
    {
        title: "Some title",
        author: "Some author",
        year: "2021"
    },
    {
        title: "Some title",
        author: "Some author",
        year: "2020"
    },
    {
        title: "Some title",
        author: "Some author",
        year: "2019"
    }
]

function Books(){
    return (
    <>
    <h1>Book List</h1>
    <form>
        <input type="text" />
        <button type="button">Add a book</button>
    </form>
    <ul>
        {bookArr.map((item=>{
            return (
            <div>
            <li>{`${item.title}, ${item.author}, ${item.year}`}</li>
            <button type="button">delete</button>
            </div>)
        }))}
    </ul>
    </>
    )
}

export default Books