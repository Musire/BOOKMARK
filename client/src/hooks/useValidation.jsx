import { useState } from "react";

const useValidation = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checkRegex = emailRegex.test(email);
        if (!checkRegex) {
            setIsValidEmail(false)
        }

        if (checkRegex) {
            setIsValidEmail('sent')
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return { isValidEmail, handleEmailChange, validateEmail };
}
 
export default useValidation;