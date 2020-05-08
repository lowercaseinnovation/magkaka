import React, { useEffect, useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createVisit as CreateVisit } from './graphql/mutations'
import { withAuthenticator } from 'aws-amplify-react'
import { onCreateVisit } from './graphql/subscriptions'
import './styles/Forms.css';


// import uuid to create a unique client ID
const { v4: uuidv4 } = require('uuid');

const CLIENT_ID = uuidv4();

// create initial state
const initialState = {
  place: '', neighborhood: '', city: '', province: '', country: '', visits: []
}

// create reducer to update state
function reducer(state, action) {
  switch(action.type) {
    case 'SETVISITS':
      return { ...state, visits: action.visits }
    case 'SETINPUT':
      return { ...state, [action.key]: action.value }
    case 'ADDVISIT':
      return { ...state, visits: [...state.visits, action.visit] }
    default:
      return state
  }
}

function Visits() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // subscribe in useEffect
    useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateVisit)).subscribe({
        next: (eventData) => {
          const visit = eventData.value.data.onCreateVisit
          if (visit.clientId === CLIENT_ID) return
          dispatch({ type: 'ADDVISIT', visit  })
        }
    })
    return () => subscription.unsubscribe()
  }, [])

  async function createVisit() {
    const { place, neighborhood, city, province, country } = state
    if (place === '' || neighborhood === '' || city === '' || province === '' || country === '') return
    const visit = {
      place, neighborhood, city, province, country
    }
    const visits = [...state.visits, visit]
    dispatch({ type: 'SETVISITS', visits })
    console.log('visit:', visit)
    
    try {
      await API.graphql(graphqlOperation(CreateVisit, { input: visit }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating visit...', err)
    }
  }

  // change state then user types into input
  function onChange(e) {
    dispatch({ type: 'SETINPUT', key: e.target.name, value: e.target.value })
  }

  // add UI with event handlers to manage user input
  return (
    <div>
      <h1 className="Main-Header">Log Your Movement</h1>
      <label className="Label-Container">
          <span className="Label-Form">Place:</span>
          <input
            name='place'
            placeholder='place'
            onChange={onChange}
            value={state.place}
            className="Input-Style-Main"
          />
      </label>
      <label className="Label-Container">
          <span className="Label-Form">Neighborhood:</span>
      <input
        name='neighborhood'
        placeholder='neighborhood'
        onChange={onChange}
        value={state.neighborhood}
        className="Input-Style-Main"
      />
      </label>
      <label className="Label-Container">
          <span className="Label-Form">City:</span>
      <input
        name='city'
        placeholder='city'
        onChange={onChange}
        value={state.city}
        className="Input-Style-Main"
      />
      </label>
      <label className="Label-Container">
          <span className="Label-Form">Province:</span>
      <input
        name='province'
        placeholder='province'
        onChange={onChange}
        value={state.province}
        className="Input-Style-Main"
      />
      </label>
      <label className="Label-Container">
          <span className="Label-Form">Country:</span>
      <input
        name='country'
        placeholder='country'
        onChange={onChange}
        value={state.country}
        className="Input-Style-Main"
      />
      </label>
      <button onClick={createVisit} className="Button">Create Visit</button>
      {
        state.visits.map((v, i) => (
          <div key={i}>
            <p>{v.place}</p>
            <p>{v.neighborhood}</p>
            <p>{v.city}</p>
            <p>{v.province}</p>
            <p>{v.country}</p>
          </div>
        ))
      }
    </div>
  )
}

export default withAuthenticator(Visits, {includeGreetings: true})