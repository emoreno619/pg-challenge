import get from 'lodash/get';

export const getUsers = (state, props) => get(state, 'users.users') || [];