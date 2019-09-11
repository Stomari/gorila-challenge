import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Config enzyme to React 16v
configure({ adapter: new Adapter() });