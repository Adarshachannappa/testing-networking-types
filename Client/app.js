
let url = "http://localhost:5050/"


const getData= async () =>{
    try{
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    } catch(err){
        console.log(err);
    }
    finally{
        console.log("finally block");
    }
    
}

getData();