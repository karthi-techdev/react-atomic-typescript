import { Link } from "react-router-dom"


type RedirectProps = {
    context: string,
    linkName: string,
    linkUrl: string,
 }
 
 export const Redirect:React.FC<RedirectProps>=({context,linkName,linkUrl})=> {
     return(
        <span>{context} <Link to={linkUrl}>{linkName}</Link></span>
     )
 }