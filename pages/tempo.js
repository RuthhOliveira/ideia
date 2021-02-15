function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            {dynamicDateString} (maceió)
        </div>
    )
}

export default Tempo;