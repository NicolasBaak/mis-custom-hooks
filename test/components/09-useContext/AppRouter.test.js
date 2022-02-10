import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContex';

describe('Pruebas en <AppRouter />', () => { 

    const user = {
        id: 1,
        name: 'Nicolas'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {  
        expect(wrapper).toMatchSnapshot();
    })
 })