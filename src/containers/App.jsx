import React from 'react';
import CardList from '../components/CardList.jsx'
import SearchBox from '../components/SearchBox.jsx'
import PropTypes from 'prop-types';
import Scroll from '../components/Scroll.jsx'
import ErrorBoundry from '../components/ErrorBoundry.jsx';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange =(event) => {
        this.setState({ searchField: event.target.value })


    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(users => this.setState({ robots: users }))

    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading</h1>:
            (

                <div>
                    <h1 className="tc">RoboFriends</h1>

                    <SearchBox searchChange={this.onSearchChange}/>

                    <div className="flex justify-center">
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={filteredRobots} />
                            </ErrorBoundry>
                        </Scroll>
                    </div>

                </div>
            )
        }


    }



App.propTypes = {
    searchChange: PropTypes.func.isRequired,
  };

export default App;