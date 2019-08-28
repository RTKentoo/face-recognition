import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import tachyons from 'tachyons'


function App() {
  return (
    <div>
      <Navigation />
      <Logo /> 
      <ImageLinkForm />
      {/**<FaceRecognition />**/}
    </div>
  )
}

export default App;
