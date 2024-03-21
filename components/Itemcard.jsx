

const Itemcard = ({ name, description, price,imageId, imgurl }) => {
//    return <></>
    return (
      <div className="item-cards">
            <div className="itme-card">
                <div>
                    <h2>{name}</h2>
                    <p>{"Rs. " + (price / 100).toFixed(2)}</p>
                    <p>{description}</p>
                </div>
                <div>
                    <img src={imgurl + imageId} height={60}></img>
                    <button >Add +</button>
                </div>
            </div>
      </div>

  )
}

export default Itemcard