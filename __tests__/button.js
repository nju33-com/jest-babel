import React from 'react';
import { render } from '@testing-library/react';

test('🎉', () => expect(render(<i />).container.firstChild).toMatchSnapshot());
