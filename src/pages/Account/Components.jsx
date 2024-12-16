
function AccountDetails() {
    return (
        <>
            <div className='name-inputs-container'>
                {Input('First Name', 'text')}

                {Input('Last Name', 'text')}
            </div>

            <div className='input-container'>
                <label className="heading-1-style"> {'Username'} <label style={{ color: 'red' }}>*</label></label>
                <input type={'text'} className="input-style" style={{ marginBottom: '5px' }} />

                <label className="heading-2-style" style={{ width: '80%' }}> This is a unique identifier for your account and will be how your name will be displayed in the account section and in reviews </label>
            </div>

            {Input('Email Address', 'email')}

            <fieldset className="password-change-container">
                <legend className="heading-2-style">Password Change</legend>

                {Input('Current Password', 'password')}

                {Input('New Password', 'password')}

            </fieldset>

            <button className='submit-button'> Save Changes </button>
        </>
    )

    function Input(label, type) {
        return (
            <div className='input-container'>
                <label className="heading-1-style"> {label} <label style={{ color: 'red' }}>*</label></label>
                <input type={type} className="input-style" />
            </div>
        )
    }
}

function Addresses() {
    return (
        <>

            <label className="heading-1-style" style={{ fontFamily: 'unset' }}>The following addresses will be used on the checkout page by default.</label>

            <div className='addresses-wrapper'>
                {AddressContainer('Billing')}
                {AddressContainer('Shipping')}
            </div>

        </>
    )
}

function AddressContainer(type) {
    return (
        <div className='address-container'>
            <div className="address-container-header">
                <label style={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>{type} Address</label>

                <a href="/" className="address-container-add-label" > Add a new {type} address </a>
            </div>

            {/* Divider */}
            <div className="address-container-divider" />

            <div className="address-container-footer">
                <label style={{ fontSize: '13px', fontFamily: 'monospace', color: 'black' }}> You have not set up this type of address yet. </label>
            </div>
        </div>
    )
}

function Orders() {
    return (
        <>

            <div className="orders-container">
                <label style={{ fontSize: '20px', fontFamily: 'monospace', color: 'black' }}>❌ No order has been made yet. </label>

                <button className='browse-button'> Browse Products </button>
            </div>

        </>
    )
}

function Downloads() {
    return (
        <>

            <div className="downloads-container">
                <label style={{ fontSize: '20px', fontFamily: 'monospace', color: 'black' }}>❌ No downloads available yet. </label>

                <button className='browse-button'> Browse Products </button>
            </div>

        </>
    )
}

export { AccountDetails, Addresses, Orders, Downloads }