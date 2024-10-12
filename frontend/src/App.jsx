import { useEffect, useState } from 'react'
import CreateBlog from './components/CreateBlog/CreateBlog.jsx'
import axios from 'axios';
import ShowBlogs from './components/CreateBlog/ShowBlogs.jsx';

function App() {

  const [Blogs, setBlogs] = useState([]);
  const API_URL = 'http://localhost:4000/';

  useEffect(() => {
    async function getblogs() {
      try {
        const response = await axios.get(`${API_URL}`)
        return response.data
      } catch (error) {
        console.log(error);
      }
    }

    getblogs().then((response) => {
      setBlogs(response)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const blogdeleter = (_id) => {
    async function deleteblog() {
      try {
        const response = await axios.delete(`${API_URL}api/v2/deleteblog?_id=${_id}`)
        return response.data
      } catch (error) {
        console.log(error);
      }
    }
    deleteblog().then((response) => {
      setBlogs(response)
    }).catch((error) => {
      console.log(error);
    })
  }

  const EditBloger = (blog) => {
    async function EditBloger() {
      try {
        // pass object using query parmes convert object in string using stringify
        // const response = await axios.patch(`${API_URL}api/v3/editblog?blog=${JSON.stringify(blog)}`)

        // pass object using body params {}=>header after pass object in case i have no header so i only pass object 
        const response = await axios.patch(`${API_URL}api/v3/editblog`, { blog })
        return response.data
      } catch (error) {
        console.log(error);
      }
    }

    EditBloger().then((response) => {
      setBlogs(response)
      // console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <CreateBlog setBlogs={setBlogs} />
      {/* <h1>Blogs</h1>
      <br /><br /> */}
      {
        Blogs.map((blog, id) => {
          return (
            <ShowBlogs blog={blog} id={id} blogdeleter={blogdeleter} EditBloger={EditBloger} />
          )
        })
      }
    </>
  )
}

export default App
