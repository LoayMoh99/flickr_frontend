import { useState,useEffect } from "react";
// import { object } from "yup";

/**
 * @author Mohamed Wael
 * @namespace useForm
 * @param {*} callback 
 * @param {*} validateLogin - checks the login input fields
 * @returns {object}
 */

const useForm = (callback, validateLogin) => {
    const [values, setValues] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    //new state for errors
    //function that validates these errors
    //pass these errors back to the form

    /**
     * @memberof validateLogin
     * @param {event} event -the current event whether clicking Mouse or Pressing a button
     * @method handleChange
     */
    const handleChange = event => {
        const{name,value}=event.target;

        setValues(
            {
            ...values,
            [name]:value
        });
    };

    /**handles the on submit action
     * @memberof validateLogin
     * @param {event} event - whether clicking Mouse or Pressing a button
     * @method handleSubmit
     */
    const handleSubmit = event  => {
        event.preventDefault();
        //handling errors
        setErrors(validateLogin(values));
        setIsSubmitting(true);
    };
    /**check to see if there is no error
     * @memberof validateLogin 
     */
    useEffect(() => {
        //check to see if there is no errors
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
            // call our callback
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;