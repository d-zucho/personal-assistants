import './App.css'
import ProfileCard from './components/ProfileCard'
import AlexaImg from './assets/alexa.png'
import SiriImg from './assets/siri.png'
import CortanaImg from './assets/cortana.png'

function App() {
  return (
    <div className='App'>
      <h1>from app</h1>
      <img src={AlexaImg} alt='Something' />
      <ProfileCard title={'Alexa'} handle='@alexa99' />
      <img src={SiriImg} alt='Siri' />
      <ProfileCard title={'Siri'} handle='@siri01' />
      <img src={CortanaImg} alt='Cortana' />
      <ProfileCard title={'Alexa'} handle='@cortana32' />
    </div>
  )
}

export default App
