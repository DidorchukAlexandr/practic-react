
import { useEffect, useState } from "react";
import styles from "./timer.module.scss"
const Timer = () => {
    const [time, setTime] = useState(0);
    const [timerId, setTimerId] = useState(0);

    const start = () => {
        if (!timerId) {
            const id = setInterval(() => {
                setTime(prevState => prevState + 1)
            }, 1000);
            setTimerId(id);
        }
    }
    useEffect(() => {
        return () => reset();
    }, [])
    
    const stop = () => {
        clearInterval(timerId);
        setTimerId(0);
}

    const reset = () => {
        stop();
        setTime(0);
}
    return (
        <div>
            <div>
                <button onClick={start} className={styles.button} disabled={Boolean(timerId)} type="button">Start</button>
                <button onClick={stop} className={styles.button} type="button">Stop</button>
                <button onClick={reset} className={styles.button} type="button">Reset</button>
            </div>
            <div className={styles.time}>{time}</div>
        </div>
    )

}
export default Timer;