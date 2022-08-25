import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {

    //Calling state without a constructor
    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message})
        );
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        } 
        if (!this.state.errorMessage && this.state.lat ){
            return <SeasonDisplay lat={this.state.lat} />
        }

        //return <Spinner />
       return(
        <div>
            <Spinner message="Please accept user request" />
        </div>
       )
    }
   

    render(){
        return(
        <div className="border red">
            {this.renderContent()}
        </div>
        )

    }
}

root.render(<App />);