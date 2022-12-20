import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const sounds = [
        {
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        }, {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        }, {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        }, {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        }, {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        }, {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        }, {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        }, {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        }, {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
    ]

const Keyboard = ({play, sound:{keyTrigger, url, keyCode, id}}) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === keyCode) {
      play(keyTrigger, id)
    }
}
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, [])
  return (
    <button id={keyCode} className="drum-pad" onClick={() => play(keyTrigger, id)}>
      <audio className="clip" id={keyTrigger} src={url} />
      {keyTrigger}
    </button>
)}

const Pad = ({play}) => {
  return sounds.map(sound => <Keyboard play={play} sound={sound} />
)}

const Display = ({name}) => {
  return (
    <h2 id="display">{name}</h2>
)}

const App = () => {
  const [soundName, setSoundName] = React.useState("Sound Name")
  
  const play = (keyTrigger, id) => {
    
    const audio = document.getElementById(keyTrigger)
    audio.currentTime = 0
    audio.play()
    setSoundName(id)
  }
  
  return (
    <div id="drum-machine">
      <Pad play={play}  />
      <Display name={soundName}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))