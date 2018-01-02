import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50}}>
    <Helmet
      title="商务合作 - 体博会网址导航"
      meta={[
        { name: 'description', content: '体博会网址导航' },
        { name: 'keywords', content: '体博会尺寸,体博会, 体博会网址导航' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">商务合作</span>
    </div>
    <h1>商务合作</h1>
    <p>开发中...<br /><br /></p>
    <a href="mailto:kbl_1794@qq.com" rel="nofollow">商务合作</a><br /><br />
    <Link to="/">返回首页</Link>
  </div>
)

export default SecondPage
