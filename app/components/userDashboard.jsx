import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Footer, NavBar } from './common';
import { getOffices, getParties } from '../actions';
import { ToastContainer } from 'react-toastify';
import defaultImg from '../assets/imgs/default.png';

class UserDashBoard extends Component {
  state = {
    parties: [],
    offices: []
  };
  componentDidMount() {
    this.props.getOffices();
    this.props.getParties();
  }
  componentWillReceiveProps(nextProps) {
    const { office, party } = nextProps;
    const { offices, officesFetched } = office;
    const { parties, partiesFetched } = party;
    if (officesFetched && partiesFetched) {
      this.setState({ parties, offices });
    }
  }
  render() {
    const { parties, offices } = this.state;
    return (
      <div>
        <ToastContainer />
        <NavBar />
        <section className='row'>
          <h1 className='text-center'>Offices and parties DASHBOARD</h1>
          <div className='row'>
            <div className='col-smt-12 col-tab-9'>
              <h2 className='text-center'>Parties</h2>
              {parties.map((party, index) => (
                <div
                  className='col-smt-12 col-tab-4 col-lap-3 col-dsk-3'
                  key={index}
                >
                  <div className='card'>
                    <div className='card-header'>{party.name}</div>
                    <div className='card-body'>
                      <img
                        className='img-full'
                        src={defaultImg}
                        alt={party.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='col-smt-12 col-tab-3'>
              <h2 className='text-center'>Offices</h2>
              <div className='responsive'>
                <table className='table'>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                  </tr>
                  <tbody id='offices-list'>
                    {offices.map((office, index) => (
                      <tr key={index}>
                        <td>{office.name}</td>
                        <td>{office.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  office: state.office,
  party: state.party
});
export default connect(
  mapStateToProps,
  { getOffices, getParties }
)(UserDashBoard);
