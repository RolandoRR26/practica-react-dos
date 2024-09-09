import React from "react";

const FilteredList = ({ items, searchText }) => {
    // Filtrar los elementos de acuerdo a lo que se ingrese que modifique el estado
    const filteredItems = items.filter(item =>
        item.song.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className="div-list">
                <h2 className="title-list">AQUI ESTAN TUS COINCIDENCIAS</h2>
            </div>
            <div className="div-list">
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>
                            {item.song} ({item.year})
                        </li>
                    ))}
                </ul>
                {filteredItems.length === 0 && <p className="error-message">No se encontraron canciones.</p>}
            </div>

        </>
    );
};

export default FilteredList;