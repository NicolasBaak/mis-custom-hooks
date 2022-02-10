import React from 'react';
import { HookApp } from '../HookApp';
import { shallow } from 'enzyme';

describe('Prubeas en <HookApp />', () => {
  
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
  
});
