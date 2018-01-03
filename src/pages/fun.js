import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50}}>
    <Helmet
      title="体彩知多少 - 体博导航"
      meta={[
        { name: 'description', content: '体彩知多少' },
        { name: 'keywords', content: '体彩知多少' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">体彩知多少</span>
    </div>
    <h1>体彩知多少</h1>
    <p style={{ marginTop: 15}}>
	    <strong>简介</strong><br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;体育博彩是指针对尚未有结果的体育比赛进行猜测结果，并投注金钱赌输赢的合法或非法的赌博行为。
    </p>
    <p style={{ marginTop: 15}}>
	    <strong>类型</strong><br /> <br />  
传统型<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传统型（ Draw games ）指的是任何以抽奖的方式决定获奖者的彩票，如购买者所持有的彩票的号码与抽出的号码一致，即可获奖。这种彩票票面上有事先印制的号码，购买者购买后要等待公开摇奖的结果才能知道自己是否中奖。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传统型彩票的特点是统一印制、统一编号，先销售、后开奖。一般悄况下，在预定的发行量销售完毕，集中开一次奖，也可按期（比如半个月或一个月）开奖。中奖者持中奖彩票到指定的地点去兑奖。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传统型彩票起源于古罗马时期，荷兰、葡萄牙、比利时、意大利、西班牙、法国、英国等欧洲国家都曾流行过此种彩票，西班牙的内德维德（ Navidid ）是世界上最大的传统型彩。由于此种彩票的购买者在游戏过程中较被动，传统型彩票在中国已退出市场。
<br /> <br />即开型<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;亦称即开即兑型彩票，是世界上流行的第二代彩票即购票者在一个销售点上一次完成购票和兑奖全过程的一种彩票。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即开型 (Instant Games) 指彩票发行者在某一固定奖组的彩票中，将中奖号码印制在彩票介质上加以遮盖，并事先公布中奖符号，购买者从同一奖组的彩票中选购后即可刮开遮盖物以确定是否中奖和兑奖的彩票游戏。体育彩票顶刮呱就属于此类彩票游戏。由于即开型彩票的节奏快，无需等待开奖时间，所以一出现就引起了人们极大的兴趣，产生了轰动的效应，并得到迅速的发展。传统型和即开型彩票的号码或图案都是事先印制在彩票上的，购买者无法自主选择，所以它们又被称为“被动式”彩票。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着即开型彩票玩法的不断更新，即开型彩票形成了现行的揭开式、撕开式、刮开式三种不同的具体形式。
<br /> <br />乐透型<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐透型（ Lotto ）“乐透”一词来源外文“ lotto ”的译音，原意为“分享”，最初是一种纸牌游戏。乐透型彩票已经成为世界彩票业的主流。它可以由彩民自主选号，所以乐透型彩票具有即开型彩票和传统型彩票所没有的灵活性和娱乐性，现代乐透性彩票分为乐透组合和乐透排列两种。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般认为乐透型彩票是由热那亚人贝内德托·根蒂勒发明的。在热那亚共和国（现为州，位于意大利西部），塞雷尼斯梅学院每学期通过抽签的方式选出新法官。抽签是在球上写上候选人的姓名。这种活动引起了热那亚人的极大兴趣，1519年，根蒂勒认为以前抽一次太少，并用数字替代了名字，90选5的乐透型彩票从此诞生，并取名为“吉奥科·迪·塞米纳里奥”（Gioco di Seminario）,成为热那亚人喜爱的游戏。
<br />乐透型彩票具有以下特点：<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000 年 5 月，美国以佐治亚州为中心的 7 州联合发行的威力球大奖一度累积到 3.63 亿美元，超过了全美国的人口数。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今天，世界上各个角落，只要有彩票存在的地方就有乐透的身影。乐透彩票的销售额占据了整个彩市销售额的相当大的一部分。
<br /> <br />数字型<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数字型彩票（ Numbers Games ）这种彩票有三位数和四位数的玩法，通常是每天开奖，购买者选取一个三位或四位数的组合。组合方式不同决定资金的多少，最基本的分别是排列和组合两种，前者要求所预测的号码必须与开奖的号码在顺序和数字上完全一致，而后者则无顺序要求，只要数字相符即可。中国体育彩票的“排列 3 ”、“排列 5 ”都属于数字型彩票玩法。数字型最流行的是美国，已有20多个州发行这种彩票，其它国家也有不同的数字型彩票。
<br /> <br />透透型<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;透透型彩票也称竞猜型体育彩票,这是一种将博彩与体育运动结合在一起的博彩形式其实际是一种体育运动竞赛彩票包含智力因索。该彩票是将体育比赛和彩票结合在一起,要求参加者预测体育比赛结果。透透型彩票最普遍和最典型的是足球彩票和赛马彩票，另外还有自行车彩票、拳击彩票等，主观因素和智力比其他彩票要大。由于体育比赛本身带有很大的偶然性，加之过分的商业化,一些人为获利控制比赛而打假球，使这一活动常常爆出丑闻。因此.对于透透型彩票.体育比赛的公正性、公平性是健康、顺利进行体育运动竞赛彩票的重要前提。加强相关法规的制定，以及彩票活动的管理是体育运动竞赛彩票规范化的途径。
<br /> <br />竞猜型<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指以某种竞猜结果确定投注中奖结果的彩票游戏。相对于其他纯粹的幸运型游戏而言，竞猜型彩票具有更多的个人智慧因素。该彩票是体育比赛和彩票的结合，要求参与者预测体育比赛的结果，通常是预测足球比赛的结果。竞猜型彩票首次出现于1922年的英国，后来遍及欧洲和南美许多对足球狂热的国家。其彩金的支付一般按固定比例分配。
<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;除上述五大种类的彩票外，彩票还有一些小的种类，如斯庇尔（ Spiel ）、基 诺（ Keno ）、视频彩票、BINGO 、分级彩票、录像彩票等。总之，世界上的彩票五品种，都有其各自生存和退出流通的市场机制。就世界彩票业的总趋势而言，乐透型彩票、即开型彩票和竞猜型彩票是当前世界彩票的主流。
    </p>
    <p style={{marginTop:15}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>目前中国体育彩票的种类</strong>有：<a href="http://www.lottery.gov.cn/dlt/" rel="nofollow" target="_blank" style={{color:'#557700'}}>超级大乐透</a>
    、<a href="http://www.lottery.gov.cn/gp/" rel="nofollow" target="_blank" style={{color:'#557700'}}>高频</a>
    、<a href="http://www.lottery.gov.cn/jc/" rel="nofollow" target="_blank" style={{color:'#557700'}}>竞彩</a>
    、<a href="http://www.lottery.gov.cn/zc/" rel="nofollow" target="_blank" style={{color:'#557700'}}>足球彩票</a>
    、<a href="http://www.lottery.gov.cn/dgg/" rel="nofollow" target="_blank" style={{color:'#557700'}}>顶呱刮</a>
    、<a href="http://www.lottery.gov.cn/plwf/" rel="nofollow" target="_blank" style={{color:'#557700'}}>排列3、排列5</a>
    、<a href="http://www.lottery.gov.cn/qxc/" rel="nofollow" target="_blank" style={{color:'#557700'}}>七星彩</a>、地方体彩等等。</p>
  </div>
)

export default SecondPage
