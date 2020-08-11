import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.scss';

const SubcategoryFilter = ({ subcategories, selected, onSelectSubcategory }) => {
        return (
                <div className="subcategory-filter__container">
                        {subcategories && subcategories.map((sc) => {
                                if (sc.id === selected) {
                                        return (
                                                <Button
                                                        onClick={() => onSelectSubcategory(sc.id)}
                                                        key={sc.id}
                                                        color='black'>{sc.name}</Button>
                                        )
                                } else {
                                        return (
                                                <Button
                                                        onClick={() => onSelectSubcategory(sc.id)}
                                                        key={sc.id}
                                                        color='grey'>{sc.name}</Button>
                                        )
                                }
                        })}
                </div>
        )
}

export default SubcategoryFilter
