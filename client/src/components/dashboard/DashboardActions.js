import React, {Fragment, useState} from 'react';
import {Link, withRouter} from "react-router-dom"
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const DashboardActions = () => {
    return (
            <div className="dash-buttons">
                <Link to="/edit-profile" className="btn btn-light"
                ><i className="fas fa-user-circle text-primary"></i> Edit Profile</Link
                >
                <Link to="/add-experience" className="btn btn-light"
                ><i className="fab fa-black-tie text-primary"></i> Add Experience</Link
                >
                <Link to="/add-education" className="btn btn-light"
                ><i className="fas fa-graduation-cap text-primary"></i> Add Education</Link
                >
            </div>
    )
}

export default DashboardActions