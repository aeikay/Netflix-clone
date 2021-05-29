import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Rowpost from './Components/Rowpost/Rowpost'
import { api_key } from './constants/constants'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Rowpost
        title='Netflix originals'
        url={`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`}
      />
      <Rowpost
        title='Action'
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`}
        isSmall={true}
      />
      <Rowpost
        title='Comedy'
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`}
        isSmall={true}
      />
      <Rowpost
        title='Horror'
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`}
        isSmall={true}
      />
      <Rowpost
        title='Romance'
        url={`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`}
        isSmall={true}
      />
      ,
    </div>
  )
}

export default App
