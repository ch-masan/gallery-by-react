require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
/*//获取图片相关的信息
var imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (imageDatas) => {
	for (var i = 0; i < imageDatas.length; i++) {
		let singleImageDate = imageDatas[i];
		singleImageDate.imageURL = require('../images/' + singleImageDate.fileName);
		imageDatas[i] = singleImageDate;
	}
	return imageDatas;
};


let yeomanImage = require('../images/yeoman.png');*/

class AppComponent extends React.Component {
	render() {
		return (
			/*<div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />

        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>*/
			<section className="stage">
                <section className="img-sec">1234</section>
                <nav className="controller-nav"></nav>
            </section>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;
