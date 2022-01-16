import React, { useEffect } from 'react';
import users from './users.json';
import useFormattedData from './useFormatted';

type FormattedProps = {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: string;
    zip: any;
};

const App = () => {
    const { formatted, search, filter, sortBy } = useFormattedData(users);

    useEffect(() => {
        search('lancelot');
        filter(({ zip }: any) => zip > 980);
        sortBy('firstName');
    }, []);

    return (
        <div className='users'>
            {formatted.map(
                ({ id, firstName, lastName, birthdate }: FormattedProps) => (
                    <div className='user' key={id}>
                        <div>
                            {firstName} {lastName}
                        </div>
                        <div>{birthdate}</div>
                    </div>
                )
            )}
        </div>
    );
};

export default App;
