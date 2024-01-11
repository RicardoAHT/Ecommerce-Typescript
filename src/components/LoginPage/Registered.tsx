import React from 'react'

interface RegisteredProps {
  registered: boolean;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Registered: React.FC<RegisteredProps> = ({ registered, setRegistered}) => {

    const handleRegistered = () =>{
      setRegistered(!registered)
    }
    

  return (
    <div className='registered'>
        {
            registered
            ?
            <p className='registered__p'>Estas registrado? <span className='registered__span' onClick={handleRegistered}>Log In</span></p>
            :
            <p className='registered__p'>Aun no estas registrado? <span className='registered__span' onClick={handleRegistered}>Sign In</span></p>
        }
    </div>
  )
}

export default Registered
