import * as React from 'react';

import { DeleteButton, AddButton, ConfirmButton, EditButton } from './buttons';

export const CategoryTab = (props: any) => {
    return (
        <li
            className={`button category-tab ${props.isActiveCategory ? 'active-category-tab' : ''}`}
            onClick={() => {
                props.handleSetActiveCategory(props.category);
            }}
        >
            {/* Text/Edit Field */}
            {
                props.isEditCategory ?
                    <input
                        className="new-tab-input-field"
                        autoFocus={true}
                        onChange={(e) => props.handleCategoryInputChange(e.currentTarget.value)}
                        onBlur={() => props.handleInputBlur(props.category)}
                        value={props.categoryInputText}
                    />
                    : props.category.category
            }

            {/* <input
                className="new-tab-input-field"
                autoFocus={true}
                onBlur={() => {
                    props.setNewCategoryInputField(false);
                    props.handleNewCategoryInputChange('');
                }}
                onChange={(e) => props.handleNewCategoryInputChange(e.currentTarget.value)}
                value={props.newCategoryInput}
            /> */}
            {/* Button Group */}
            {
                props.isActiveCategory ?
                    <div className="button-group">
                        {
                            props.isEditCategory ?
                                <ConfirmButton handleClick={props.handleConfirmCategoryInput} confirmItem={{ ...props.category, category: props.categoryInputText }} />
                                : <EditButton handleClick={props.handleEditCategory} editItem={props.category} />
                        }
                        <DeleteButton handleClick={props.handleDeleteCategory} deleteItem={props.category} />
                    </div>
                    : null
            }
        </li>
    );
};

export const NewCategoryTab = (props: any) => {
    return (
        <li className="new-category-tab">
            <AddButton handleClick={props.handleAddNewCategory} addItem={{ category: '', id: props.newCategoryId }} />
        </li>
    );
};