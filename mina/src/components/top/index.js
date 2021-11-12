import React from "react";
import '../top/style.css';
import Add from "./add";
import Search from "./search";
import Size from "./size";



export default function Top() {

    return (
        <div id="top">
            <div id="top-1">
                <Search />
            </div>
            <div id="top-2">
                <Size />
            </div>
            <div id="top-3">
                <Add />
            </div>
        </div>
    );
}