import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interfaces
import { ICategory } from '../interface';
// import { TodoListProps } from '../interface';

// Actions
import { setActiveCategory, deleteCategory } from '../actions';

// Components
import { CategoryTab, NewCategoryTab } from '../components/category';

interface CategoryListProps {
    activeCategory: string;
    categoryList: ICategory[];
    setActiveCategory: (categoryItem: ICategory) => Dispatch<Object>;
    deleteCategory: (categoryItem: ICategory) => Dispatch<Object>;
}

class CategoryList extends React.Component<CategoryListProps, {}> {
    componentDidMount() {
        this.props.setActiveCategory(this.props.categoryList[0]);
    }
    handleSetActiveCategory = (category: ICategory) => {
        this.props.setActiveCategory(category);
    }
    handleDeleteCategory = (category: ICategory) => {
        // Delete Category
        this.props.deleteCategory(category);
        // Set Active Category
        this.props.setActiveCategory(this.props.categoryList[0]);
    }
    render() {
        return (
            <ul className="category-list">
                {
                    this.props.categoryList.map((category) => {
                        return (
                            <CategoryTab key={category.id} category={category} handleSetActiveCategory={this.handleSetActiveCategory} handleDeleteCategory={this.handleDeleteCategory}/>
                        );
                    })
                }
                <NewCategoryTab />
            </ul>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        activeCategory: state.activeCategory,
        categoryList: state.categoryList
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            setActiveCategory,
            deleteCategory
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);