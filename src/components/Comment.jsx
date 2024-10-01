import { useEffect, useState } from "react"
import searchI from '../img/Film-page-search-i.png'



function initialComments() {
    let comments = localStorage.getItem('comment')

    return comments ? JSON.parse(comments) : []
}

function Comment() {

    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState(initialComments())


    useEffect(() => {
        localStorage.setItem('comment', JSON.stringify(commentList))
    }, [commentList])

    function handleChange(e) {
        setComment(e.target.value)
    }

    function handleSend() {
        if(comment.trim) {
            setCommentList(prevComment => [...prevComment,comment])
        }
        setComment('')
    }




    return (
        <section className="f-comment">
            <img src={searchI} alt="search_icon" className="f-search-i" />
            <input 
            type="text" 
            placeholder='Comment' 
            value={comment} 
            className="f-comment_input"
            onChange={handleChange}
            onKeyDown={(e) => e.key === 'Enter' ? handleSend() : ''}
            />
            <button 
            className="f-comment_btn"
            onClick={handleSend}>
                Add
            </button>
            <ul className="f-comment_list">
                {commentList.map((element, index) => {
                    return <li className="f-comment_item" key={index}>{element}</li>
                })}
            </ul>
        </section>
    )
}

export {  Comment  }