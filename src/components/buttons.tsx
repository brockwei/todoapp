import * as React from 'react';

export const DeleteButton = (props: any) => {
    return (
        <div 
            className="delete-button"
            onClick={() => { props.handleClick(props.deleteItem); }}
        >
            <i className="fa fa-times-circle" />
        </div>
    );
};

export const AddButton = (props: any) => {
    return (
        <div 
            className="add-button"
            onClick={props.handleClick}
        >
            <i className="fa fa-plus-circle" />
        </div>
    );
};