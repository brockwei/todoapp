import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
// import { changeTodoInput, addTodoItem } from '../actions/todoForm';

interface ISettingsProps {
}

class Settings extends React.Component<ISettingsProps, {}> {
    render() {
        return (
            <div className="settings-container">
                <div className="saveload-container">
                    Test
                </div>
                <div style={{ display: 'flex' }}>
                    <label className="checkbox-container">Inactive
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">Active
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container">Completed
                        <input type="checkbox" />
                        <span className="checkmark" />
                    </label>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {

        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);