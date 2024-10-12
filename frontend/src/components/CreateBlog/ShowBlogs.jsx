import React, { useState } from 'react'

export default function ShowBlogs({ blog, id, blogdeleter, EditBloger }) {

    const [toggle, setToggle] = useState(false)
    const [updateblog, setUpdateblog] = useState(blog)
    
    const edittogglehadler = () => {
        setToggle(!toggle)
    }

    const onChangeHandler = (Event) => {
        setUpdateblog((c) => {
            return (
                { ...c, [Event.target.name]: Event.target.value }
            )
        })
    }

    const submitEditer = (Event) => {
        Event.preventDefault();
        setToggle(!toggle)
        EditBloger(updateblog)
    }

    return (
        <div>
            <hr />
            <p>{id + 1}</p>
            <h3>{blog.title}</h3>
            <h4>{blog.content}</h4>
            <button onClick={() => blogdeleter(blog._id)}>Delete Blog</button>
            <button onClick={edittogglehadler}>Edit Blog</button>
            {
                toggle &&
                <div>
                    <form>
                        <label htmlFor="title" >Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={updateblog.title}
                            id="title"
                            onChange={onChangeHandler}
                        />
                        <br />
                        <label htmlFor="content">content</label>
                        <input
                            type="text"
                            name="content"
                            value={updateblog.content}
                            id="content"
                            onChange={onChangeHandler}
                        />
                        <br />
                        <button onClick={submitEditer}>Edited Blog</button>
                    </form>
                </div>
            }
            <hr />
        </div>
    )
}
