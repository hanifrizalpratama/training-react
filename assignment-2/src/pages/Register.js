import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/action/user";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ({ setOpen }) => {
    const dispatch = useDispatch();
    const RegisterSchemaValidation = Yup.object().shape({
        fullname: Yup.string()
            .required("Name is required"),

        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),

        password: Yup.string()
            .min(5, 'Password to short')
            .required("Password is required"),

        telephone: Yup.number()
            .min(10, 'Phone Number to short')
            .required("Phone Number is required")
    });
    const formRegister = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            telephone: ''
        },
        validationSchema: RegisterSchemaValidation,
        onSubmit: (values) => {
            dispatch(register(values));
        }
    });
    return (
        <div className="wrapper-user">
            <h1>Register</h1>
            <form onSubmit={formRegister.handleSubmit}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <input
                        type="fullname"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.fullname}
                        style={{ marginBottom: 20 }}
                    />
                    {formRegister.touched.fullname && formRegister.errors.fullname && (
                        <p style={{ color: "red", fontSize: "12px", marginTop: "-15px", textAlign: "left" }}>{formRegister.errors.fullname}</p>
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.email}
                        style={{ marginBottom: 20 }}
                    />
                    {formRegister.errors.email && (
                        <p style={{ color: "red", fontSize: "12px", marginTop: "-15px", textAlign: "left" }}>{formRegister.errors.email}</p>
                    )}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.password}
                        style={{ marginBottom: 20 }}
                    />
                    {formRegister.errors.password && (
                        <p style={{ color: "red", fontSize: "12px", marginTop: "-15px", textAlign: "left" }}>{formRegister.errors.password}</p>
                    )}
                    <input
                        type="telephone"
                        name="telephone"
                        placeholder="Telephone"
                        onChange={formRegister.handleChange}
                        value={formRegister.values.telephone}
                        style={{ marginBottom: 20 }}
                    />
                    {formRegister.errors.telephone && (
                        <p style={{ color: "red", fontSize: "12px", marginTop: "-15px", textAlign: "left" }}>{formRegister.errors.telephone}</p>
                    )}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
