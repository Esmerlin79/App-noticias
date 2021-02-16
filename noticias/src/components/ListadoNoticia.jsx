import React from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types'

const ListadoNoticia = ({result}) => {
    return ( 
        <div className="row">
            {result.map(noticia => ( 
               <Noticia 
                key={noticia.url}
                noticia={noticia}
               /> 
            ))}

        </div>
     );
}
 
ListadoNoticia.propTypes = {
    result: PropTypes.array.isRequired
}
export default ListadoNoticia;