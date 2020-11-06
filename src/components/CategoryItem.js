import React from 'react';

const CategoryList = props => {
    const { categories } = props;
    let categoryItem = categories.map(category => (
        <a href="" key={category._id}>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {category.categoryName}
                <span className="badge badge-primary badge-pill">{category.numberOfJobs}</span>
            </li>
        </a>
    ));
    return (
        <ul className="list-group category-list">
            {categoryItem}
        </ul>
    )
}

export default CategoryList;