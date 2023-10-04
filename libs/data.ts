import zoho from "@/companies/zoho";
import cred from "@/companies/cred";

const data = async () => {
    try{
        const respose : object[][] = [];
        const zohoData  = await zoho();
        const credData = await cred();

        if(zohoData !== undefined)respose.push(zohoData);
        if(credData !== undefined)respose.push(credData);
        
        return respose;
    }
    catch(error){
        console.log("Data Error");
    }
}

export default data;