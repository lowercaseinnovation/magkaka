import React, { useEffect, useReducer } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createPerson as CreatePerson } from './graphql/mutations'
import { onCreatePerson } from './graphql/subscriptions'
import './styles/Forms.css';

// import uuid to create a unique client ID
const { v4: uuidv4 } = require('uuid');

const CLIENT_ID = uuidv4();

// create initial state
const initialState = {
  name: '', neighborhood: '', city: '', province: '', country: '', persons: []
}

// create reducer to update state
function reducer(state, action) {
  switch(action.type) {
    case 'SETPERSONS':
      return { ...state, persons: action.persons }
    case 'SETINPUT':
      return { ...state, [action.key]: action.value }
    case 'ADDPERSON':
      return { ...state, persons: [...state.persons, action.person] }
    default:
      return state
  }
}

function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // subscribe in useEffect
    useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreatePerson)).subscribe({
        next: (eventData) => {
          const person = eventData.value.data.onCreatePerson
          if (person.clientId === CLIENT_ID) return
          dispatch({ type: 'ADDPERSON', person  })
        }
    })
    return () => subscription.unsubscribe()
  }, [])

  async function createPerson() {
    const { name, neighborhood, city, province, country } = state
    if (name === '' || neighborhood === '' || city === '' || province === '' || country === '') return
    const person = {
      name, neighborhood, city, province, country
    }
    const persons = [...state.persons, person]
    dispatch({ type: 'SETPERSONS', persons })
    console.log('person:', person)
    
    try {
      await API.graphql(graphqlOperation(CreatePerson, { input: person }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating person...', err)
    }
  }

  // change state then user types into input
  function onChange(e) {
    dispatch({ type: 'SETINPUT', key: e.target.name, value: e.target.value })
  }

  // add UI with event handlers to manage user input
  return (
    <div>
        <h1 className="Main-Header">Create your profile</h1>
        <label className="Label-Container">
          <span className="Label-Form">Name:</span>
          <input
          name='name'
          placeholder='name'
          onChange={onChange}
          value={state.name}
          className="Input-Style-Main"
          />
        </label>
        <h2 className="Form-Group-Header">Your Address</h2>
        <div className="Address-Form-Container"> 
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
        </div>
        
      <button onClick={createPerson} className="Button">Create Profile</button>
      {
        state.persons.map((u, i) => (
          <div key={i}>
            <p>{u.name}</p>
            <p>{u.neighborhood}</p>
            <p>{u.city}</p>
            <p>{u.province}</p>
            <p>{u.country}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Profile;