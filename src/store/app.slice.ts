import { createSlice  } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
        isCartOpen: false,
        notification: {
            show: false,
            variant: "success",
            message: ""

        }
    },
    reducers:{
        showNotification: (state, action) => {
            state.notification = {...action.payload, show: true}
        },
        showError: (state, action) => {
            state.notification = {
                show: true,
                variant: "danger",
                message: action.payload
            }
        },
        closeNotification: (state) => {
            state.notification.show = false
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsCartOpen: (state, {payload}) => {
            state.isCartOpen = payload
        }
    }
})

export const request = (
    myRequest,
    options
) => async (dispatch) => {
    dispatch(setIsLoading(true))
    const {
        notificationMessage,
        notificationError,
        handleError
    } = options || {}
    try{
        const res = await myRequest()
        if(notificationMessage)
            dispatch(showNotification({
                message: notificationMessage,
                variant: "success"
        }))
        return res
    } catch(error){
        console.log(error)
        if(handleError) return handleError(error)
        if(error.response.status === 403){
            localStorage.setItem("token", "")
        }
        dispatch(showNotification({
            message: notificationError || "There was an error",
            variant: "danger"
        }))
    } finally{
        dispatch(setIsLoading(false))
    }
}

export const { closeNotification, setIsLoading, showNotification, showError, setIsCartOpen} = appSlice.actions

export default appSlice.reducer