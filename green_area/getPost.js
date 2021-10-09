//
//names
var posts = []

const getPosts = (number) =>
{
    //para testear se genera un numero de posts aleatorios. Aqui iria el algoritmo para obtener la informacion de cada post desde la base de datos.

    //return value
    let postData = []

    for (let i = 0; i < number.length; i++) {
        postData.push(
            {
                poster: posts[i % posts.length],
                content: "This is just a sample text of the garbage information the person posted",
            }
        )
        
        return postData
    }
}
export default getPosts