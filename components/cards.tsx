import Card from "./card";
import data from "@/libs/data";

interface CardProps {
    prop : Object
}

const Cards : React.FC<CardProps> = async({prop}) => {
    console.log(prop);
    return (
        <>
            
        </>
    )
}
 
export default Cards;