import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Interfaces
import { ICategory } from '../interface';
// import { TodoListProps } from '../interface';

// Actions
import { setActiveCategory, addCategory, editCategory, deleteCategory, editCategoryInputId, resetCategoryInputId, changeCategoryInput, clearCategoryInput } from '../actions';

// Components
import { CategoryTab, NewCategoryTab } from '../components/category';

interface CategoryListProps {
    activeCategory: number;
    editCategoryId: number;
    categoryList: ICategory[];
    isInputActive: boolean;
    categoryInputText: string;
    setActiveCategory: (categoryItem: ICategory) => Dispatch<Object>;
    addCategory: (categoryItem: ICategory) => Dispatch<Object>;
    editCategory: (categoryItem: ICategory) => Dispatch<Object>;
    deleteCategory: (categoryItem: ICategory) => Dispatch<Object>;
    changeCategoryInput: (text: string) => Dispatch<Object>;
    editCategoryInputId: (categoryItem: ICategory) => Dispatch<Object>;
    resetCategoryInputId: () => Dispatch<Object>;
    clearCategoryInput: () => Dispatch<Object>;
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
    handleEditCategory = (category: ICategory) => {
        this.props.editCategoryInputId(category);
        this.props.changeCategoryInput(category.category);
    }
    handleConfirmCategoryInput = (category: ICategory) => {
        this.props.editCategory(category);
        this.props.resetCategoryInputId();
        this.props.clearCategoryInput();
    }
    // handleCategoryInputChange = (e: any) => {
    //     this.props.changeCategoryInput(e.currentTarget.value);
    // }
    handleAddNewCategory = (category: ICategory) => {
        this.props.addCategory(category);
        this.props.setActiveCategory(category);
        this.handleEditCategory(category);
    }
    handleInputBlur = (category: ICategory) => {
        // Case 1: edit == true and input not empty
        console.log('handleblur');
        if (this.props.editCategoryId && this.props.categoryInputText.length > 0) {
            this.handleConfirmCategoryInput(category);
        }

    }
    // handleAddCategory = (category: ICategory) => {
    //     console.log('test');
    //     this.props.addCategory(category);
    //     this.props.setActiveCategory(category);
    // }
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
                            />
                        );
                    })
                }
                <NewCategoryTab
                    newCategoryId={this.props.categoryList[this.props.categoryList.length - 1].id + 1}
                    // handleAddNewCategory={this.props.addCategory}
                    handleAddNewCategory={this.handleAddNewCategory}
                // isInputActive={this.props.isInputActive}
                // setNewCategoryInputField={this.props.setNewCategoryInputField}
                // handleAddCategory={this.handleAddCategory}
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
            resetCategoryInputId
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);