import {configure} from 'enzeyme'
import Adapter from 'enzeyme-adapter-react-16'

import '@testing-library/jest-dom/extend-expect';


configure({adapter: new Adapter() })
