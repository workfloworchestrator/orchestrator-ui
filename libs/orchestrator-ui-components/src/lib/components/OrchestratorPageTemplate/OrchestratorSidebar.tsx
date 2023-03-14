import React, { FC } from 'react';
import { EuiSideNav } from '@elastic/eui';
import { useRouter } from 'next/router';

export interface OrchestratorSidebarProps {
    text: string;
}

export const OrchestratorSidebar: FC<OrchestratorSidebarProps> = ({ text }) => {
    const router = useRouter();

    return (
        <EuiSideNav
            mobileTitle="Nav Items"
            isOpenOnMobile={false}
            items={[
                {
                    name: 'Menu',
                    id: 1,
                    items: [
                        {
                            name: 'Home',
                            id: 2,
                            onClick: (e) => {
                                e.preventDefault();
                                router.push('/');
                            },
                            href: '/',
                        },
                        {
                            name: 'Subscriptions table',
                            id: 3,
                            // TODO: NEXT router / EUI seem to cause unneeded re-renders. At least in dev mode,
                            onClick: (e) => {
                                e.preventDefault();
                                router.push('/subscriptions-table');
                            },
                            href: '/subscriptions-table',
                        },
                        {
                            name: 'Subscriptions grid',
                            id: 3,
                            // TODO: NEXT router / EUI seem to cause unneeded re-renders. At least in dev mode,
                            onClick: (e) => {
                                e.preventDefault();
                                router.push('/subscriptions-grid');
                            },
                            href: '/subscriptions-grid',
                        },
                        // {
                        //     name: 'Anchor item',
                        //     id: 4,
                        //     href: '#',
                        // },
                    ],
                },
            ]}
        />
    );
};
