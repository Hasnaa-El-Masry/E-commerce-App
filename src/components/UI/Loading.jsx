import Skeleton from "react-loading-skeleton"

const Loading = ({num}) => {
    return (
        <>
            {Array.from(Array(num).keys()).map((i) => (
                <div className="col-3" key={i}>
                    <Skeleton height={'350px'} />
                </div>
            ))}
        </>
    )
}

export default Loading