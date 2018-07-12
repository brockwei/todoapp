import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { toggleTodoFilter, loadTodoList, loadCategoryList, loadTodoFilter } from 'src/actions';
import store from 'src/reducers';

interface ISettingsProps {
    activeFilters: string[];
    loadTodoList: (list: any) => Dispatch<object>;
    loadCategoryList: (categoryItem: any) => Dispatch<object>;
    loadTodoFilter: (filter: any) => Dispatch<object>;
    toggleTodoFilter: (filter: string) => Dispatch<object>;
}

class Settings extends React.Component<ISettingsProps, {}> {
    componentDidMount() {
        let data = localStorage.getItem('todoapp');
        if (data) {
            let load = JSON.parse(data);
            this.props.loadTodoFilter(load.todoFilter);
            this.props.loadCategoryList(load.categoryList);
            this.props.loadTodoList(load.todoList);
        }
    }
    save = () => {
        let data: any = store.getState();
        let saveObj = {
            categoryList: data.categoryList,
            todoList: data.todoList,
            todoFilter: data.todoFilter
        };
        localStorage.setItem('todoapp', JSON.stringify(saveObj));
    }
    clickCheckbox = (e: any) => {
        this.props.toggleTodoFilter(e.currentTarget.value);
    }
    render() {
        return (
            <div className="settings-container">
                <div className="save-container">
                    <button onClick={this.save} className="save-button">Save</button>
                </div>
                <div style={{ display: 'flex' }}>
                    <label className="checkbox-container"><span className="mobile-hidden">Inactive </span> 
                        <i className="fa fa-exclamation-circle" />
                        <input onChange={this.clickCheckbox} type="checkbox" value="inactive" checked={this.props.activeFilters.indexOf('inactive') >= 0} />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"><span className="mobile-hidden">Active </span>
                        <i className="fa fa-spinner" />
                        <input onChange={this.clickCheckbox} type="checkbox" value="active" checked={this.props.activeFilters.indexOf('active') >= 0} />
                        <span className="checkmark" />
                    </label>
                    <label className="checkbox-container"><span className="mobile-hidden">Completed </span> 
                        <i className="fa fa-check" />
                        <input type="checkbox" onClick={this.clickCheckbox} value="complete" checked={this.props.activeFilters.indexOf('complete') >= 0}/>
                        <span className="checkmark" />
                    </label>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeFilters: state.todoFilter
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            toggleTodoFilter,
            loadTodoList,
            loadCategoryList,
            loadTodoFilter
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);