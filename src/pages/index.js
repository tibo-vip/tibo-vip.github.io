import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const TdLink = ({href, name}) => (
	<td>
		{href !== 'xxxx' && <a href={href} rel="nofollow" target="_blank" style={{color:'#557700',textDecoration:'underline'}}>{name}</a>}
	</td>
)

const IndexNav = () => (
	<ul 
		className="index-nav-list clearfix"
		style={{
			display: 'block',
			marginTop: 15,
	    	backgroundColor: '#f8fad5',
		}}
	>
		<li><a rel="nofollow" href="#tibo-size"><i className="fa fa-book" aria-hidden="true" /> 体彩网址大全</a></li>
		<li><a rel="nofollow" href="#tibo-origin"><i className="fa fa-car" aria-hidden="true" /> 体彩的发展</a></li>
		<li><a rel="nofollow" href="#tibo-weight"><i className="fa fa-users" aria-hidden="true" /> 中国体彩管理组织架构</a></li>
		<li><a rel="nofollow" href="#tibo-pixel"><i className="fa fa-university" aria-hidden="true" /> 国外体彩发展</a></li>
	</ul>
)

const InGeneral = () => (
    <div
      style={{
        padding: 20,
        border: '1px solid #dfdfdf',
      }}
    >
    <p style={{marginBottom:15}}><strong>体育彩票</strong>一般是指以体育比赛博彩为媒体而发行的彩票。</p>
    <p style={{textIndent:'2em',marginBottom:15}}>目前中国体育彩票的种类有：<a href="http://www.lottery.gov.cn/dlt/" rel="nofollow" target="_blank" style={{color:'#557700'}}>超级大乐透</a>
    、<a href="http://www.lottery.gov.cn/gp/" rel="nofollow" target="_blank" style={{color:'#557700'}}>高频</a>
    、<a href="http://www.lottery.gov.cn/jc/" rel="nofollow" target="_blank" style={{color:'#557700'}}>竞彩</a>
    、<a href="http://www.lottery.gov.cn/zc/" rel="nofollow" target="_blank" style={{color:'#557700'}}>足球彩票</a>
    、<a href="http://www.lottery.gov.cn/dgg/" rel="nofollow" target="_blank" style={{color:'#557700'}}>顶呱刮</a>
    、<a href="http://www.lottery.gov.cn/plwf/" rel="nofollow" target="_blank" style={{color:'#557700'}}>排列3、排列5</a>
    、<a href="http://www.lottery.gov.cn/qxc/" rel="nofollow" target="_blank" style={{color:'#557700'}}>七星彩</a>、地方体彩等等。</p>
    <p style={{textIndent:'2em'}}><a href="http://www.lottery.gov.cn/gywh/" rel="nofollow" target="_blank" style={{color:'#557700'}}>体育彩票公益金</a>，是指经国务院批准，从体育彩票销售额中按规定比例提取的专项用于发展体育事业的资金，公益金纳入政府性基金预算管理，专款专用，结余结转下年继续使用，实行收支两条线管理。</p>
    </div>	
)

const Paragraphs = () => (
	<div style={{padding: '15px 25px'}}>
		<dl className="clearfix">
			<dt id="tibo-size"><i className="fa fa-book" aria-hidden="true" /> 体彩网址大全</dt>
			<dd>
			    <table style={{ marginTop: 15, paddingLeft: 20}}>
			        <thead>
					    <tr><th>官方类网址</th><th>门户类网址</th><th>组织机构类网址</th></tr>
			        </thead>
				    <tbody>
						<tr><TdLink href={'http://www.zhcw.com/'} name={'中彩网'} /><TdLink href={'http://www.zgzcw.com/'} name={'中国足彩网'} /><TdLink href={'http://www.gov.cn/'} name={'国务院'} /></tr>
				    	<tr><TdLink href={'http://www.lottery.gov.cn'} name={'中国体彩网'} /><TdLink href={'http://caipiao.163.com/'} name={'网易彩票'} /><TdLink href={'http://www.mof.gov.cn'} name={'中华人民共和国财政部'} /></tr>
						<tr><TdLink href={'http://www.sporttery.cn/'} name={'中国竞彩网'} /><TdLink href={'http://lottery.sina.com.cn/'} name={'新浪彩票'} /><TdLink href={'http://www.sport.gov.cn/'} name={'国家体育总局'} /></tr>
						<tr><TdLink href={'http://www.bjlot.com/'} name={'北京体彩网'} /><TdLink href={'http://www.500.com/'} name={'500彩票网'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.shlottery.gov.cn/'} name={'上海体彩网'} /><TdLink href={'http://cp.sogou.com'} name={'搜狗彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.gdlottery.cn/'} name={'广东体彩网'} /><TdLink href={'http://cp.360.cn/'} name={'360彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.tjlottery.gov.cn/'} name={'天津体彩网'} /><TdLink href={'http://caipiao.sohu.com/'} name={'搜狐彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.hbtcw.com/'} name={'河北体彩网'} /><TdLink href={'http://cp.ifeng.com/'} name={'凤凰彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.sxlottery.net/'} name={'山西体彩网'} /><TdLink href={'http://www.cpdyj.com/'} name={'彩票大赢家'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.lntycp.com/'} name={'辽宁体彩网'} /><TdLink href={'http://www.aicai.com/'} name={'新浪爱彩'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://jl.lottery.gov.cn/'} name={'吉林体彩网'} /><TdLink href={'http://www.okooo.com/'} name={'澳客网'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.sclottery.gov.cn/'} name={'四川体彩网'} /><TdLink href={'http://sports.qq.com/lottery/'} name={'腾讯彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.js-lottery.com/'} name={'江苏体彩网'} /><TdLink href={'http://caipiao.taobao.com/'} name={'淘宝彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.zjlottery.com/'} name={'浙江体彩网'} /><TdLink href={'http://caipiao.jd.com/'} name={'京东彩票'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://nmtc.lottery.gov.cn/'} name={'内蒙古体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.ahtc.gov.cn/'} name={'安徽体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.fjtc.com.cn/'} name={'福建体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.jxlottery.cn/'} name={'江西体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.sdticai.com/'} name={'山东体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.hnlottery.com.cn/'} name={'河南体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.hbtycp.com/'} name={'湖北体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.hnticai.com/'} name={'湖南体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.tc.hainan.net/'} name={'海南体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.cqlottery.gov.cn/'} name={'重庆体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.hljtycp.org.cn/'} name={'黑龙江体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.gztcw.com.cn/'} name={'贵州体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.yntc8.cn/'} name={'云南体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.sxtc.com.cn/'} name={'陕西体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.gstc.org.cn/'} name={'甘肃体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.nxtcw.com.cn/'} name={'宁夏体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.xjlottery.gov.cn/'} name={'新疆体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.lottery.gx.cn/'} name={'广西体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.qhtycp.com/'} name={'青海体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
						<tr><TdLink href={'http://www.wxlottery.com/'} name={'无锡体彩网'} /><TdLink href={'xxxx'} name={'xxxx'} /><TdLink href={'xxxx'} name={'xxxx'} /></tr>
			    	</tbody>
			    </table>
			</dd>
			<dt id="tibo-origin"><i className="fa fa-car" aria-hidden="true" /> 体育彩票的发展</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>前期准备阶段：此阶段大约为1984年至1993年。1984年11月，福建省发行了体育设施建设彩票。随后，江苏、广东、河北等省市也相继发行了地方性体育彩票。经国务院批准，原国家体委于1988年至1990年发行“第十一届亚运会基金奖券”(传统即开结合型)，它标志着我国全国性体育彩票的出现。截至1992年4月，经国务院批准，原国家体委先后发行了亚运会、民运会、城运会、农运会、东亚运动会等大型综合性运动会彩票以及足球专项彩票博彩网，积累了成功的经验。1993年3月，国务院办公厅下达《关于体育彩票等问题的复函》，原国家体委据此开始了发行体育彩票一系列的准备工作。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>起步阶段：此阶段大约为1994年至1999年。1994年4月，原国家体委成立体育彩票管理中心，正式在全国发行票面面额以2元为主的即开型、传统型及即开传统结合型体育彩票。1994-1995年体育彩票销售额为10亿元，1999年为40多亿元，虽然1999年是发行首年的4倍，但与福利彩票相比差距较大。其中1995年和1996年大约是福利彩票销售额的1/5.1997年至1999年差距缩小到2/5左右，表明体育彩票的销售稳步提高。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>平稳发展阶段：此阶段为2000-2003年。在此阶段，全国体育彩票的销售额反超福利彩票，其中2002年比福利彩票的销售额多出50亿元。此阶段，大奖组即开型彩票的销售取得了较大的成功。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>巩固提升阶段：此阶段为2004年至今。2004年中国彩票业经历了多事之秋：3月中国体育彩票大奖组即开型在西安爆发“宝马假票案”；5月在贵阳大奖组即开票销售现场出现人为爆炸事件；6月深圳彩世塔公司在广州深圳等17个城市承销大奖组即开票中出现作弊事件。所有这些对当时以即开型彩票为主体的中国体育彩票的销售影响甚大.当年销售额比上一年减少47亿元。有鉴于此，中国体育彩票管理中心一方面加强技术改造，电脑彩票博彩通成为主流;另一方面，在不断丰富数字型、乐透型产品玩法的同时，加强了竞猜型产品玩法的开发和销售，提高彩票市场营销能力，市场效果显著。年销售额从1995年的10亿元增加到2007年的386亿元，为社会福利事业作出了重大的贡献。
					</p>	
			</dd>
			<dt id="tibo-weight"><i className="fa fa-users" aria-hidden="true" /> 中国体彩管理组织架构</dt>
			<dd>
			<p style={{padding:20, textAlign:'center'}}><img src={'/img/jg.png'} alt="中国体彩管理组织架构" /></p>			
			</dd>
			<dt id="tibo-pixel"><i className="fa fa-university" aria-hidden="true" /> 国外体彩发展</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>
					国外发行体育彩票有着较悠久的历史，他们的发行方式和资金用途与我国的还是有区别的，有些方面很值得我们借鉴。例如，新加坡于1999年3月率先在亚洲推出了足球彩票。这是由新加坡博彩公司设立的“足球乐”赌球方式，目的是打击地下赌球集团，并为本国足球的发展募集资金。“足球乐”全年的营业额约为2.23亿新元，其中90%左右将兑付奖项。所有“足球乐”的博彩利润，扣除税金后全数拨给新加坡足球联赛公司和参加联赛的12个球队。
				</p>		
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>
					又如，乐透彩券是德国各邦重要的财政来源之一，每年购买德国乐透彩票赌运气的人，其投资金额约在400亿马克上下。这些钱只有一半用于奖金，另一半则缴给各邦作为税收，邦政府从中拨出一部分来赞助体育或文化活动。在德国的8100多万人口中，估计有2000万名乐透彩券的顾客。为了服务这些顾客，德国各地的2.5万个贩卖乐透彩券的摊位，雇用了大约5万名人员。德国人对彩券兴趣浓厚，除了在德国买彩券，也在奥地利或是英国买彩券赌运气，以运动比赛结果下注的彩票，如环法自行车大赛或是足球比赛，都能吸引不少赌客掏钱。
				</p>	
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>
					再如，希腊政府打算利用奥运彩票发行计划为2004年雅典奥运会筹集大笔资金，但是反对派认为，这样一来希腊全国就会实际演变为一个大赌场，有损于奥运会发源地的形象。因此， 希腊政府不久前宣布，他们已经正式放弃了一度引起争议的2004年奥运会敛财计划。但政府发言人保证，奥运会的准备工作不会因此受到影响，因为希腊政府已经决定通过财政预算拨款来填补资金上的空缺。
				</p>	
			</dd>		
		</dl>
	</div>
)
const IndexPage = () => (
  <div style={{paddingBottom: 50}}>
    <Helmet
      title="体博导航 - 轻松了解体育彩票 从这里开始"
      meta={[
        { name: 'description', content: '体博导航是专注于体育博彩知识分享、学习、研究的体彩类网址导航网站，提供安全、正规、合法和丰富的体育博彩类的上网导航服务；轻松了解体育彩票 从这里开始！' },
        { name: 'keywords', content: '体育彩票,体彩,足彩,体育博彩,体育彩票网址,体彩网址,足彩网址,体育彩票大全,体彩大全,足彩大全,体育彩票导航,体彩导航,足彩导航' },
      ]}
    />
  	<InGeneral />
 	<IndexNav />
  	<Paragraphs />
  </div>
)

export default IndexPage
