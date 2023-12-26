const getConfigToken = () => {
    return{
        headers: {
            Authorization:`Bearer ${localStorage.getItem("token")}`
            //Authorization:`JWT ${localStorage.getItem("token")}`
        }
    }
}
       
export default getConfigToken