import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.scss';

const SubcategoryFilter = ({ subcategories, selected, onSelectSubcategory }) => {
        return (
                <div className="subcategory-filter__container">
                        <Button
                                size="huge"
                                basic
                                onClick={() => onSelectSubcategory(null)}
                                color='black'>Усі</Button>
                        {subcategories && subcategories.map((sc) => {
                                if (sc.id === selected) {
                                        return (
                                                <Button

                                                        size="huge"
                                                        onClick={() => onSelectSubcategory(sc.id)}
                                                        key={sc.id}
                                                        color='black'>{sc.name}</Button>
                                        )
                                } else {
                                        return (
                                                <Button
                                                        size="huge"
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
