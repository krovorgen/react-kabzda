import { Meta } from '@storybook/react';
import { memo, useState } from 'react';

export default {
    title: 'React.memo demo',
} as Meta;

const Counter = (props: { count: number }) => <div>{props.count}</div>;

const UsersSecret = (props: { users: string[] }) => {
    console.log('render');
    return (
        <div>
            {props.users.map((u, i) => (
                <span key={i}>{u} </span>
            ))}
        </div>
    );
};

const Users = memo(UsersSecret);

export const Example1 = () => {
    let [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(Array(1000).fill('maksim'));

    const addUser = () => {
        setUsers([...users, 'Roma']);
    };

    return (
        <>
            <button onClick={() => setCounter(++counter)}>Click</button>
            <button onClick={addUser}>add users</button>
            <Counter count={counter} /> <Users users={users} />
        </>
    );
};
