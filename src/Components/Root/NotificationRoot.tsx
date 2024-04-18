import { ReactNode } from "react";
import { ContentRoot } from "./style";

interface NotificationRootProps {
  children: ReactNode;
}

function NotificationRoot({children}: NotificationRootProps){
 return(
    <ContentRoot>
      {children}
    </ContentRoot>
  )
}
export default NotificationRoot