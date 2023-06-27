"use client";

import Link from 'next/link';
import {Button} from '@/components/ui-ud/ui';
import {signOut, useSession} from "next-auth/react";

const HeaderButtons = () => {
    const {data: session} = useSession();

    const handleLogOut = () => signOut();
    return (
        <div className='header__buttons'>
            {
                session?.user ? (
                    <Button
                        type='default'
                        onClick={handleLogOut}
                    >
                        Выйти
                    </Button>
                ) : (
                    <>
                        <Link href='/login'>
                            <Button
                                type='default'
                                className='header__button header__login'
                            >
                                войти
                            </Button>
                        </Link>
                        <Link href='/register'>
                            <Button
                                type='painted'
                                className='header__button header__register'
                            >
                                зарегистрироваться
                            </Button>
                        </Link>
                    </>
                )
            }

        </div>
    );
};

export default HeaderButtons;
