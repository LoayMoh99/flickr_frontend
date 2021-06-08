import { useState,useEffect } from "react";
// import { object } from "yup";

/**
 * @author Mohamed Wael
 * @namespace useForm
 * @param {*} callback 
 * @param {*} validateSignup 
 * @returns {object} 
 */
const useForm = (callback, validateSignup) => {
    const [values, setValues] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    //new state for errors
    //function that validates these errors
    //pass these errors back to the form

   /**
    * @memberof validateSignup
    * @param {event} event 
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
     * @memberof validateSignup
     * @param {event} event - whether clicking Mouse or Pressing a button
     * @method handleSubmit
     */

    const handleSubmit = event  => {
        event.preventDefault();
        //handling errors
        setErrors(validateSignup(values));
        setIsSubmitting(true);
    };

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