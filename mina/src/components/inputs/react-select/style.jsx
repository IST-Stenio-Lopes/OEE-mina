import styled from 'styled-components';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import Down from '../../../assets/down.svg';


export const SelectContainer = styled(Select)`

    .css-1s2u09g-control{
        border-color: rgba(229, 229, 229, 1);
    }

    .css-14el2xx-placeholder{
        margin-left: 3%;
        color: rgba(199, 199, 199, 1);
    }

    .css-1okebmr-indicatorSeparator{
        display: none;
    }

    .css-tlfecz-indicatorContainer{
        
        .css-tj5bde-Svg{
          path{
                display: none;
            }  
            padding-bottom: 20%;
            
            background:url(${Down}) no-repeat; 
        }
     
    }

`;