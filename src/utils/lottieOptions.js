import washHands from '../components/assets/lotties/wash-hands.json'
import distance from '../components/assets/lotties/distance.json'
import stayHome from '../components/assets/lotties/stay-home.json'
import loading from '../components/assets/lotties/loading.json'

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

export const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}
