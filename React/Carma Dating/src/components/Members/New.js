import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import {Link} from 'react-router-dom';

class New extends Component {
     constructor(props) {
        super(props);

        this.state = {
            options: {
                items: 4,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 2000,
                dots: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 4
                    },
                    1000: {
                        items: 4
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
                        {...this.state.options}
                    >
                        {this.props.data
                            .filter(user => {
                                return user.newMember === true
                            })
                            .map(user => {
                                return (
                                    <div key={user.id} className='item text-center'>
                                        <h4><img src={user.photo} alt="" /></h4>
                                        <Link to={{pathname:`/newUsers/${user.id}`}}><h3>{user.name}</h3></Link>
                                        <p>{user.age}</p>
                                    </div>
                                )
                            })
                        }

                    </OwlCarousel>
        );
    }
}

export default New;