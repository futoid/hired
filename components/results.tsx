import Card from "./card";
import Cards from "./cards";

const Results = () => {
    return ( 
        <div className=" pt-8">
            <div>
                <p className=" font-medium text-lg">Results, <span className="font-extrabold text-base text-[#21F591] italic">every day is a new opportunity</span></p>
            </div>

            <div className=" h-fit">
                <Cards/>
            </div>
        </div>
     );
}
 
export default Results;
