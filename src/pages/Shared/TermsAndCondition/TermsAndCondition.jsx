import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <Container>
            <h4>Please Read carefully</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, pariatur accusamus? Tempore excepturi inventore nulla eaque! Enim fugiat exercitationem qui illum voluptates, cum praesentium quasi eius quisquam debitis non fugit, quidem molestias dolore ab porro reiciendis quaerat iste, sequi modi aliquam facere. Voluptas porro, vel sit labore velit autem, similique esse alias voluptate illo at enim aliquam cum officiis, libero excepturi blanditiis doloribus illum. Aliquam aliquid eveniet soluta aspernatur eum expedita assumenda? Voluptas reprehenderit tenetur fuga. Fugiat vel dolores architecto distinctio odit, earum, dolore reiciendis tempora soluta libero ullam, vitae delectus velit fugit voluptates ut commodi corporis et culpa sequi.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default TermsAndCondition;