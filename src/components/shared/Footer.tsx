import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
        <span>infocontacto@ecommerce.com</span>
        <span>+57 300 000 0000</span>
        <div className='footer__container'>
            <span>Términos y Condiciones</span>
            <span>Política de Privacidad</span>
        </div>
        <span>©2024 Creado por Rick con react y node</span>
    </footer>
  )
}

export default Footer
