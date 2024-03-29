import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    return !user ? null : <h5>{user.name}</h5>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};
export default connect(mapStateToProps)(UserHeader);
