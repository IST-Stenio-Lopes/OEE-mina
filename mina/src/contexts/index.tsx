import React from 'react';

import { AlertProvider } from './alert/alert';
import { AuthProvider } from './auth/auth';
import { CollectorProvider } from './colector/colector';
import { MachineProvider } from './machine/machine';
import { StopProvider } from './stop/stop';
import { WorkstationProvider } from './workstation/workstation';

const AppProvider: React.FC = ({ children }) => (

    <AuthProvider>

        <CollectorProvider>
            <WorkstationProvider>
                <MachineProvider>
                    <StopProvider>
                        <AlertProvider>
                            {children}
                        </AlertProvider>
                    </StopProvider>
                </MachineProvider>
            </WorkstationProvider>
        </CollectorProvider>

    </AuthProvider>


);

export default AppProvider;
