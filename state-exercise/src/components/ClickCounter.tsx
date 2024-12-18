type Props = {
    handleCounter: () => void
}

const ClickCounter = ({ handleCounter }: Props) => {
    return (
        <div>
            <button onClick={handleCounter}>
                Click Counter
            </button>
        </div>
    )
}

export default ClickCounter