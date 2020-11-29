import 'https://vjs.zencdn.net/7.8.4/video.js'

ps5.classList.remove('hidden')

const player = videojs('ps5', {
  controls: true,
  preload: 'auto',
})

export {
  player
}