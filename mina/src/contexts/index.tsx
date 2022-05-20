import { AlertProvider } from './alert/alert';
import { AuthProvider } from './auth/auth';
import { CollectorProvider } from './colector/colector';
import { MachineProvider } from './machine/machine';
import { OrderProvider } from './order/order';
import { StopProvider } from './stop/stop';
import { WorkstationProvider } from './workstation/workstation';
import React, { ReactNode } from 'react';

type AppProvider = {
    children: ReactNode
}

const AppProvider: React.FC<AppProvider> = ({ children }) => (

    <AuthProvider>
        <OrderProvider>
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
        </OrderProvider>
    </AuthProvider>


);

export default AppProvider;
