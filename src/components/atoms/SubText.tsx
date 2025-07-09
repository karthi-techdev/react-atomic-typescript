
type SubTextProps = {
    text: string,
 }
 
 export const SubText:React.FC<SubTextProps>=({text})=> {
     return(
        <span>{text}</span>
     )
 }