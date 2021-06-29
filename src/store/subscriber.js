import store from './Store';
import axios from 'axios';

store.subscribe((mutations) => {
    switch (mutations.type) {
        case 'SET_TOKEN':
            if (mutations.payload) {
                axios.defaults.headers.common[
                    'token_type'
                ] = `bearer ${mutations.payload}`;
                localStorage.setItem('token', mutations.payload);
            } else {
                axios.defaults.headers.common['token_type'] = null;
                localStorage.removeItem('token');
            }
            // console.log(mutations.payload)
            break;
    }
});
