import { useState } from "react"
import useApi from "../../../components/Contexts/API/useApi"
import useUser from "../../../components/Contexts/User/useUser"
import './Account.css'

function AccountDetails() {

    const { updateUser } = useApi()
    const { updateUserData, user: profile } = useUser()

    const [emailInput, setEmailInput] = useState(profile.email)
    const [nameInputs, setNameInputs] = useState({ firstName: profile.name.firstName, lastName: profile.name.lastName })
    const [usernameInput, setUsernameInput] = useState(profile.userName)
    const [passwordInputs, setPasswordInputs] = useState({ currentPassword: '', newPassword: '' })

    async function saveChanges() {
        try {
            const response = await updateUser({ userName: usernameInput, names: nameInputs, email: emailInput, passwords: passwordInputs })
            setPasswordInputs({ currentPassword: '', newPassword: '' })
            if (!response) {
                alert('Something went wrong, please try again')
                return
            }

            if (response.message) {
                alert(response.message)
                return
            }

            updateUserData(response)
            alert('Changes saved successfully')
        } catch (error) {
            console.log("🚀 -------------------------------🚀")
            console.log("🚀 ~ saveChanges ~ error:", error)
            console.log("🚀 -------------------------------🚀")
        }
    }

    return (
        <>
            <div className='name-inputs-container'>
                {Input('First Name', 'text', nameInputs.firstName, (e) => { setNameInputs({ ...nameInputs, firstName: e }) })}
                <div style={{ width: '100px' }}></div>
                {Input('Last Name', 'text', nameInputs.lastName, (e) => { setNameInputs({ ...nameInputs, lastName: e }) })}
            </div>

            <div className='input-container'>
                <label className="heading-1-style"> {'Username'} <label style={{ color: 'red' }}>*</label></label>
                <input type={'text'} autoComplete="off" className="input-style" value={usernameInput} onChange={(e) => { setUsernameInput(e.target.value) }} style={{ marginBottom: '5px' }} />

                <label className="heading-2-style" style={{ width: '80%' }}> This is a unique identifier for your account and will be how your name will be displayed in the account section and in reviews </label>
            </div>

            {Input('Email Address', 'email', emailInput, (e) => { setEmailInput(e) })}

            <fieldset className="password-change-container">
                <legend className="heading-2-style">Password Change</legend>

                {Input('Current Password', 'text', passwordInputs.currentPassword, (e) => { setPasswordInputs({ ...passwordInputs, currentPassword: e }) })}

                {Input('New Password', 'text', passwordInputs.newPassword, (e) => { setPasswordInputs({ ...passwordInputs, newPassword: e }) })}

            </fieldset>

            <button className='submit-button' onClick={saveChanges}> Save Changes </button>
        </>
    )

    function Input(label, type, value, setValue) {
        return (
            <div className='input-container'>
                <label className="heading-1-style"> {label} <label style={{ color: 'red' }}>*</label></label>
                <input type={type} value={value} autoComplete="off" onChange={(e) => { setValue(e.target.value) }} className="input-style" />
            </div>
        )
    }
}

function Addresses() {
    return (
        <>

            <label className="heading-1-style">The following addresses will be used on the checkout page by default.</label>

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
                <label className="address-container-header-label">{type} Address</label>

                <a href="/" className="address-container-add-label" > Add {type} address </a>
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