import React, {useEffect, useRef, useState} from 'react';

function App() {
    const interval = useRef();
    const [isRunning, setIsRunning] = useState(false)
    const [timer, setTimer] = useState('00:00:00');
    const [currentTotalSeconds, setCurrentTotalSeconds] = useState(0);
    const createTimerAnimator = (totalSeconds: any) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        if (totalSeconds > 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const onChangeInput = (e: any) => {
        const totalSeconds = e.target.value.replace(/\D/g, '');
        if (totalSeconds < 86400) {
            e.target.value = totalSeconds;
            setCurrentTotalSeconds(totalSeconds);
            createTimerAnimator(totalSeconds)
        } else {
            e.target.value = 'maximum value is 86399';
        }
    }

    useEffect(() => {
        if (isRunning) {
            // @ts-ignore
            interval.current = setInterval(() => {
                if (currentTotalSeconds === 1) {
                    setIsRunning(false)
                    setTimer('00:00:00')
                }
                const newTotalSeconds = currentTotalSeconds - 1;
                createTimerAnimator(newTotalSeconds);
                setCurrentTotalSeconds(newTotalSeconds);
                console.log(newTotalSeconds)
            }, 1000)
            return () => clearInterval(interval.current)
            }

        }, [isRunning, timer])

    return (
        <div className="App">
            <input onChange={(e) => onChangeInput(e)}
                   placeholder="Seconds"
                   type="text"
            />
            <button onClick={() => setIsRunning(true)}>Start</button>
            <br/>
            <br/>
            <span>{timer}</span>
        </div>
    );
}

export default App;

