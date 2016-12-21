import React, { Component } from 'react';

var widthRatios = {};

for(var i = 1; i <= 50; i++) {
  for (var j = 1; j <= i; j++) {
    widthRatios[`${j}/${i}`] = j * 100 / i;
  }
}

export default class Col extends Component {
  state = {
    windowWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const { xs, sm, md, lg, xl, fill, children, style } = this.props;
    const { windowWidth } = this.state;
    let width;

    const styles = {
      paddingLeft: '10px',
      paddingRight: '10px'
    }

    if (windowWidth < 576) {
      width = xs;
    } else if (windowWidth < 768) {
      width = sm || xs;
    } else if (windowWidth < 992) {
      width = md || sm || xs;
    } else if (windowWidth < 1200) {
      width = lg || md || sm || xs;
    } else {
      width = xl || lg || md || sm || xs;
    }

    if (width) {
      styles.width = widthRatios[width] && widthRatios[width] + '%' || width;
    } else if (fill){
      styles.flex = '1 1 auto';
    } else {
      styles.width = '100%';
    }

    Object.assign(styles, style);

    return (
      <div style={styles}>
        {children}
      </div>
    )
  }
}
