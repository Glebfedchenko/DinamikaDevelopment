import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

class BlogItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                items: 3,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 5000,
                dots: false,
                slideBy: 3,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }

            }
        
        }


    }

    render() {
        return (
            <OwlCarousel
                ref={inst => this.slider = inst}
                className="owl-theme"
                {...this.state.options} {...this.state.events}
            >
                {this.props.users.map((user) => {
                    return (
                        <div className="thumbnail" key={user.id}>
                            <img className='img-responsive' src={user.image_url} alt="..." />
                            <div className="caption">
                                <h3>{user.name}</h3>
                                <p>{user.content}</p>
                                <Link to={{ pathname: `/newUsers/${user.id}` }}><p><button href="#" role="button">READ MORE</button> </p></Link>
                            </div>
                        </div>
                    )
                })}

            </OwlCarousel>
        );
    }
}

export default BlogItems;