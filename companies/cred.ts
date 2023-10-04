import axios from "axios";

interface Details {
    "id" : string,
    "company" : string,
    "title" : any,
    "link" : string,
    "type" : string,
    "location" : string
}

const cred  = async() => {
    const url = "https://api.lever.co/v0/postings/cred?mode=json&department=engineering";
    try{
        const res = await axios.get(url);
        const data = res.data;
        const response : object[] = [];

        data.map((ele : any) =>{
            const obj : object = {
                "id" : ele.id,
                "company" : "Cred",
                "title" : ele.text,
                "type" : ele.categories.commitment,
                "location" : ele.categories.location,
                "link" : ele.applyUrl
            }
            response.push(obj);
        })

        return response;
    }
    catch(error){
        console.log("Cred Error");
    }
}

export default cred;