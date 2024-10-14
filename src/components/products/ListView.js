import React from 'react';

function ListView(props) {
    return (
        <div className="list-view">
            <div className="btn btn-gridview text-skin-base text-opacity-70">
                View as:
            </div>
            <button
                type="button"
                id="grid-5"
                className="btn btn-view grid active"
            >
                <div>
                    <div className="icon-bar"/>
                    <div className="icon-bar"/>
                    <div className="icon-bar"/>
                </div>
            </button>
            <button
                type="button"
                id="list-view"
                className="btn btn-view list "
            >
                <div>
                    <div className="icon-bar"/>
                    <div className="icon-bar"/>
                    <div className="icon-bar"/>
                </div>
            </button>
        </div>
    );
}

export default ListView;