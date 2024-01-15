const VoteResult = ({total, republicansPercent, democratesPercent}) => {
    return (
        <>
            <p>Total votes: {total}</p>
            <p>Republicans: {republicansPercent}%</p>
            <p>Democrats: {democratesPercent}%</p>
        </>
)
}
export default VoteResult;