import { useState } from "react"
import axios from 'axios'

function CreateBlog({ setBlogs }) {
    const API_URL = 'http://localhost:4000/api/v1';
    const [Blog, setBlog] = useState({
        title: "",
        content: "",
    });

    function onChangeHandler(Event) {
        setBlog((c) => {
            return { ...c, [Event.target.name]: Event.target.value }
        })
    }

    function submitBlog(Event) {

        Event.preventDefault();
        setBlog({
            title: Blog.title,
            content: Blog.content,
        })

        async function addblog() {
            try {
                const response = await axios.post(`${API_URL}/addblog?title=${Blog.title}&content=${Blog.content}`)
                return response
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        if (Blog.title.trim() === "" || Blog.content.trim() === "") {
            alert("Please Enter Title And Blog")
        } else {
            addblog().then((response) => {
                setBlogs(response.data)
            }).catch((error) => {
                console.log(error);
            })
        }
        setBlog({
            title: "",
            content: ""
        })
    }

    return (
        <div>
            <h1>Hello</h1>
            <div>
                <form>
                    <label htmlFor="title" >Email:</label>
                    <input
                        type="text"
                        name="title"
                        value={Blog.title}
                        id="title"
                        onChange={onChangeHandler}
                    />
                    <br /><br />
                    <label htmlFor="content">content</label>
                    <input
                        type="text"
                        name="content"
                        value={Blog.content}
                        id="content"
                        onChange={onChangeHandler}
                    />
                    <br /><br />
                    <button onClick={submitBlog}>Submit Blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog