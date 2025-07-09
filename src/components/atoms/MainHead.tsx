
type MainHeadProps = {
    title: string,
 }
 
 export const MainHead:React.FC<MainHeadProps>=({title})=> {
     return(
        <h3>{title}</h3>
     )
 }