import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Advert extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { classNames, slot, googleAdId, style, format } = this.props;
    return (
      <div className={classNames} >
       

        <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: '300px', height: '207px' }}
          data-ad-client="ca-pub-8217530327568975"
          data-ad-slot="8937288805"
          data-ad-test="on"
          // data-ad-format={format || "auto"}
          // data-full-width-responsive="true"
        >

        </ins>
      </div>
    );
  }
}
Advert.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  googleAdId: PropTypes.string,
};
Advert.defaultProps = {
  classNames: '',
  timeout: 200,
};
export default Advert;

