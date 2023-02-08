import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../../features/counter/counterSlice';
import { auth, porvider } from '../../../Firebase/firebase';

const Login = () => {
    const {register, formState: {errors}, handleSubmit} = useForm()
    const [getError, setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    let showError = getError.slice(getError.indexOf('w'), getError.indexOf(')'));

    const from = location.state?.from?.pathname || "/";

   const loginHandler = data => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              }))
              navigate(from, { replace: true });

        })
        .catch(error => setError(error))
    }

    const singinWithGoogle = () => {
        signInWithPopup(auth, porvider)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              }))
              navigate(from, { replace: true });
        })
        .catch(error => setError(error))
    }


    return (
        <div className="h-96 flex justify-center items-center my-10">
            <div className='shadow-xl w-96 p-7'>
                <h1 className='text-center text-3xl font-bold'>LogIn</h1>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input  {...register("email", {required: "Email Address is required"})} type="text" className="input input-bordered w-full" />
                        {errors.email && <p role="alert" className='mt-2 text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> 
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input  {...register("password", {required: "Password is required"})} type="password" className="input input-bordered w-full" />
                        {errors.password && <p role="alert" className='mt-2 text-red-500'>{errors.password?.message}</p>}
                        {getError && <p className='mt-2 text-red-500'>{showError}</p> }
                    </div>
                    <input className='btn w-full my-5' type="submit" value={'Login'}/>
                </form>
                <p className='text-xs text-center mt-3'>New To This Site ? <Link to={'/registration'} className='text-secondary'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={singinWithGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;