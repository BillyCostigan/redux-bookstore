import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../actions/courseActions';
import PropTypes from 'prop-types';

export default class CoursesPage extends React.Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            course: {title: ''}
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.courseRaw = this.courseRaw.bind(this);
    }

    onTitleChange (event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave () {
        this.props.createCourse(this.state.course);
    }

    courseRaw (course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render () {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRaw)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        )
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

 connect(mapStateToProps, mapDispatchToProps) (CoursesPage);