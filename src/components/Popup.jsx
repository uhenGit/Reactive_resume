import React from 'react'

const Popup = () => {
    return (
        <div>
            <form>
                <label htmlFor="name">
                    <input type="text" name="name" required/>
                </label>
                <label htmlFor="mail">
                    <input type="text" name="mail"/>
                </label>
                <label htmlFor="msg">
                    <textarea name="msg" rows="10"></textarea>
                </label>
            </form>
        </div>
    )
}

export default Popup
