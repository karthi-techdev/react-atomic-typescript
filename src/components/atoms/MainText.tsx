
type MainTextProps = {
    text: string,
 }
 
 export const MainText:React.FC<MainTextProps>=({text})=> {
     return(
        <p>{text}</p>
     )
 }