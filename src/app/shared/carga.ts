import { environment } from './../../environments/environment';

const API = (environment['envName'] === 'DEV') ? 'http://localhost:3000' : 'https://leitores-api.herokuapp.com';
export{ API };
