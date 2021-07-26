import { Meta } from '@storybook/react';
import { ChangeEvent, FC, memo, useCallback, useMemo, useState } from 'react';

export default {
    title: 'UseMemo demo',
} as Meta;

export const Example = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(3);

    const onChangeA = (e: ChangeEvent<HTMLInputElement>) => setA(Number(e.currentTarget.value));
    const onChangeB = (e: ChangeEvent<HTMLInputElement>) => setB(Number(e.currentTarget.value));

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeValue = Math.random();
            }

            tempResultA *= i;
        }

        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={onChangeA} />
            <input value={b} onChange={onChangeB} />
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    );
};

const UsersSecret = (props: { users: string[] }) => {
    return (
        <div>
            {props.users.map((u, i) => (
                <span key={i}>{u} </span>
            ))}
        </div>
    );
};

const Users = memo(UsersSecret);

export const HelpsToReactMemo = () => {
    let [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<string[]>(Array(1000).fill('maksim'));

    const newArray = useMemo(() => {
        console.log('Render users');
        return users.filter((item) => item.toLowerCase().indexOf('a') > -1);
    }, [users]);

    const addUser = () => {
        setUsers([...users, 'Roma']);
    };
    return (
        <>
            <button onClick={() => setCounter(++counter)}>Click</button>
            <button onClick={addUser}>add users</button>
            {counter}
            <Users users={newArray} />
        </>
    );
};

export const LikeUseCallback = () => {
    let [counter, setCounter] = useState(0);
    const [books, setBooks] = useState<string[]>(Array(10).fill('react doc'));

    const memoizedAddBook = useCallback(() => {
        console.log(books);
        setBooks([...books, 'angular doc']);
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(++counter)}>Click</button>
            {counter}
            <Books addBook={memoizedAddBook} />
        </>
    );
};

interface BooksSecretParams {
    addBook: () => void;
}

const BooksSecret: FC<BooksSecretParams> = ({ addBook }) => {
    return (
        <div>
            <button onClick={addBook}>add books</button>
        </div>
    );
};

const Books = memo(BooksSecret);
