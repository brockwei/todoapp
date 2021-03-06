import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interfaces
import { ICategory } from '../interface';

// Actions
import { setActiveCategory, addCategory, editCategory, deleteCategory, editCategoryInputId, resetCategoryInputId, changeCategoryInput, clearCategoryInput, toggleCategoryVisibility } from '../actions';

// Components
import { CategoryTab, NewCategoryTab } from '../components/category';

interface CategoryListProps {
    activeCategory: number;
    editCategoryId: number;
    categoryList: ICategory[];
    isInputActive: boolean;
    categoryInputText: string;
    setActiveCategory: (categoryItem: ICategory) => Dispatch<object>;
    addCategory: (categoryItem: ICategory) => Dispatch<object>;
    editCategory: (categoryItem: ICategory) => Dispatch<object>;
    deleteCategory: (categoryItem: ICategory) => Dispatch<object>;
    changeCategoryInput: (text: string) => Dispatch<object>;
    editCategoryInputId: (categoryItem: ICategory) => Dispatch<object>;
    resetCategoryInputId: () => Dispatch<object>;
    clearCategoryInput: () => Dispatch<object>;

    // Mobile
    mobileCategoryVisibility: boolean;
    toggleCategoryVisibility: () => Dispatch<object>;
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
        let newCategoryList = this.props.categoryList.filter((categoryItem) => {
            return categoryItem.id !== category.id;
        });
        if (newCategoryList.length >= 1) {
            this.props.setActiveCategory(newCategoryList[newCategoryList.length - 1]);
        }
    }
    handleEditCategory = (category: ICategory) => {
        this.props.editCategoryInputId(category);
        this.props.changeCategoryInput(category.category);
    }
    handleConfirmCategoryInput = (category: ICategory) => {
        let categoryList = this.props.categoryList.map((categoryItem) => {
            return categoryItem.category;
        });
        if (category.category && categoryList.indexOf(category.category) < 0) {
            this.props.editCategory(category);
            this.props.resetCategoryInputId();
            this.props.clearCategoryInput();
        }
    }
    handleAddNewCategory = (category: ICategory) => {
        this.props.addCategory(category);
        this.props.setActiveCategory(category);
        this.handleEditCategory(category);
    }
    handleInputBlur = (category: ICategory) => {
        // Case: empty new field
        if (!category.category) {
            this.props.deleteCategory(category);
            this.props.setActiveCategory(this.props.categoryList[this.props.categoryList.length - 2]);
        } else {
            this.props.editCategory(category);
            this.props.resetCategoryInputId();
            this.props.clearCategoryInput();
        }

    }
    render() {
        return (
            <ul className="category-list">
                {
                    this.props.categoryList.map((category) => {
                        return (
                            <CategoryTab
                                key={category.id}
                                // Tab Props
                                category={category}
                                isActiveCategory={category.id === this.props.activeCategory}
                                handleSetActiveCategory={this.handleSetActiveCategory}
                                handleDeleteCategory={this.handleDeleteCategory}
                                // Input Props
                                editCategoryId={this.props.editCategoryId}
                                isEditCategory={category.id === this.props.editCategoryId}
                                categoryInputText={this.props.categoryInputText}
                                handleEditCategory={this.handleEditCategory}
                                handleCategoryInputChange={this.props.changeCategoryInput}
                                handleConfirmCategoryInput={this.handleConfirmCategoryInput}
                                handleInputBlur={this.handleInputBlur}
                                // Mobile
                                mobileCategoryVisibility={this.props.mobileCategoryVisibility}
                            />
                        );
                    })
                }
                <NewCategoryTab
                    newCategoryId={this.props.categoryList[this.props.categoryList.length - 1].id + 1}
                    handleAddNewCategory={this.handleAddNewCategory}
                    toggleCategoryVisibility={this.props.toggleCategoryVisibility}
                />
            </ul>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        // Tab Props
        categoryList: state.categoryList,
        activeCategory: state.activeCategory,
        // Input Props  
        editCategoryId: state.editCategoryInputId,
        categoryInputText: state.changeCategoryInput,

        isInputActive: state.newCategoryInputActive,
        mobileCategoryVisibility: state.mobileCategoryVisibility

    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            // Tab Props
            setActiveCategory,
            addCategory,
            editCategory,
            deleteCategory,
            // Input Props  
            changeCategoryInput,
            clearCategoryInput,
            editCategoryInputId,
            resetCategoryInputId,
            // Mobile
            toggleCategoryVisibility
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);