import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('on');
    
    const handleChanges = updatedValue => {
        setValue(updatedValue);
      };
      return [value, setValue, handleChanges];
}

export default useDarkMode;