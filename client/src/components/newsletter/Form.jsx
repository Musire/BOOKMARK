import useValidation from "../../hooks/useValidation"
import Error from "../../assets/icons/icon-error.svg"
import { newsletterSection as Text } from "../../constants/Text";

const Form = () => {
    const errorMsg = "Whoops, make sure it's an email"
    const { isValidEmail, handleEmailChange, validateEmail } = useValidation()
    const wasSent = (isValidEmail === 'sent')

    const handleSubmit = (e) => {
        e.preventDefault()
        validateEmail()
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-grid">
                <label htmlFor="email" className="hidden col-start-2 row-start-2" />
                <div className={`form-wrapper ${isValidEmail ? '' : 'form-error'}`} >
                    <input id="email" type="text" className="form-input" placeholder="Enter your email address" onChange={(e) => handleEmailChange(e)}/>
                    <div className="icon-holder">
                        {!isValidEmail && <img src={Error} alt="error-icon" className="w-6" />}
                    </div>
                </div>
                {!isValidEmail && <p className="form-error-message">{errorMsg}</p>}
                <button disabled={wasSent} type="submit" className={`form-button ${wasSent ? 'form-sent' : ''}`}>{wasSent ? 'Email was sent' : Text.CTA}</button>
            </div>
        </form>
    );
}
 
export default Form;