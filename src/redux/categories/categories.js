const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
