const Assistant = ({data}) => {

    return (
        <div className="card">
            <div className="card-body">
                <div >
                    <span className="tag tag-assistant">Assistant</span>
                    <h4> {data.name}</h4>
                    <p>{data.group}</p>
                </div>
            </div>
        </div>
    );
}

export default Assistant
