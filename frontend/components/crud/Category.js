import {useState, useEffect} from 'react';
import Link from 'next/link';
import Router from "next/router";
import {isAuth, getCookie} from '../../actions/auth';
import {create} from '../../actions/category';

const Category = () => {

    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        categories: [],
        removed: false
    });

    const {name, error, success, categories, removed} = values;
    const token = getCookie('token');

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">
                    Name
                </label>
                <input type="text" className="form-control" onChange={handlerChange} values={name} required/>
                <button type="submit" className="btn btn-dark">Create</button>
            </div>
        </form>
    )
};

export default Category;