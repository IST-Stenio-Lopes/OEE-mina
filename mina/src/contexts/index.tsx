import React from 'react';
import { ColectorProvider } from './colector/colector';

import { MachineProvider } from './machine/machine';
import { WorkstationProvider } from './workstation/workstation';

const AppProvider: React.FC = ({ children }) => (


    <ColectorProvider>
        <WorkstationProvider>
            <MachineProvider>
                {children}
            </MachineProvider>
        </WorkstationProvider>
    </ColectorProvider>



);

export default AppProvider;
