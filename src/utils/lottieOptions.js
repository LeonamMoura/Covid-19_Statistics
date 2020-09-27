import washHands from '../components/assets/lotties/wash-hands.json'
import distance from '../components/assets/lotties/distance.json'
import stayHome from '../components/assets/lotties/stay-home.json'

export const washHandsOptions = {
  loop: true,
  autoplay: true,
  animationData: washHands,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export const distanceOptions = {
  loop: true,
  autoplay: true,
  animationData: distance,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export const stayHomeOptions = {
  loop: true,
  autoplay: true,
  animationData: stayHome,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
