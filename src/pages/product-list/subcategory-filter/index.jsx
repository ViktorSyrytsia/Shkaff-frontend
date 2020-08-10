import React from 'react';

const SubcategoryFilter = ({ subCategories }) => {
        return (
                <div>
                        {subCategories && subCategories.map(sc => <div key={sc.id}>{sc.name}</div>)}
                </div>
        )
}

export default SubcategoryFilter
