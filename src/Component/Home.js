import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Home() {
    const [users, setUsers] = useState([])
    const { cid } = useParams()


    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:808/courses")
        setUsers(result.data)
    }
    const deleteUser = async (cid) => {
        await axios.delete(`http://localhost:808/course/${cid}`)
        loadUsers()
    }
    return (
        <div className="container">
            <div className="py-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">CourseId</th>
                            <th scope="col">CourseName</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.cid}</td>
                                    <td>{user.name}</td>
                                    <td>{user.price}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <Link className='btn btn-outline-primary mx-2'
                                            to={`/edituser/${user.cid}`}
                                        >Edit</Link>
                                        <button className='btn btn-danger mx-2'
                                            onClick={() => deleteUser(user.cid)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home
