import { useRouteError } from "react-router-dom"

const Errorelement = () => {

    const error = useRouteError();
    console.log(error)

    // error.map((e) => console.log(e));

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
              <i>{error.statusText || error.message}</i>
              <i>{error?.data }</i>
      </p>
    </div>

  )
}

export default Errorelement