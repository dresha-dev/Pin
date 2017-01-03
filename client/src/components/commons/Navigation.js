import React, { Component } from 'react';
import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import HomeIcon from 'material-ui/svg-icons/action/home';
import ExploreIcon from 'material-ui/svg-icons/action/explore';
import AddPostIcon from 'material-ui/svg-icons/content/add-circle';

class Nav extends Component {
    render() {
        return (
            <Tabs>
                <Tab icon={<ExploreIcon />} containerElement={<Link to="/"/>}/>
                <Tab icon={<HomeIcon />} containerElement={<Link to="/gallery" />}/>
                <Tab icon={<AddPostIcon />} containerElement={<Link to="/add-post"/>}/>
            </Tabs>
        );
    }
}

export default Nav;