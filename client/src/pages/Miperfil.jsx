import React from 'react'

const Miperfil = () => {
  return (

    <div>
     <h1>Mis publicaciones</h1>
     <hr />
     <form action="/">
      <div>
      <label for="nombre">Nombre del Producto:</label>
      <input type="text" id="nombre" name="nombre" required></input>
      </div>

      <div>
      <label for="precio">Precio:</label>
     <input type="number" id="precio" name="precio" step="0.01" required></input>
      </div>
     
     <div>
     <label for="imagen">Imagen:</label>
     <input type="file" id="imagen" name="imagen" accept="image/*" required></input>
     </div>

     <div>
            <button type="submit">Agregar Producto</button>
     </div>
     
     </form>
     
    </div>


    
  )
}

export default Miperfil
