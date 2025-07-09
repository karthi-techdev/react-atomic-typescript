
type HeadingProps = {
    title: string,
 }
 
 export const Heading:React.FC<HeadingProps>=({title})=> {
     return(
        <h4 className="m-0">{title}</h4>
     )
 }