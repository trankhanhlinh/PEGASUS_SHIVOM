import * as React from 'react'
import 'isomorphic-unfetch'
import { connect } from 'react-redux'

import Head from 'next/head'

import { Header } from '../../components'

import './home.scss'
class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    static async  getInitialProps({ req, query }) {
        return {

        }
    }
    render() {
        
        return (
            <div>
                <Head>
                    <title>Trang chủ</title>
                </Head>
                <Header/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
  };
  
  export default connect(mapStateToProps)(Home);

