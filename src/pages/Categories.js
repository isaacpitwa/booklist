import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check status</button>
      {categories}
    </div>

  );
}

export default Categories;
