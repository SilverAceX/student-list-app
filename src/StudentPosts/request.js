const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        console.log(json.slice(0, 10))
    } catch (error) {
        console.log(error)
    }
}

const syncFunction = () => {
    //1 
    const bob = {name: "Bob", age: 30}
    //2
    console.log(bob)
    //3
    console.log("Hello")
}