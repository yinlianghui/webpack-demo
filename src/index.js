import _ from 'lodash';
import styles from './styles.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    // element.onclick = Print.bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());

