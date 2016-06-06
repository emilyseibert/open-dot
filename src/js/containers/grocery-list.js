import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import i18n from '../i18n';

import { addListItem , getInitialGroceryList} from '../actions/grocery-list';
import List from '../components/list';

const mapStateToProps = (state) => {
    const { list } = state.groceryList;

    return {
        list
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators({
            addListItem,
            getInitialGroceryList
        }, dispatch)
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class GroceryList extends React.Component {
    static propTypes = {
        actions: PropTypes.shape({
            addListItem: PropTypes.func.isRequired,
            getInitialGroceryList: PropTypes.func.isRequired
        }).isRequired,
        list: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    componentDidMount() {
        this.props.actions.getInitialGroceryList();
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.actions.addListItem(this.refs.input.value);
        this.refs.input.value = '';
    }

    render() {
        return (
            <div className="grocery-list-container">
                <h3 className="grocery-list-title">Grocery List</h3>
                <List listItems={this.props.list} />
                <form onSubmit={::this.onSubmit}>
                    <input type="text"
                        ref="input"
                        placeholder="Add Grocery Item"
                        tabIndex="0"
                        role="combobox"
                        required
                        aria-labelledby="add list item" />
                    <button type="submit">
                        {i18n.getString('GROCERY_LIST_ADD_BUTTON_TEXT')}
                    </button>
                </form>
            </div>
        );
    }
}
