import * as React from 'react';

export const EditButton = (props: any) => {
    return (
        <div 
            className="icon-button edit-icon-button"
            onClick={() => { props.handleClick(props.editItem); }}
        >
            <i className="fa fa-edit" />
        </div>
    );
};

export const DeleteButton = (props: any) => {
    return (
        <div 
            style={{ display: 'inline' }}
            className="icon-button delete-icon-button"
            onClick={() => { props.handleClick(props.deleteItem); }}
        >
            <i className="fa fa-times-circle" />
        </div>
    );
};

export const AddButton = (props: any) => {
    return (
        <div 
            className="icon-button add-icon-button"
            onClick={() => { props.handleClick(props.addItem); }}
        >
            <i className="fa fa-plus-circle" />
        </div>
    );
};

export const ConfirmButton = (props: any) => {
    return (
        <div 
            className="icon-button confirm-icon-button"
            onMouseDown={() => { 
                props.handleClick(props.confirmItem); }
            }
        >
            <i className="fa fa-check-circle" />
        </div>
    );
};