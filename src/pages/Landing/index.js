import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Auth from "components/Auth";
import Text from "components/Text";
import Layout from "components/Layout";
import Container from "components/Container";
import InputGroup from "components/InputGroup";

import actions from "hocs/withWebSocket/actions";
import { formToObject } from "utils/common";

class LandingPage extends Component {
  onSubmit = event => {
    const { user } = formToObject(event.target);
    this.props.send(actions.login(user));
    event.preventDefault();
    event.target.reset();
  };

  render() {
    const { error } = this.props;

    return (
      <Auth shouldAuth={false}>
        <Layout>
          <Text color="yellow">{error || "\u00A0"}</Text>

          <Container>
            <form onSubmit={this.onSubmit}>
              <InputGroup button="Login" label="Chose your nickname before joining" name="user" />
            </form>
          </Container>
        </Layout>
      </Auth>
    );
  }
}

LandingPage.propTypes = {
  send: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = ({ error }) => ({ error });

export default connect(mapStateToProps)(LandingPage);
