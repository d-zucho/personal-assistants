import './App.css'
import ProfileCard from './components/ProfileCard'
import AlexaImg from './assets/alexa.png'
import SiriImg from './assets/siri.png'
import CortanaImg from './assets/cortana.png'

// * Styles
import 'bulma/css/bulma.css'

function App() {
  return (
    <div>
      <section class='hero is-primary'>
        <div class='hero-body'>
          <p class='title'>Personal Digital Assistants</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <h1>from app</h1>
          <div className='columns'>
            <div className='column is-3 is-offset-1'>
              <ProfileCard
                title={'Alexa'}
                handle='@alexa99'
                image={AlexaImg}
                description='Alexa was created by Amazon and helps.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title={'Siri'}
                handle='@siri01'
                image={SiriImg}
                description='Siri is made by Apple. It is being phased out.'
              />
            </div>
            <div className='column is-3'>
              <ProfileCard
                title={'Cortana'}
                handle='@cortana32'
                image={CortanaImg}
                description='Cortana was made by Microsoft. Who knows?'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
