const VideoReducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_VIDEO": {
            console.log("Setting current video")
            return { 
                ...state, 
                currentVideo: action.payload 
            }
        }
        case "ADD_FAVORITE_VIDEO": 
            return { 
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case "SET_VIDEOS":
            return {
                ...state,
                videos: action.payload
            }
        case "REMOVE_FAVORITE_VIDEO":
            return {
                ...state,
                favorites: action.payload
            }
        case "SET_COMING_FROM_FAVORITES": {
            return {
                ...state,
                isComingFromFavorites :action.payload
            }
        }
        default:
            return state;
    }
}

export default VideoReducer;