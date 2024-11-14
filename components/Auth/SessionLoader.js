import React from 'react';
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

const SessionLoader = ({ children }) => {
    const session = useSession()

    if (session.status === 'loading') {
        return <div className="loading" />
    }

    if (session.status == "unauthenticated") {
        // to goes to login page with callback url
        signIn();
    }

    return <>{children}</>

};

export default SessionLoader;