import React, { useState, useEffect } from 'react'
import { firebaseConfig } from '../../auth/config'
import {
  Container,
  Header,
  Slogan,
  MainSection,
  Datas,
  InformationOfDatas,
  ConfirmedCases,
  RecoveredCases,
  SeriousCases,
  Deaths
} from './style'
import moment from 'moment'
import axios from 'axios'
import Lottie from 'react-lottie'
import { loadingOptions } from '../../utils/lottieOptions'

moment.locale('pt-br')

export default function HomePage() {
  const [user, setUser] = useState({})
  const [countryData, setCountryData] = useState(null)

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
    <Container>
      <Header>
        <Slogan>
          <h1>
            COVID-19{' '}
            <span>
              <i>Statistics</i>
            </span>
          </h1>
        </Slogan>

        <button onClick={() => firebaseConfig.auth().signOut()}>Sair</button>
      </Header>

      <MainSection>
        <InformationOfDatas>
          <h2>
            País:{' '}
            <span>
              {countryData ? (
                countryData.country
              ) : (
                <Lottie options={loadingOptions} height={60} width={60} />
              )}
            </span>
          </h2>
          <h2>
            Última atualização:{' '}
            <span>
              {moment
                .utc(
                  countryData ? (
                    countryData.lastUpdate
                  ) : (
                    <Lottie options={loadingOptions} height={60} width={60} />
                  )
                )
                .format('DD/MM/YYYY')}
            </span>
          </h2>
        </InformationOfDatas>

        <Datas>
          <ConfirmedCases>
            <p>Casos Confirmados:</p>
            <h1>
              {countryData ? (
                countryData.confirmed.toLocaleString('pt-br')
              ) : (
                <Lottie options={loadingOptions} height={60} width={60} />
              )}
            </h1>
          </ConfirmedCases>

          <SeriousCases>
            <p>Casos Graves:</p>
            <h1>
              {countryData ? (
                countryData.critical.toLocaleString('pt-br')
              ) : (
                <Lottie options={loadingOptions} height={60} width={60} />
              )}
            </h1>
          </SeriousCases>

          <RecoveredCases>
            <p>Casos Recuperados:</p>
            <h1>
              {countryData ? (
                countryData.recovered.toLocaleString('pt-br')
              ) : (
                <Lottie options={loadingOptions} height={60} width={60} />
              )}
            </h1>
          </RecoveredCases>

          <Deaths>
            <p>Mortes:</p>
            <h1>
              {countryData ? (
                countryData.deaths.toLocaleString('pt-br')
              ) : (
                <Lottie options={loadingOptions} height={60} width={60} />
              )}
            </h1>
          </Deaths>
        </Datas>
      </MainSection>
    </Container>
  )
}
