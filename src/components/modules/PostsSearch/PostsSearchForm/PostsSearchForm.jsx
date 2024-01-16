import { Component } from 'react';
import styles from "./posts-search-form.module.scss"
class PostsSearchForm extends Component {
    state = {
    search: ""
    }
     
    handleChange = ({ target }) => {
        const { name, value, checked, type } = target;
        const newValue = type === "checkbox" ? checked : value;
        this.setState({
            [name]: newValue
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.reset();
    }
    
    reset() {
        this.setState({
            search: ""
        })
    }

    render() {

        const { search } = this.state;

        return (
            <form  onSubmit={this.handleSubmit}>
                <input
                    className={styles.input}
                    name='search'
                    value={search}
                    onChange={this.handleChange}
                    placeholder='Search post' 
                    required
                /> 
                <button className={styles.button} type='submit'>Search</button>
            </form>
        )
    }
}

export default PostsSearchForm;