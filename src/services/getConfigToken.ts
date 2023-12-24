const getConfigToken = () => {
    return{
        headers: {
            Authorization:`JWT ${localStorage.getItem("token")}`
        }
    }
}
       
export default getConfigToken