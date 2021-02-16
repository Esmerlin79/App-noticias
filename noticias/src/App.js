import React, {Fragment,useState, useEffect} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import axios from 'axios'
import ListadoNoticia from './components/ListadoNoticia'

function App() {

  const [getCategoria, setCategoria] = useState('')
  const [result, setresult] = useState([])

  useEffect( () =>{
    const consultApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${getCategoria}&apiKey=d4de9ad880aa4c089114ff483f1a333a`
      const response = await axios.get(url)
      setresult(response.data.articles)
    }
    consultApi()
  }, [getCategoria])

  return (
    <Fragment >
      <Header title = 'Buscador de Noticias'/>

      <div className='container white'>
        <Form 
          setCategoria = {setCategoria}
        />
        <ListadoNoticia result={result}/>
      </div>
    </Fragment>
  );
}

export default App;
