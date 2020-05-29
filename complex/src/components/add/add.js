import React from "react";

import './add.sass'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

export const Add = ({ children }) => {



    return (
        <div className='maps'>
            <div className="row">
                <div className="col-md-6 append-news">
                    <div className="corners-rounded bg-white news-item text-center">
                        <div className="crop corners-rounded">
                            <img width='50%' src="https://lh3.googleusercontent.com/lMzW11yFNcj-nrbABOZq2ZlnB1faxOAmgPYS8tCHhUhW6aMJ5dYijj6pCKCcN84Z3ToF=s130"
                                 alt="Игроленд  временно не работает"/>
                        </div>
                        <div className="news-date">12 марта 2020</div>
                        <a className="news-title h4">Игроленд временно не работает</a>
                        <p className="news-desc">
                            Игроленд с 12.03.2020 временно закрыт на карантин
                        </p>
                        <Button сlassName = 'headerBtn'
                                variant="contained"
                                color="primary"
                                size="small"
                        >
                            <Link to="/more">Детальніше</Link>
                        </Button>
                    </div>
                </div>
                <div className="col-md-6 append-news">
                    <div className="corners-rounded bg-white news-item text-center">
                        <div className="crop corners-rounded">
                            <img width='50%' src="https://lh3.googleusercontent.com/lMzW11yFNcj-nrbABOZq2ZlnB1faxOAmgPYS8tCHhUhW6aMJ5dYijj6pCKCcN84Z3ToF=s130"
                                 alt="Игроленд  временно не работает"/>
                        </div>
                        <div className="news-date">12 марта 2020</div>
                        <a className="news-title h4">Игроленд временно не работает</a>
                        <p className="news-desc">
                            Игроленд с 12.03.2020 временно закрыт на карантин
                        </p>
                        <Button сlassName = 'headerBtn'
                                variant="contained"
                                color="primary"
                                size="small"
                        >
                            <Link to="/more">Детальніше</Link>
                        </Button>
                    </div>
                </div>
                <div className="col-md-6 append-news">
                    <div className="corners-rounded bg-white news-item text-center">
                        <div className="crop corners-rounded">
                            <img width='50%' src="https://lh3.googleusercontent.com/lMzW11yFNcj-nrbABOZq2ZlnB1faxOAmgPYS8tCHhUhW6aMJ5dYijj6pCKCcN84Z3ToF=s130"
                                 alt="Игроленд  временно не работает"/>
                        </div>
                        <div className="news-date">12 марта 2020</div>
                        <a className="news-title h4">Игроленд временно не работает</a>
                        <p className="news-desc">
                            Игроленд с 12.03.2020 временно закрыт на карантин
                        </p>
                        <Button сlassName = 'headerBtn'
                                variant="contained"
                                color="primary"
                                size="small"
                        >
                            <Link to="/more">Детальніше</Link>
                        </Button>
                    </div>
                </div>
                <div className="col-md-6 append-news">
                    <div className="corners-rounded bg-white news-item text-center">
                        <div className="crop corners-rounded">
                            <img width='50%' src="https://lh3.googleusercontent.com/lMzW11yFNcj-nrbABOZq2ZlnB1faxOAmgPYS8tCHhUhW6aMJ5dYijj6pCKCcN84Z3ToF=s130"
                                 alt="Игроленд  временно не работает"/>
                        </div>
                        <div className="news-date">12 марта 2020</div>
                        <a className="news-title h4">Игроленд временно не работает</a>
                        <p className="news-desc">
                            Игроленд с 12.03.2020 временно закрыт на карантин
                        </p>
                        <Button сlassName = 'headerBtn'
                                variant="contained"
                                color="primary"
                                size="small"
                        >
                            <Link to="/more">Детальніше</Link>
                        </Button>
                    </div>
                </div>

            </div>

        </div>



    );
};
