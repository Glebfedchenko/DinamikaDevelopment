import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { "id": 1, name: 'BLOG TITLE', "image_url": "http://www.pult.ee/wp-content/uploads/2017/01/poster-270x270.jpg", "title": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget", "content": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "link": "https://domainmarket.com" },
                { "id": 2, name: 'BLOG TITLE', "image_url": "http://www.pult.ee/wp-content/uploads/2014/10/270x270-270x270.jpg", "title": "vel auge vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia", "content": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "link": "https://mayoclinic.com" },
                { "id": 3, name: 'BLOG TITLE', "image_url": "http://folkfashion.com.ua/image/cache/catalog/%20lbook02/_RED2643-Edit-270x270.jpg", "title": "proin eu mi nulla ac enim in tempor turpis nec", "content": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "link": "https://unblog.fr" },
                { "id": 4, name: 'BLOG TITLE', "image_url": "http://www.lacie.com/lacie-content/products/10647-lacie-lacie-media-app-prod/images/laCie-media-app-270x270.jpg", "title": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum", "content": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.", "link": "http://buzzfeed.com" },
                { "id": 5, name: 'BLOG TITLE', "image_url": "https://www.hands.org/wp-content/uploads/2016/06/nepal-rises-270x270.png", "title": "pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst", "content": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "link": "http://cisco.com" },
                { "id": 6, name: 'BLOG TITLE', "image_url": "http://sbjventures.com/wp-content/uploads/2014/09/Camera-270x270.png", "title": "at nulla suspendisse potenti cras in purus eu magna vulputate luctus", "content": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "link": "https://virginia.edu" },
                { "id": 7, name: 'BLOG TITLE', "image_url": "https://www.on1.com/s3-images/wp-content/uploads/2017/02/Hudson-Henry-2017-Core-Landscape-Presets-270x270.jpg?x54645", "title": "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh", "content": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "link": "http://tamu.edu" },
                { "id": 8, name: 'BLOG TITLE', "image_url": "http://www.pult.ee/wp-content/uploads/2016/09/270x270-b-270x270.jpg", "title": "nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer", "content": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.", "link": "http://ning.com" },
                { "id": 9, name: 'BLOG TITLE', "image_url": "https://www.on1.com/s3-images/wp-content/uploads/2017/02/Blake-Rudis-Matte-Collection-270x270.jpg?x54645", "title": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris", "content": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.", "link": "https://hhs.gov" }
            ]
        }
    }

    search(){
        console.log('search..')
    }
    render() {
        const options = (x, index) => {
            return <option key={index}>{x}</option>
        }
        return (
            <div id='search'>
                <div className='selections text-center'>
                    <select defaultValue={this.props.defaults[0]} name="" id="" className='text-left i'>
                        <option
                            value={this.props.defaults[0]}
                            disabled>{this.props.defaults[0]}
                        </option>
                        {this.props.i.map(options)}
                    </select>
                    <select defaultValue={this.props.defaults[1]} name="" id="" className='s'>
                        <option disabled value={this.props.defaults[1]}>{this.props.defaults[1]}</option>
                        {this.props.seek.map(options)}
                    </select>
                    <select defaultValue={this.props.defaults[2]} name="" id="" className='a'>
                        <option disabled value={this.props.defaults[2]}>{this.props.defaults[2]}</option>
                        {this.props.age.map(options)}
                    </select>
                    <select defaultValue={this.props.defaults[3]} name="" id="" className='t'>
                        <option disabled value={this.props.defaults[3]}>{this.props.defaults[3]}</option>
                        {this.props.to.map(options)}
                    </select>
                    <select defaultValue={this.props.defaults[4]} name="" id="" className='c'>.
                      <option disabled value={this.props.defaults[4]}>{this.props.defaults[4]}</option>
                        {this.props.country.map(options)}
                    </select>
                    <button onClick={this.search.bind(this)} className='btn btn-lg'>SEARCH</button>
                </div>
            </div>
        );
    }
}

export default Search;