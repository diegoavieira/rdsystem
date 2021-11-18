import React from 'react';
import { render } from '@testing-library/react';
import RdsSandbox from './RdsSandbox';

describe('<RdsSandbox />', () => {
  test('should has rendered', () => {
    render(<RdsSandbox demo={<p></p>} code={<pre></pre>} />);
  });
});
