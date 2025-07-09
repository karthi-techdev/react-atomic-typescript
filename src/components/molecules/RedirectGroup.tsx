import { Redirect } from "../atoms/Redirect"

type RedirectGroupProps = {
    context: string,
    linkName: string,
    linkUrl: string,
 }
 
 export const RedirectGroup:React.FC<RedirectGroupProps>=({context,linkName,linkUrl})=> {
     return(
        <div className="redirect-text">
            <Redirect context={context} linkName={linkName} linkUrl={linkUrl} />
        </div>
     )
 }