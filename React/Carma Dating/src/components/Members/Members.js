import React, { Component } from 'react';

import Online from './Online';
import New from './New';

class Members extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newMembers: true,
            onlineMembers: false,
            data: [
                { id: 1, name: 'NAME LASTNAME', age: '25 years', photo: 'http://apaches.pro/wp-content/uploads/2014/06/olya-270x270.jpg', Online: true, newMember: true },
                { id: 2, name: 'NAME LASTNAME', age: '25 years', photo: 'http://apaches.pro/wp-content/uploads/2017/04/beck-270x270.jpg', Online: true, newMember: true },
                { id: 3, name: 'NAME LASTNAME', age: '25 years', photo: 'http://apaches.pro/wp-content/uploads/2017/07/nana-270x270.jpg', Online: true, newMember: true },
                { id: 4, name: 'NAME LASTNAME', age: '25 years', photo: 'https://www.adidas.net.ua/image/cache/catalog/img_products/05_2017/CF9969_21_model-270x270.jpg', Online: false, newMember: true },
                { id: 5, name: 'NAME LASTNAME', age: '25 years', photo: 'http://yourrootsinpoland.com/wp-content/uploads/2016/09/IMG_4083-270x270.jpg', Online: false, newMember: true },
                { id: 6, name: 'NAME LASTNAME', age: '25 years', photo: 'http://yourrootsinpoland.com/wp-content/uploads/2016/09/THANK-YOU-1-270x270.png', Online: true, newMember: true },
                { id: 7, name: 'NAME LASTNAME', age: '25 years', photo: 'http://yourrootsinpoland.com/wp-content/uploads/2017/05/DSC0956low-270x270.jpg', Online: false, newMember: true },
                { id: 8, name: 'NAME LASTNAME', age: '25 years', photo: 'https://www.on1.com/s3-images/wp-content/uploads/2016/09/Dreamy-BW-270x270.jpg?x54645', Online: true, newMember: true },
                { id: 9, name: 'NAME LASTNAME', age: '25 years', photo: 'http://yourrootsinpoland.com/wp-content/uploads/2017/01/lukasz_zdjecie-270x270.jpg', Online: false, newMember: true }

            ],

        };
    }

    switch(word) {
        var newmember, onlinemember;
        if (word === 'new') {
            newmember = true;
            onlinemember = false;
        } else {
            newmember = false;
            onlinemember = true;
        }
        return this.setState({ newMember: newmember, onlineMembers: onlinemember });
    }

    render() {
        return (
            <section id='memberssection'>
                <div className='container'>
                    <div className="col-xs-6 text-right">
                        <a onClick={this.switch.bind(this,'f')} href="" id='newm'>New Members</a>
                    </div>
                    <div className="col-xs-6 text-left">
                        <a onClick={this.switch.bind(this,'new')} href="" id='onm'>Online Members</a>
                    </div>
                </div>
                <div className='container'>
                    {this.state.newMembers ? <New data={this.state.data} /> : null}
                    {this.state.onlineMembers ? <Online data={this.state.data} /> : null}

                </div>
            </section>
        );
    }
}

export default Members;