import { useState } from "react"
import { useEffect } from "react"
import './Styles/Categories.css'
import {Link} from 'react-router-dom'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://elliehl-board-games-project.herokuapp.com/api/categories'
        ).then(res => res.json())
        .then(categories => {
            setIsLoading(false)
            setCategories(categories.categories)  
        }).catch((err) => {
            setIsLoading(false)
            setError(err)
        })
        }, [])

        if (isLoading) {
            return <h4>Loading...</h4>
        }

        if (error !== null) {
            return <h4>Error: Please go back</h4>
        }
    
        return (
            <div>
                <ul>
                    {categories.map(
                        ({
                            slug,
                            description
                        }) => {
                        return (
                            <Link to={`/categories/${slug}`} key={slug} >
                            <li className='category-item'>
                                <h3 className="slug">{slug.charAt(0).toUpperCase() + slug.slice(1)}</h3>
                                <br/>
                                Description: {description}
                            </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )


            
        
}

export default Categories