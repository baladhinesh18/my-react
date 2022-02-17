import { Formik, useFormik } from "formik";
import * as yup from 'yup'
// const validateForm = (values) => {
//   console.log("validateForm", values);
//   const errors = {};

//   if (values.email.length < 5) {
//     errors.email = "please provide a longer email";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (values.password.length < 8) {
//     errors.password = "Please Provide a longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please provide a shorter password";
//   }
//   return errors;
// };
// export function BasicForm() {
//   const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
//     useFormik({
//       initialValues: { email: "shelton@gmail.com", password: "" },
//       validate: validateForm,
//       onSubmit: (values) => {
//         console.log("onSubmit", values);
//       },
//     });
//   return (
//     // <div>
//     //   <Formik
//     //     initialValues={{ email: "shelton@gmail.com", password: "" }}
//     //     validate={validateForm}
//     //     onSubmit={(values) => {
//     //       console.log("onSubmit", values);
//     //     }}
//     //   >
//     //     {(formik) => (
//     <form className="form" onSubmit={handleSubmit}>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={values.email}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         placeholder="Enter your email"
//       />
//       {errors.email && touched.email && errors.email}
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         placeholder="Enter your password"
//       />
//       {errors.password && touched.password && errors.password}
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     //     )}
//     //   </Formik>
//     // </div>
//   );
// }



//yup
const formValidationSchema=yup.object({
  email:yup
  .string()
  .min(5,"Need a bigger email 😊")
  .required("Why not fill this email 😊")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched"),
  password:yup
  .string()
  .min(8,"Need a bigger password 😊")
  .max(12,"Too much password 😊 ")
  .required("Why not fill this password 😊"),
});
export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "shelton@gmail.com", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
      },
    });
  return (
    
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your email"
      />
      {errors.email && touched.email && errors.email}
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your password"
      />
      {errors.password && touched.password && errors.password}
      <br />
      <button type="submit">Submit</button>
    </form>
    
  );
}
