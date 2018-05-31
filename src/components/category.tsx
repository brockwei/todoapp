import * as React from 'react';

import { DeleteButton, AddButton } from './buttons';

export const CategoryTab = (props: any) => {
    return (
        <li
            className="button category-tab"
            onClick={() => {
                props.handleSetActiveCategory(props.category);
            }}
        >
            {
                props.category.category
            }
            {/* <div 
                className="add-button"
                
            >
                <i className="fa fa-plus-circle" />
            </div> */}
            <DeleteButton handleClick={props.handleDeleteCategory} deleteItem={props.category} />
        </li>
    );
};

export const NewCategoryTab = (props: any) => {
    return (
        <li
            className="new-category-tab"
            // onClick={() => {
            //     props.handleSetActiveCategory(props.category);
            // }}
        >
            <AddButton handleClick={props.handleAddCategory} deleteItem={props.category} />
        </li>
    );
};