import * as React from 'react';

import { DeleteButton, AddButton, ConfirmButton, EditButton } from './buttons';

export const CategoryTab = (props: any) => {
    console.log(props);
    return (
        <li
            className={`button category-tab ${props.isActiveCategory ? 'active-category-tab' : ''} ${props.mobileCategoryVisibility ? 'mobile-visible' : ''}`}
            // onClick={() => { props.handleSetActiveCategory(props.category); }}
        >
            {/* Text/Edit Field */}
            {
                props.isEditCategory ?
                    <form 
                        style={{ paddingLeft: '0px' }}
                        className="new-tab-input-field label"
                        onSubmit={(e) => {
                            e.preventDefault();
                            props.handleConfirmCategoryInput({ ...props.category, category: props.categoryInputText });
                        }}
                    >
                        <input
                            style={{ height: '100%' }}
                            className="new-tab-input-field label"
                            autoFocus={true}
                            onChange={(e) => props.handleCategoryInputChange(e.currentTarget.value)}
                            onBlur={() => props.handleInputBlur(props.category)}
                            value={props.categoryInputText}
                        />
                    </form>
                    : 
                    <span 
                        className="label"
                        onClick={() => { props.handleSetActiveCategory(props.category); }}
                    >
                        {props.category.category}
                    </span>
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
        <li className="new-category-tab" onClick={props.toggleCategoryVisibility}>
            <AddButton handleClick={props.handleAddNewCategory} addItem={{ category: '', id: props.newCategoryId }} />
        </li>
    );
};