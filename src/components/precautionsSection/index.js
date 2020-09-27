import React from 'react'
import {
  washHandsOptions,
  distanceOptions,
  stayHomeOptions
} from '../../utils/lottieOptions'
import Lottie from 'react-lottie'
import {
  Precautions,
  WashHandsTopic,
  DistanceTopic,
  StayHomeTopic
} from './style'

export const PrecautionsSection = () => {
  return (
    <Precautions>
      <h2>Cuidados contra o novo Coronavírus</h2>
      <WashHandsTopic>
        <Lottie options={washHandsOptions} height={200} width={200} />
        <div>
          <span>
            Lave com frequência as mãos até a altura dos punhos, com água e
            sabão ou então higienize com álcool em gel 70%.
          </span>
        </div>
      </WashHandsTopic>

      <DistanceTopic>
        <div>
          <span>
            Mantenha uma distância mínima cerca de 2 metros de qualquer pessoa
            tossindo ou espirrando.
          </span>
        </div>
        <Lottie options={distanceOptions} height={200} width={200} />
      </DistanceTopic>

      <StayHomeTopic>
        <Lottie options={stayHomeOptions} height={200} width={200} />
        <div>
          <span>
            O ideal é permanecer em casa durante o período mais crítico da
            infecção. Por isso, se você puder, fique dentro de casa. É
            fundamental.
          </span>
        </div>
      </StayHomeTopic>
      <span>Precisamos vencer essa juntos. Faça sua parte!</span>
    </Precautions>
  )
}
