import React, {useEffect, useRef, useState} from 'react';

function App() {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');


    // const clearTimer = (e: any) => {
    //     setTimer(seconds);
    //     if (Ref.current) clearInterval(Ref.current);
    //     const id = setInterval(() => {
    //         startTimer(e);
    //     }, 1000)
    //     Ref.current = id;
    // }
    // const getDeadTime = () => {
    //     let deadline = new Date();
    //     deadline.setSeconds(deadline.getSeconds() + seconds);
    //     return deadline;
    // }
    // useEffect(() => {
    //     clearTimer(getDeadTime());
    // }, []);
    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // }

    const createTimerAnimator = () => {
        return (seconds: any) => {};
    };
    const animateTimer = createTimerAnimator();
    const onChangeInput = (e: any) => {
        const totalSeconds = e.target.value.replace(/\D/g, '');
        if(totalSeconds < 86400) {
            e.target.value = totalSeconds;
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
            // const date = new Date(seconds * 1000).toISOString().slice(11, 19);
        } else {
            e.target.value = 'maximum value is 86399';
        }

        // animateTimer(seconds);
        // e.preventDefault()
    }

    const onClickButton = (e: any) => {
        e.target.value = '';
    }

  return (
    <div className="App">
        <input onChange={(e) => onChangeInput(e)}
               placeholder="Seconds"
               type="text"
        />
        {/*<button onClick={(e) => onClickButton(e)}>Start</button>*/}
        {/*<button onClick={onClickReset}>Start</button>*/}
        <br />
        <br />
        <span>{timer}</span>
    </div>
  );
}

export default App;



