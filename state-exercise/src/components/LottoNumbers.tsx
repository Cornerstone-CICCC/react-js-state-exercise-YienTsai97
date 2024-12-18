type Props = {
    handleLottoNumber: () => void
}

const LottoNumbers = ({ handleLottoNumber }: Props) => {
    return (
        <div>
            <button onClick={handleLottoNumber}>
                Generate Lotto Numbers
            </button>
        </div>
    )
}

export default LottoNumbers