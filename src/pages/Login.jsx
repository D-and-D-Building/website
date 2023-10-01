import React from 'react'

export const Login = () => {
    return (
        <>
            <div className="">
                <h2>Welcome to D&D Building</h2>
            </div>

            <div className="">
                <form>
                    <label>
                        Username:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="name" />
                    </label>
                    
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </>
    )
}
