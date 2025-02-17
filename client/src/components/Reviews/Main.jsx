/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import Sidebar from './Sidebar.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      product: this.props.product,
      reviews: '',
      metaData: '',
    };
  }

  componentDidMount() {
    Promise.all([
      axios.get(`/api/reviews/${this.props.productId}/relevant`),
      axios.get(`/api/reviews/meta/${this.props.productId}`),
    ]).then(([res1, res2]) => {
      this.setState({
        reviews: res1.data,
        metaData: res2.data,
      }, () => console.log('componentdidmount', this.state));
    });
  }

  getReviews(sort) {
    axios.get(`/api/reviews/${this.props.productId}/${sort}`)
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      }).then(() => console.log('getReviews', this.state.reviews)).catch((err) => (console.log(err)));
  }

  render() {
    if (!this.state.reviews || !this.state.metaData) {
      return (
        <div />
      );
    }
    return (
      <div className="ratings-reviews-container">
        <div className="ratings-reviews">
          <Sidebar metaData={this.state.metaData} />
          <ReviewList
            reviews={this.state.reviews}
            meta={this.state.metaData}
            getReviews={this.getReviews.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Main;
