import './BusinessForm.css';

export default function BusinessForm ({}){
    return(
        <form>
            <h3 className="form__title">Business / Restaurant Information</h3>
            <div className="form_input-container">
                <label>Business/Restaurant Name:</label>
                    <input className="Name__input"
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
            </div>

            <div className="form_input-container">
                <label>Business/Restaurant Name:</label>
                    <input className="form__input"
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
            </div>

            <div className="form_contact-container">
                <label>Contact Number:</label>
                    <input className="form__input"
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
            </div>

            <div className="form_input-container">
                <label>Business/Restaurant Name:</label>
                    <input className="Name__input"
                        type="text"
                        name="businessName"
                        placeholder="Enter Your Business Name"
                    />
            </div>
        </form>

    );
}