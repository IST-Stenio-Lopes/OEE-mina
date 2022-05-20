import React, { useEffect } from "react";
import "../search/style.css";
import { useState } from "react";
import SearchIcon from '../../../assets/search.svg';
import Filter from '../../../assets/filter_list.svg';

export default function Search() {
    const [query, setQuery] = useState("");

    return (
        <div id="bar">
            <div id="bar-icon">
                <p id="bar-icon1"><img src={SearchIcon} width={20}/></p>
                <p id="bar-icon2"><img src={Filter} width={20}/></p>
                <input placeholder="" onChange={event => setQuery(event.target.value)} />
            </div>
        </div>

    );


}
