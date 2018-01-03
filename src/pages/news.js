import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50}}>
    <Helmet
      title="体彩资讯 - 体博导航"
      meta={[
        { name: 'description', content: '体彩资讯' },
        { name: 'keywords', content: '体彩资讯,体博, 体博导航' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">体彩行业动态
</span>
    </div>
    <h1>体彩行业动态
</h1>
	<ul className="news-list">
      <li><a href="http://sc.stock.cnfol.com/gushizhibo/20180103/25852676.shtml" rel="nofollow" target="_blank" style={{color:'#557700'}}>去年中国体彩首破2000亿元</a> [中金在线] [2018年01月03日]</li>
	    <li><a href="http://news.ifeng.com/a/20180103/54764621_0.shtml" rel="nofollow" target="_blank" style={{color:'#557700'}}>河南体彩2017年销量和历史总量分别逾130亿元和700亿元</a> [凤凰网] [2018年01月03日]</li>
	    <li><a href="http://sports.sina.com.cn/l/2018-01-03/doc-ifyqcwaq7165992.shtml" rel="nofollow" target="_blank" style={{color:'#557700'}}>服装厂老板2千元命中体彩1638万:没花多少钱</a> [新浪体育] [2018年01月03日]</li>
	    <li><a href="http://news.163.com/18/0103/01/D76I0H3E00018AOP.html" rel="nofollow" target="_blank" style={{color:'#557700'}}>2017年陕西省体育彩票稳中求进 健康发展</a> [网易] [2018年01月03日]</li>
		  <li><a href="http://news.sina.com.cn/o/2018-01-03/doc-ifyqcsft9573601.shtml" rel="nofollow" target="_blank" style={{color:'#557700'}}>江苏体彩去年销量首破200亿元</a> [新浪新闻] [2018年01月03日]</li>
      <li><a href="http://www.gxnews.com.cn/staticpages/20180103/newgx5a4c2305-16807824.shtml?pcview=1" rel="nofollow" target="_blank" style={{color:'#557700'}}>体彩大乐透再送4注头奖 奖池金升至44.79亿元</a> [广西新闻网] [2018年01月03日]</li>
	</ul>
  </div>
)

export default SecondPage
