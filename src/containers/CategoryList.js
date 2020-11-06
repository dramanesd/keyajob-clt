import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../store/actions/category";
import CategoryItem from '../components/CategoryItem';

class CategoryList extends Component {
    componentDidMount() {
        this.props.fetchCategories();
    }
    render () {
        const { categories } = this.props;
        return (
            <div className="col-sm-12 col-md-3">
                <h4>Categories</h4>
                <CategoryItem
                    categories={categories}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryList);