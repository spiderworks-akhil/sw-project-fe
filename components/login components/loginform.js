import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SVGIcons from '../dashboard components/utils/medias/svg';
// import ForgotPasswordModal from './modal/forgotModal';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [passwordType, setpasswordType] = useState(true)

    const router = useRouter();
    const { callbackUrl } = router.query;

    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault();
        // Handle form submission logic here (e.g., send login request)
        signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
        }).then((result) => {
            console.log(result);

            if (result.ok) {
                setEmail('');
                setPassword('');
                router.push(callbackUrl || '/dashboard');
                toast.success('Sign in Successfully')
                setLoading(false)
            } else {
                setLoading(false)
                toast.error(result?.error)
            }
        }).catch((error) => {
            setLoading(false)
            toast.error(error?.error)
        })

    };

    // forgot modal functions
    // const [editId, setEditId] = useState()
    // const handleOpen = () => {
    //     setEditId(0)
    // }

    return (
        <>
            {/* <ForgotPasswordModal editId={editId} setEditId={setEditId} /> */}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">

                    <SVGIcons.LoginMailIcon />


                    <label htmlFor="email">
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your official email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <SVGIcons.LoginPasswordIcon />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='lg-ic1'>
                        <path d="M11.9992 22.9542C13.1248 22.9542 14.2394 22.7325 15.2793 22.3018C16.3192 21.871 17.2641 21.2397 18.0601 20.4437C18.856 19.6478 19.4874 18.7029 19.9181 17.6629C20.3489 16.623 20.5706 15.5084 20.5706 14.3828V9.61709C20.5707 7.51141 19.7957 5.47936 18.3934 3.90852M3.42773 11.5199V14.3828C3.42716 16.0702 3.92463 17.7202 4.85778 19.126C5.79094 20.5318 7.11828 21.631 8.67345 22.2857M16.2849 2.19423C14.3162 1.05764 11.9767 0.749632 9.78089 1.33796C7.58512 1.92628 5.71298 3.36275 4.57631 5.33138C4.10827 6.13971 3.77804 7.02032 3.59916 7.93709" stroke="#0B0D23" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.1077 6.01708C11.7382 5.88618 12.3901 5.89847 13.0152 6.05305C13.6403 6.20762 14.2228 6.50053 14.7197 6.91018C15.2165 7.31984 15.6151 7.83579 15.886 8.41999C16.1569 9.00419 16.2932 9.64175 16.2849 10.2857V13.0457M15.1877 16.6457C14.6044 17.2954 13.8366 17.7514 12.987 17.9528C12.1375 18.1542 11.2466 18.0913 10.4338 17.7725C9.62095 17.4537 8.92486 16.8942 8.4387 16.1689C7.95254 15.4437 7.6995 14.5872 7.71344 13.7142V10.2857C7.71018 9.69687 7.82683 9.1136 8.05629 8.57136M11.9992 10.4742V13.3371" stroke="#0B0D23" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>


                    <svg onClick={() => setpasswordType(!passwordType)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='lg-ic2'>
                        <path d="M3.58631 13.7788C5.36575 15.5478 8.46904 17.9999 11.9997 17.9999C15.5303 17.9999 18.6331 15.5478 20.4125 13.7788C20.8818 13.3123 21.1172 13.0782 21.2667 12.6201C21.3733 12.2933 21.3733 11.7067 21.2667 11.3799C21.1172 10.9218 20.8818 10.6877 20.4125 10.2211C18.633 8.45208 15.5303 6 11.9997 6C8.46904 6 5.36575 8.45208 3.58631 10.2211C3.11665 10.688 2.8818 10.9216 2.73231 11.3799C2.62569 11.7067 2.62569 12.2933 2.73231 12.6201C2.8818 13.0784 3.11665 13.3119 3.58631 13.7788Z" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99951 12C9.99951 13.1046 10.8949 14 11.9995 14C13.1041 14 13.9995 13.1046 13.9995 12C13.9995 10.8954 13.1041 10 11.9995 10C10.8949 10 9.99951 10.8954 9.99951 12Z" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <label htmlFor="password">
                    </label>
                    <input
                        type={passwordType ? 'password' : 'text'}
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button disabled={loading} type="submit">
                    {
                        loading ?
                            <div className='flex justify-center' ><div className="spinner"></div></div>
                            :
                            'Sign in'
                    } <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                        <path d="M11.375 19.5H27.625M27.625 19.5L21.125 13M27.625 19.5L21.125 26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {/* <div className='mt-5 flex justify-center'>
                    <a onClick={handleOpen} className='forgot-text'>Forgot Password?</a>
                </div> */}
            </form>
        </>

    );
};

export default LoginForm;