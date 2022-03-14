import React from 'react';
import { ColectorProvider } from './colector/colector';

import { MachineProvider } from './machine/machine';
import { StopProvider } from './stop/stop';
import { UserProvider } from './user/user';
import { WorkstationProvider } from './workstation/workstation';

const AppProvider: React.FC = ({ children }) => (


    <ColectorProvider>
        <WorkstationProvider>
            <MachineProvider>
                <StopProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </StopProvider>
            </MachineProvider>
        </WorkstationProvider>
    </ColectorProvider>



);

export default AppProvider;
