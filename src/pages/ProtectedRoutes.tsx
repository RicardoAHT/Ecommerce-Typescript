import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    // accedo al valor del estado global
    const credential = useSelector(store => store.credentials)
    if(credential !== null){ // si es distinto de nulo ya se valido por ende permito el acceso
        return <Outlet/>
    }else{
        return <Navigate to="/login"/>
    }
}

export default ProtectedRoutes
