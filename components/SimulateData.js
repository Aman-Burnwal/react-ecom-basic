import Fake_Card from "./body/card/Fake_Card";


const SimulateData = () => {

    let data = [];
    for (let i = 0; i < 10; i++) {

        data.push(<  Fake_Card key={ Math.random() } />)
    }

  return (
      <div className="cards">{ data }</div>
  )
}

export default SimulateData