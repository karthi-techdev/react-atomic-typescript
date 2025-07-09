import { MainHead } from "../atoms/MainHead"
import { MainText } from "../atoms/MainText"

type MainGroupProps = {
    title: string,
    text: string,
 }
 
 export const MainGroup:React.FC<MainGroupProps>=({title,text})=> {
     return(
        <div className="main-text">
            <MainHead title={title}/>
            <MainText text={text} />
        </div>
     )
 }