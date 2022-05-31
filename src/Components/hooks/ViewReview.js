import { useEffect, useState } from "react"

const useReview = () =>{
    const [reviews, setReview] = useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return [reviews, setReview]
}
export default useReview;