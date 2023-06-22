import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";
import {findUser} from "../services/userService";
import { useNavigate } from "react-router-dom";

interface LogInProps {
    
}
 
const LogIn: FunctionComponent<LogInProps> = () => {
    let navigate = useNavigate()
    let formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
    }),
    onSubmit: (values, {resetForm}) => {
        console.log(values);
        if (findUser(values)) navigate("home");
        else alert("Wrong email or password");
        resetForm();
    },
    });
    return ( 
    <>
    <div className="container ">
    <form onSubmit={formik.handleSubmit}>
        <h3 className="display-3">Welcome</h3>
    <div className="form-floating mb-3">
        <input 
            type="text" 
            className="form-control" 
            id="floatingInputN" 
            placeholder="Your Name" 
            name="name"
        />
        <label htmlFor="floatingInputN">Your Name</label>
    </div>
    <div className="form-floating mb-3">
        <input 
            type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com" 
            name="email"
            onChange={formik.handleChange}
            // value = {email} mosheh from default value to HTML
            value = {formik.values.email}
            onBlur={formik.handleBlur}
        />
        <label htmlFor="floatingInput">Email address</label>
        {formik.touched.email && formik.errors.email && (
        <p className="text-danger">{formik.errors.email}</p>
        )}
    </div>
    <div className="form-floating">
        <input 
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password" 
            name= "password"
            onChange={formik.handleChange}
            value= {formik.values.password}
            onBlur={formik.handleBlur}
        />
        <label htmlFor="floatingPassword">Password</label>
        {formik.touched.password && formik.errors.password && (
        <p className="text-danger">{formik.errors.password}</p>
        )}
    </div>
    <button type="submit" className="btn btn-success mt-3" disabled={!formik.isValid || !formik.dirty}>LogIn</button>
    </form>
    </div>
    </>
    );
}
 
export default LogIn;