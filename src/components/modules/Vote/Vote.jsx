
import { useState } from "react";
import VoteActions from "./VoteActions/VoteActions";
import VoteBlock from "./VoteBlock/VoteBlock";
import VoteResult from "./VoteResult/VoteResult";
import styles from "./vote.module.scss"
const Vote = () => {

    const [state, setState] = useState({
        republicans: 0,
        democrats: 0,
    });

    const leaveVote = (name) => {
        setState(prevState => {
            const currentValue = prevState[name];
            return {
                ...prevState,
                [name]: currentValue + 1
            }
     })
    }
    const { republicans, democrats } = state;
    const total = republicans + democrats;

    const calcPercent = (name) => {
        const value = state[name];
        if (!total) {
            return 0;
        }
        const result = Math.round((value / total) * 100);
        return result
    }

    const democratesPercent = calcPercent("democrats");
    const republicansPercent = calcPercent("republicans");
    return (
        <div className={styles.wrapper}>
            <VoteBlock title="Leave your vote">
                <VoteActions leaveVote={leaveVote}/>
            </VoteBlock>
            <VoteBlock title="Result">
                <VoteResult total={total} democratesPercent={democratesPercent} republicansPercent={republicansPercent} />
            </VoteBlock>
        </div>
    )
}
export default Vote;