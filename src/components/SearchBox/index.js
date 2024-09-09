import React from "react";
import '../../styles/body-style/body.css'

const SearchBox = ({ setSearchText }) => {
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    return (

        <div className="div-textbox"> 
            <input className="search-box" type="text" placeholder="Buscar canción..." onChange={handleInputChange}/>
        </div>
    );
};

export default SearchBox;