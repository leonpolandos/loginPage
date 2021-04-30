import React, {useState} from 'react';
import firebase from '../../../Config/Firabase/index';
import NavBar from "../../molecules/NavBar";
import { useHistory } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullName] = useState('');

    let history = useHistory();
    
    const onSubmit = () => {
        const data = {
            email: email,
            fullName: fullname,

        };
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Simpan ke Realtime Database
                const userId = userCredential.user.uid;
                firebase.database().ref('users/' + userId).set({ data });

                setFullName('');
                setEmail('');
                setPassword('');
                history.push('/login');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container mt-5">
            <NavBar />
            <p className="form-label mt-3">Nama Lengkap</p>
            <input
                className="form-control"
                placeholder="Masukan Nama Lengkap"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
            />
            <p className="form-label mt-3">Email</p>
            <input
                className="form-control"
                placeholder="Masukan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p className="form-label mt-3">Password</p>
            <input
                className="form-control"
                placeholder="Masukan password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="button" onClick={onSubmit} className="btn btn-primary"> Register New User </button>
        </div>
    )
}

export default Register;

