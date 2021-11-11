import React, { useEffect } from "react";
import Data from "../../../mock-data.json";
import "../search/style.css";
import { useState } from "react";
import MaterialIcon from 'react-google-material-icons';

export default function Search() {
    const [query, setQuery] = useState("")
    useEffect(() => {
        console.log(Data)
    }, [])
    return (
        <div id="bar">
            <div id="bar-icon">
                <p id="bar-icon1"><MaterialIcon icon="search" size={20} /></p>
                <p id="bar-icon2"><MaterialIcon icon="filter_list" size={20} /></p>
                <input placeholder="" onChange={event => setQuery(event.target.value)} />
            </div>
 
            
            {/*
                Data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className="box" key={index}>
                        <p>Nome: {post.name}</p>
                        <p>OEE: {post.oee}%</p>
                    </div>
                ))*/
            }
        </div>

    );


}
