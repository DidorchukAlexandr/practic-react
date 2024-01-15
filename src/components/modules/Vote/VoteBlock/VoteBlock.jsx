import styles from "./vote-block.scss";

const VoteBlock = ({title, children}) => {
    return (
        <div className={styles.block}>
            <h3 className={styles.blockTitle}>{title}</h3>
        {children}
        </div>
)
}
export default VoteBlock;