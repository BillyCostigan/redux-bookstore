import React from 'react';

const News = () => {
    return (
        <div className="news-container">
            <ul className="nav navbar-nav">
                <li>
                    <button type="button" className="btn btn-default btn-lg">
                        <span className="glyphicon glyphicon-heart icon"></span>
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-default btn-lg">
                        <span className="glyphicon glyphicon-book icon"></span>
                    </button>
                </li>
                <li>
                    <button type="button" className="btn btn-default btn-lg">
                        <span className="glyphicon glyphicon-book icon"></span>
                    </button>
                </li>
            </ul>
        </div>
    )
};
export default News;