import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReview from '../hooks/ViewReview';
import Image from '../Image/overview-1-removebg-preview.png'
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews] = useReview();
    return (
        <div>
            <div className='d-flex p-5 m-5'>
                <div className='p-5 m-5'>
                    <h1 className='fw-bolder'>Best Camera</h1>
                    <h1 className='text-primary fw-bolder'>For You</h1>
                    <p>The EOS R5 is Canon's flagship full-frame mirrorless camera in 2020. It features an all-new, Canon-developed 45MP CMOS sensor with in-body image stabilization that can reduce shake by up to 8 stops. The camera uses the Dual Pixel AF II system, which has 1053 AF points across the entire frame. The advanced autofocus system uses Deep Learning to track both people and animals. The R5 is capable of shooting bursts at 20 fps with its electronic shutter and 12 fps with the mechanical shutter, both with continuous AF.</p>
                    <Button variant="outline-warning" size="lg">Live Demo</Button>{' '}

                </div>
                <div>
                    <img src={Image} alt="" />
                </div>
            </div>
            <div>
                <h2 className='fw-bold p-5'>Customers Reviews (3)</h2>
                {
                    reviews.slice(0,3).map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
                <Link to="/reviews">
                    <Button className='mt-5' variant="primary" size="lg">
                    See All Reviews
                    </Button>
                </Link>
            </div>

        </div>

    );
};

export default Home;