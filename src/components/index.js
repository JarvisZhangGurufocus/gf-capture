import GfCapture from './GfCapture'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(GfCapture.name, GfCapture)
}

export default GfCapture