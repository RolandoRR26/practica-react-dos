import React, { useState } from 'react';
import SearchBox from '../SearchBox';
import FilteredList from '../FilteredList';

const Body = () => {
    // Estado para la lista de elementos y el texto de búsqueda
    const [searchText, setSearchText] = useState('');
    const [items] = useState([
        { id: 1, band: "Pearl Jam", song: "Yellow Ledbetter", year: 1994 },
        { id: 2, band: "Pearl Jam", song: "Alive", year: 1991 },
        { id: 3, band: "Pearl Jam", song: "Jeremy", year: 1991 },
        { id: 4, band: "Pearl Jam", song: "Black", year: 1991 },
        { id: 5, band: "Pearl Jam", song: "Even Flow", year: 1991 },
        { id: 6, band: "Pearl Jam", song: "Daughter", year: 1993 },
        { id: 7, band: "Pearl Jam", song: "Better Man", year: 1994 },
        { id: 8, band: "Pearl Jam", song: "Elderly Woman Behind the Counter in a Small Town", year: 1993 },
        { id: 9, band: "Pearl Jam", song: "Rearviewmirror", year: 1993 },
        { id: 10, band: "Pearl Jam", song: "Do the Evolution", year: 1998 },
        { id: 11, band: "Pearl Jam", song: "Given to Fly", year: 1998 },
        { id: 12, band: "Pearl Jam", song: "I Am Mine", year: 2002 },
        { id: 13, band: "Pearl Jam", song: "Wishlist", year: 1998 },
        { id: 14, band: "Pearl Jam", song: "Life Wasted", year: 2006 },
        { id: 15, band: "Pearl Jam", song: "The Fixer", year: 2009 },
        { id: 16, band: "Pearl Jam", song: "Sirens", year: 2013 },
        { id: 17, band: "Pearl Jam", song: "Mind Your Manners", year: 2013 },
        { id: 18, band: "Pearl Jam", song: "Superblood Wolfmoon", year: 2020 },
        { id: 19, band: "Pearl Jam", song: "Dance of the Clairvoyants", year: 2020 },
        { id: 20, band: "Pearl Jam", song: "Quick Escape", year: 2020 },
        { id: 21, band: "Pearl Jam", song: "Oceans", year: 1991 },
        { id: 22, band: "Pearl Jam", song: "State of Love and Trust", year: 1992 },
        { id: 23, band: "Pearl Jam", song: "Not for You", year: 1993 },
        { id: 24, band: "Pearl Jam", song: "Animal", year: 1993 },
        { id: 25, band: "Pearl Jam", song: "Spin the Black Circle", year: 1994 },
        { id: 26, band: "Pearl Jam", song: "Corduroy", year: 1994 },
        { id: 27, band: "Pearl Jam", song: "Immortality", year: 1994 },
        { id: 28, band: "Pearl Jam", song: "Hail, Hail", year: 1996 },
        { id: 29, band: "Pearl Jam", song: "Rats", year: 1996 },
        { id: 30, band: "Pearl Jam", song: "Brain of J.", year: 1998 },
        { id: 31, band: "Pearl Jam", song: "MFC", year: 1998 },
        { id: 32, band: "Pearl Jam", song: "Evacuation", year: 2000 },
        { id: 33, band: "Pearl Jam", song: "Grievance", year: 2000 },
        { id: 34, band: "Pearl Jam", song: "Save You", year: 2002 },
        { id: 35, band: "Pearl Jam", song: "Life Wasted", year: 2006 },
        { id: 36, band: "Pearl Jam", song: "Unthought Known", year: 2009 },
        { id: 37, band: "Pearl Jam", song: "Amongst the Waves", year: 2009 },
        { id: 38, band: "Pearl Jam", song: "Sirens", year: 2013 },
        { id: 39, band: "Pearl Jam", song: "Lightning Bolt", year: 2013 },
        { id: 40, band: "Pearl Jam", song: "Dance of the Clairvoyants", year: 2020 }
    ]);

    return (
        <>
            <SearchBox setSearchText={setSearchText} />
            <FilteredList items={items} searchText={searchText} />
        </>
    );

};

export default Body;
