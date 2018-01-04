import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {goTop} from '../util/tool'
import Helmet from 'react-helmet'

import './index.css'

const HeaderNav = ({location}) => {
  const {pathname} = location;
  return (
    <div
      className="header-nav"
      style={{
        borderBottom: '2px solid #cce198',
        height: 40,
        lineHeight: 40,
      }}
    >
      <ul className="nav-list clearfix"
        style={{
          margin: '0 auto',
          maxWidth: 960,
          display: 'block',
          padding: '0 40px',
          height: 40,
          overflow: 'hidden'
        }}
      >
        <li className={pathname === '/' ? 'active' : null}>
          <Link
            to="/"
          >
            首页
          </Link>
        </li>
        <li className={pathname.match(/\/fun/i) ? 'active' : null}>
          <Link
            to="/fun"
          >
            体彩知多少
          </Link>
        </li>
        <li className={pathname.match(/\/news/i) ? 'active' : null}>
          <Link
            to="/news"
          >
            体彩行业动态
          </Link>
        </li>
        <li className={pathname.match(/\/price/i) ? 'active' : null}>
          <Link
            to="/price"
          >
            商务合作
          </Link>
        </li>
      </ul>
    </div>
  )
}

const HeaderTop = () => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1rem 1.0875rem',
    }}
  >
    <div style={{ margin: 0 }} className="logo">
      <Link
        to="/"
        style={{
          color: '#ff9c00',
          textDecoration: 'none',
        }}
      >
        <img src={'/img/logo.png'} alt="体博导航" />
      </Link>
    </div>
  </div>
)

const HeaderBanner = () => (
    <div
      style={{
        background: '#b1dff0 url(/img/banner-2017.jpg) no-repeat center center',
        height: 94,
      }}
    >
    </div>
)

const Header = ({location}) => (
  <div
    style={{
      marginBottom: '1rem',
    }}
  >
    <HeaderTop />
    <HeaderNav location={location} />
    <HeaderBanner />
  </div>
)

const Footer = () => (
  <div
    style={{
      width:'100%',
      background: '#fff',
      borderTop: '1px solid #eee',
      fontSize: '12px',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
    <font style={{color:'#951212'}}>体博导航郑重提示：彩票有风险，投注需谨慎！禁止向未满18周岁的青少年出售彩票！</font><br /><br />
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">联系站长</a> | <a href="mailto:kbl_1794@qq.com" rel="nofollow">商务合作</a><br />
      友情链接：<a href="http://www.iampua.com/" target="_blank">泡学达人</a> | <a href="http://www.a4z.cn/" target="_blank">A4纸网</a> | <a href="mailto:kbl_1794@qq.com" rel="nofollow">申请友情链接</a><br /><br />
      <a href="http://www.bj.cyberpolice.cn/index.jsp" rel="nofollow"><img src={'/img/110.png'} alt="体博导航网络110"/></a> <a href="http://www.bjjubao.org/" rel="nofollow"><img src={'/img/report.png'}  alt="体博导航不良信息举报"/></a>
      <br />
      体博导航 - 专注于国家体育彩票  保留所有权 © 2017~2018 tibo.vip
    </div>
  </div>
)

const ReturnTop = () => (
  <div
    className="return-top" 
    style={{
      width:50,
      height:50,
      lineHeight:'50px',
      textAlign:'center',
      position:'fixed',
      right:20,
      bottom:50,
      color:'#ddd',
      border:'1px solid #ddd',
      fontSize:16,
      fontWeight:700,
      cursor:'pointer',
      backgroundColor:'#fff',
    }}
    onClick={
      () => {
        goTop();
      }
    }
  >个</div>
)

class TemplateWrapper extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div style={{minHeight:'100%',position:'relative'}}>
        <Helmet
          link={[
            {type:'image/x-icon',rel:'shortcut icon',href:'/favicon.ico'},
            {rel:'stylesheet',href:'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css'},
          ]}
          script={[{src:'https://hm.baidu.com/hm.js?07c00bbf1b549b4d345bbb671ba8b401'}]}
        />
        <Header location={location}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 20px',
          }}
        >
          {children()}
        </div>
        <Footer />
        <ReturnTop />
      </div>
    )
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
