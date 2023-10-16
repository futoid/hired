import Card from "./card";
import Cards from "./cards";

const Results = () => {
    return ( 
        <div className=" pt-8 lg:pt-16">
            <div>
                <p className=" font-medium text-lg lg:text-2xl">Results, <span className="font-extrabold text-base text-[#47e17a] italic">every day is a new opportunity</span></p>
            </div>

            <div className=" h-fit">
                <Cards/>
            </div>
        </div>
     );
}
 
export default Results;
