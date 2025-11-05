import { useState } from "react"
import { axios } from "axios";
import { useDefaultContext } from "../../context/DefaultContext";
export default function ReviewForm() {
    const apiDB = useDefaultContext();
    const initialVals = {
        name: '',
        vote: 1 ,
        text: '' 
    }
    const [formData, setFormData] = useState(initialVals)
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post((apiDB + '3/reviews'), formData, ())
        .then()
        .catch()
    }
    

    return (
        
    )
}