import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCIVoAc1pcwyWFrAfF4xHzqz_koPrOU1r0';

// create component. this component produces html
/* functional component
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
);
}
*/

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      SelectedVideo: null
    };
    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //      this.setState({videos: videos})
    });
  }
  render(){
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos} />
    </div>
  );
}
}

//take this component and put it on the webpage
ReactDOM.render(<App />, document.querySelector('.container'));
