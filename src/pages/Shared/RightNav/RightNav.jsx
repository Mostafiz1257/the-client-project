import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg1.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='mb-2' variant="primary"><FaGoogle></FaGoogle> Login with google</Button>
            <Button variant="secondary"><FaGithub></FaGithub> Login with github</Button>
            <div>
                <h4>Find US On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Isntragram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>

    );
};

export default RightNav;