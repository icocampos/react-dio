import React, { Fragment } from 'react'
import ErrorBoundary from './ErrorBoundary'

const store = [{ 
  type: 'Roupa'
}, { 
  type:'Calçado'
}, {
   type:'Camiseta'
}]

function Column({ type }) {
  return (
    <tr>
      <td>{type}</td>
    </tr> 
  )
}

function App () {

  const renderColums = (element, key) => ( 
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>  
  )  


  return (
    <table>

        {store.map(renderColums)}

    </table>
  )
}

export default App