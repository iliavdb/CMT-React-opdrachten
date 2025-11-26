

const CreateMessage = ({message, setMessage, textInput, setTextInput}) => {
    
    const userInputHandler = (e) => {
        setTextInput(e.target.value);

    }
    const subitMessageHandler = (e) => {
    e.preventDefault();

    setMessage([...message, textInput])
    setTextInput('');
    }
    return (
      <form>
          <textarea value={textInput} cols="50" rows="5" onChange={userInputHandler}></textarea>
      <button onClick={subitMessageHandler}>Toevoegen</button>
      </form> 
     );
}
 
export default CreateMessage;