import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav(props){
    return(<div className="nav">
    <button type="submit"><Link to='/login'>Login</Link></button>
    <button type="submit"><Link to='/register'>Create An Account</Link></button>

    </div>)
};