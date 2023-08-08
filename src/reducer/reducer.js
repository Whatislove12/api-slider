import { getImages } from "../request/images"

export const slideReducer = (state, action) => {
    switch (
        action.type
    ) {
        case 'GETIMAGES': {
            getImages()
            
        } 
    }
}