import { useState, useEffect } from 'react';


const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {

            setCurrentTime(new Date())

        }, 1000)

        return () => {
            clearInterval(intervalId)
        };
    })

    return ( 
    <div style={{ fontSize: '2rem', textAlign: 'center', marginTop: '50px' }}>
       Huidige tijd: {currentTime.toLocaleTimeString()}
    </div> );
}
 
export default Clock;