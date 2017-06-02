"use strict";


  //Fischer-Yates Algorithm
var randomArray=function(x){
        var length=x.length, j, temp, i;
        for(i=length-1; i>0;i--){
            j=Math.floor(Math.random()*(i+1));
            temp=x[i];
            x[i]=x[j];
            x[j]=temp;
        }
        return x;
  };
<div id="picbox">

            <span id="boxbuttons">
              <span class="button">
                <span id="counter">0</span>
                Clicks
              </span>
              <span class="button">
                <a onclick="ResetGame();">Reset</a>
              </span> 
            </span>
            <div id="boxcard"></div>
          </div>
React.createElement(
    "div",{
    idName: 'pickbox'},
    React.createElement(
      "h1", {
        className: 'page-header'
      },
      'Memory Game'
    ),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement(
      "section",
      null,
      content2
    ),
    React.createElement("hr", null),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement(
      "section",
      null,
      content2
    ),

    React.createElement(Clock, null),
    React.createElement(
      "section",
      {className: 'img-scroll'},
      null
    )
  );







function Blog(props) {
//Assigning a variable to posts property
var newPosts=props.posts;
var shuffle = randomArray(newPosts);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1", {
        className: 'page-header'
      },
      'Memory Game'
    ),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement(
      "section",
      null,
      content2
    ),
    React.createElement("hr", null),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement(
      "section",
      null,
      content2
    ),

    React.createElement(Clock, null),
    React.createElement(
      "section",
      {className: 'img-scroll'},
      null
    )
  );
}

var posts = [{
  id: 1,
  title: 'Hello World',
  content: './src/image/pic.jpg'
}, {
  id: 2,
  title: 'Installation',
  content: './src/image/pic2.jpg'
}, {
  id: 3,
  title: 'Hello World',
  content: './src/image/pic3.jpg'
}, {
  id: 4,
  title: 'Installation',
  content: './src/image/pic4.jpg'
}, {
  id: 5,
  title: 'Hello World',
  content: './src/image/pic5.jpg'
}, {
  id: 6,
  title: 'Installation',
  content: './src/image/pic6.jpg'
}, {
  id: 7,
  title: 'Installation',
  content: './src/image/pic7.jpg'
}, {
  id: 8,
  title: 'Installation',
  content: './src/image/pic8.jpg'
}];
ReactDOM.render(React.createElement(Blog, {
  posts: posts
}), document.getElementById('root'));