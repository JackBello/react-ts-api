import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import CardUser from '../../Components/cards/user/CardUser.component';

import userApi from '../../Http/Apis/Test/userApi';

import IApiTestUser from '../../Types/@Interface/apis/web-test/user/user.interface';

export default function HomePage() {
    const [users, setUsers] = React.useState<IApiTestUser[] | []>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    const loadUsers = async (): Promise<void> => {
        const data = await userApi.getData();

        setUsers(data);
        setLoading(false);
    };

    React.useEffect(() => {
        loadUsers();
    }, [loading]);

    if(loading) {
        return(
            <div className="home-view">
                <CircularProgress/>
            </div>
        );
    }

    return(
        <div className="home-view">
        {
            users.map(
                (user) => <CardUser user={user} key={user.id}/>
            )
        }
        </div>
    );
}