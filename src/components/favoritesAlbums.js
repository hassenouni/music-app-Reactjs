import React, { Component } from 'react';
import Header from './widgets/header';
import * as actions from './action/index';
import { Link } from 'react-router-dom';
import './home.css';



class FavoritesAlbums extends Component {

    state = {
        albums: []
    }
    componentDidMount() {

        let favorites = actions.getFavoritesAlbums();
        this.setState({
            albums: JSON.parse(favorites)
        })

    }






    renderAlbums = () => {
        const { albums } = this.state;
        return albums && albums.length ?
            albums.map((item, index) => (
                < div Key={index} className="col-md-4 mb-2" >
                    <div className="card border-danger">
                        <img src={item.album.cover_big} alt="" className="card-img-top" />
                        <div className="card-body">
                            <span className="text-primary">{item.artist.name}</span>
                            <div className="card-title">
                                {item.title}
                            </div>

                        </div>
                        <div className="card-footer">
                            <div className="Links">
                                <Link to={`/details/${item.album.id}`} className='Link'><i className="fas fa-info text-danger"></i></Link>
                            </div>
                        </div>


                    </div>
                </div>


            ))

            : null


    }
    render() {
        console.log(this.state);

        return (


            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-10 mx-auto">
                        <Header />
                        <div className="row">
                            {this.renderAlbums()}


                        </div>


                    </div>

                </div>


            </div>


        )
    }
}

export default FavoritesAlbums;