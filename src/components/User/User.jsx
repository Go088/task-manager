import * as yup from "yup";
import { useForm } from "react-hook-form";

// Схема валідації
const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required("Name is required")
      .min(3, "Name should be at least 3 characters")
      .matches(/^[\S\s]{3,}$/, "Name should contain at least three characters"),
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .matches(/^\S*$/, "Email should not contain spaces")
      .email("Email is invalid"),
    password: yup
      .string()
      .trim()
      .required("Password is required")
      .matches(/^\S*$/, "Password cannot contain spaces")
      .min(6, "Name should be at least 6 characters"),
  });
  
const UserProfile = ()=> {
    return(
        <div>
            <p>Name</p>
        </div>
    )
}

export const UserProfile;