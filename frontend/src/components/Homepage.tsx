import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
    const [name, setName] = useState<string>();
    return (
        <div className="room__wrapper">
            <input onChange={(e) => setName(e.target.value)} type={"text"} placeholder={"enter name "} />
            <Link className="join__btn" to={`/room?name=${name}`} >Join</Link>
        </div>
    )
}


