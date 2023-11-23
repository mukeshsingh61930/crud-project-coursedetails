import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
    const { cid } = useParams()
    const navigate = useNavigate()



    const [formData, setFormData] = useState({
        cid: "",
        name: "",
        price: ""
    });



    useEffect(() => {
        loadUsers()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Send registration data to Spring Boot backend

        await axios.put("http://localhost:808/course", formData)
        navigate("/")

    };
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:808/course/${cid}`)
        setFormData(result.data)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className=" container text-center">
            <h1>Register User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 my-5">
                    <label for="exampleFormControlInput1" className="form-label">CourseId</label>
                    <input type="text" className="form-control" name="cid" value={formData.cid} id="exampleFormControlInput1" placeholder="enter courseId" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">CourseName</label>
                    <input type="text" className="form-control" name="name" value={formData.name} id="exampleFormControlInput1" placeholder="enter courseName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="text" className="form-control" name="price" value={formData.price} id="exampleFormControlInput1" placeholder="enter course price" onChange={handleChange} />
                </div>
                <button className="btn btn-outline-primary" type="submit">Register</button>
                <button className="btn btn-outline-danger mx-2" onClick={() => navigate("/")} type="submit">Cancel</button >
            </form>
        </div>


    );
}

export default EditUser;




