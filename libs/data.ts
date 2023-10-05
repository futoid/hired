import zoho from "@/companies/zoho";
import cred from "@/companies/cred";

const data = async () => {
    try{
        const respose : Array<Object> = [];
        const zohoData  = await zoho();
        const credData = await cred();

        if(zohoData !== undefined){
            zohoData.map((ele) => respose.push(ele));
        }
        if(credData !== undefined){
            credData.map((ele) => respose.push(ele));
        }
        return respose;
    }
    catch(error){
        console.log("Data Error");
    }
}

export default data;