import { Heading } from "../atoms/Heading"
import { SubText } from "../atoms/SubText"

type HeadingGroupProps = {
    title: string,
    text: string,
 }
 
 export const HeadingGroup:React.FC<HeadingGroupProps>=({title,text})=> {
     return(
        <div className="form-header">
            <Heading title={title}/>
            <SubText text={text}/>
        </div>
     )
 }