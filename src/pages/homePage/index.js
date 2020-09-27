import React, { useState, useEffect } from 'react'
import { firebaseConfig } from '../../auth/config'
import axios from 'axios'

export default function HomePage() {
  const [user, setUser] = useState({})
  const [countryData, setCountryData] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    try {
      const userId = firebaseConfig.auth().currentUser.uid

      firebaseConfig
        .database()
        .ref('/users/' + userId)
        .once('value')
        .then((snapshot) => {
          setUser(snapshot.val())
          getLatestCountryDataByName(snapshot.val().country)
        })
    } catch (error) {
      alert(error.message)
    }
  }

  const getLatestCountryDataByName = (countryName) => {
    axios({
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/country',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': 'c228db00f3msh5ee5fe3e92df7d7p1ca913jsn297c12b0fb18',
        useQueryString: true
      },
      params: {
        format: 'json',
        name: countryName
      }
    })
      .then((response) => {
        setCountryData(response.data[0])
        console.log(response.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>HomePage</h1>
      <h3>Olá, {user.name}</h3>
      <h4>Region: {user.country}</h4>
      <p>Infectados: {countryData.confirmed}</p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Logout</button>
    </div>
  )
}
