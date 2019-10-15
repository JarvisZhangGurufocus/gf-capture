<template>
  <div @click="startCapture">
    <span :class="capturing ? 'breath': ''"> ⊚ </span> <slot/>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'

export default {
  name: 'gf-capture',
  data () {
    return {
      capturing: false,
      target: null
    }
  },
  methods: {
    startCapture () {
      this.target = null
      this.capturing = true
      window.addEventListener('mousemove', this.onMouseMove)
    },
    onMouseMove (e) {
      if (!e.target) { return }
      if (!document.body.contains(e.target)) { return }
      if (e.target === this.target) { return }

      this.target = e.target

      const rect = e.target.getBoundingClientRect()
      
      const pre = document.body.querySelectorAll('.capture-fake-modal')
      pre.forEach(ele => {
        ele.classList.remove('capture-fake-modal')
        ele.removeEventListener('click', this.onClick)
      })

      e.target.classList.add('capture-fake-modal')
      e.target.addEventListener('click', this.onClick)
    },
    onClick (e) {
      e.preventDefault()

      this.capturing = false
      window.removeEventListener('mousemove', this.onMouseMove)
      const pre = document.body.querySelectorAll('.capture-fake-modal')
      pre.forEach(ele => {
        ele.classList.remove('capture-fake-modal')
        ele.removeEventListener('click', this.onClick)
      })

      if (!this.target) {
        return
      }

      html2canvas(this.target).then((canvas) => {
        this.$emit('on-capture', canvas)
      })
    }
  }
}
</script>

<style>
.breath {
  -webkit-animation: breath 2s infinite ease-in-out alternate;
  animation: breath 2s infinite ease-in-out alternate;
}

.capture-fake-modal {
  background: #409EFF77 !important;
  cursor: pointer !important;
}

@-webkit-keyframes breath {
  0% {opacity: .2;}70% {opacity: 1;}to {opacity: .2;}
}
@keyframes breath {
  0% {opacity: .2;}70% {opacity: 1;}to {opacity: .2;}
}
</style>
