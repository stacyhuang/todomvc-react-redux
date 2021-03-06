var connect = require("react-redux").connect;
var actions = require("../actions/index.js");
var Link = require("../components/Link.jsx");

var mapStateToProps = function(state, ownProps) {
  return {
    active: ownProps.filter === state.displayFilter
  };
};

var mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onClick: function() {
      dispatch(actions.setDisplayFilter(ownProps.filter));
    }
  };
};

var FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

module.exports = FilterLink;
