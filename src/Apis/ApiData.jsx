
export async function productAll(){
       const respone = await fetch("https://jsonplaceholder.typicode.com/users").then((respone)=> respone.json())
        return respone;
}
