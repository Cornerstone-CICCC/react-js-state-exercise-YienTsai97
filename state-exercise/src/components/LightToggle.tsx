type Props = {
    handleLightOn: () => void,
}

const LightToggle = ({ handleLightOn }: Props) => {
    return (
        <div>
            <button onClick={handleLightOn}> Toggle Lights </button>
        </div >
    )
}

export default LightToggle