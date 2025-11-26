import Message from "./Message";

const MessageList = ({name, message}) => {
  console.log(message)
    return ( 
        <>
    
         {message.map((m) => (
        <Message name={name} message={m} />
      ))}

      
    
      </>
     );
}
 
export default MessageList;