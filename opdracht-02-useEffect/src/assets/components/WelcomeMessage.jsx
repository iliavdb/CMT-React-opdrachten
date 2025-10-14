import { useEffect, useState } from "react";


const WelcomeMessage = () => {
     const [message, setMessage] = useState();
     useEffect(() => {
       let currentTime = new Date()

       let hours = currentTime.getHours()

       let newMessage = "";

       if (hours < 12 ){
        newMessage = "goedemorgen";
       }
        else if (hours < 18 ) {
            newMessage = "goedemiddag";
        }
        else{
             newMessage = "goedenavond"
            }

            setMessage(newMessage)
       }, [])
             
    return ( 
        <h2>{message}</h2>
     );
}
 
export default WelcomeMessage;