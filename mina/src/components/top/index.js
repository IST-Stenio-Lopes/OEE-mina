import React from "react";
import '../top/style.css';
import Add from "./add";
import Search from "./search";
import Size from "./size";



export default function Top() {

    return (
        <div id="top">
            <div>
                <Search />
            </div>
            <div>
                <Size />
            </div>
            <div>
                <Add />
            </div>
        </div>
    );
}