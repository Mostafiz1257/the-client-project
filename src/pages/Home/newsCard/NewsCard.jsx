import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex '>

                <Image style={{ height: `40px` }} src={author.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>
                        {moment(author?.published_date).format("MMM-Do-YY")}
                    </small></p>
                </div>
                <div>
                    <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />

                <Card.Text>
                    {details < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read more</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 align-items-center'>
                    <Rating
                        placeholderRating={rating.number}
                        emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    {rating.number}
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;