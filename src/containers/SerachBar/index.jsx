import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Icon, Search} from "semantic-ui-react";

import SearchBarListItem from "./SearchBarListItem";
import {toLowerCase} from '../../utils'

import './style.scss'

const SearchBar = () => {
    const {categories, subcategories, products} = useSelector(({Categories, Products, Subcategories}) => ({
        categories: Categories.list,
        subcategories: Subcategories.list,
        products: Products.list,
    }))

    const [filteredList, setFilteredList] = useState([])
    const [listVisibility, setListVisibility] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const onSearch = (e) => {
        const {value} = e.target
        const result = []

        if (!value) {
            setListVisibility(false)
            return
        }
        setSearchValue(value)
        setListVisibility(true)

        const inCategories = categories.filter(({name}) => toLowerCase(name).includes(toLowerCase(value)))
        const inSubcategories = subcategories.filter(({name}) => toLowerCase(name).includes(toLowerCase(value)))
        const inProducts = products.filter(({name}) => toLowerCase(name).includes(toLowerCase(value)))

        result.push(...inCategories, ...inSubcategories, ...inProducts)
        setFilteredList(result)
    }

    return (
        <>
            <div className='search'>
                <input type="text"
                       onChange={onSearch}
                       onFocus={onSearch}
                       onBlur={() => setListVisibility(false)}/>
                <Icon name='search'/>
            </div>
            <ul className={`search-list ${listVisibility && 'visible'}`}>
                {filteredList.length && searchValue ? (
                    filteredList.map(item => (
                        <SearchBarListItem key={item.id} item={item}/>
                    ))
                ) : (
                    <h6 className='empty-list'>Пошук не дав результатів</h6>
                )
                }
            </ul>
        </>
    )
}

export default SearchBar
