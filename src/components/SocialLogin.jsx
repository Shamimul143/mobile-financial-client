
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import useAxiosPublic from '../hook/useAxiosPublic';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const { githubLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/dashboard');
            })
        })
    }
    const handleGitHubSignIn = () =>{
        githubLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/dashboard');
            })
        })
    }


    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn mr-5">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button>
                <button onClick={handleGitHubSignIn} className="btn">
                    <FaGithub className="mr-2"></FaGithub>
                    Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;