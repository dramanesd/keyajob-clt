import React from 'react';

const Blog = () => {
    return (
        <div className="blog-coming-soon">
            <div style={{marginTop: 80}}>
                <h1>Coming soon!</h1>
                <h2>Be ready, there is just:</h2>
                <ul className="countdown list-unstyled">
                    <li>
                        <span className="days">365</span>
                        <p className="days-refs">Days</p>
                    </li>
                    <li>
                        <span className="days">00</span>
                        <p className="days-refs">Hours</p>
                    </li>
                    <li>
                        <span className="days">23</span>
                        <p className="days-refs">Minutes</p>
                    </li>
                    <li>
                        <span className="days">03</span>
                        <p className="days-refs">Seconds</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Blog;