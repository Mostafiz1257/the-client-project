import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container} from 'react-bootstrap';
import { AuthContext } from '../../../Provider/AuthProvider';


const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('MMMM D,YYYY h:mm:ss a')}</p>
            </div>
            <div className='d-flex mb-2' >
                <Button variant="danger">News:</Button>

                <Marquee className='text-danger' speed={70} pauseOnClick={true}>
                    I can be a React component, multiple React components, or just some text..........
                    I can be a React component multiple React components, or just some text.
                </Marquee>
            </div>

           
        </Container>
    );
};

export default Header;