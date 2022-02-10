import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
      name: 'nicolas',
      email: 'nicolas123alejandro@correo.com'
  };

  test('Debe de regresar un formulario por defecto', () => {
    const {result} = renderHook( ()=>useForm(initialForm) );
    
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toBe(initialForm);

    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
    
  });

  test('debe de cambiar el valor del fomulario (cambiar name)', () => {
    const {result} = renderHook( ()=>useForm(initialForm) );
    const [ , handleInputChange] = result.current;

    act(()=>{
        handleInputChange({
            target: { 
                name: 'name',
                value: 'Juan'
            }
        });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual( {...initialForm, name: 'Juan'});
  });
  
  test('debe de re-establecer el formulario con RESET', () => {
    const {result} = renderHook( ()=>useForm(initialForm) );
    const [ , handleInputChange, reset] = result.current;

    act(()=>{
        handleInputChange({
            target: { 
                name: 'name',
                value: 'Juan'
            }
        });
        reset();
    });

    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
  
});
