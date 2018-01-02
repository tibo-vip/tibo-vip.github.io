import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50}}>
    <Helmet
      title="体博会知多少 - 体博会网址导航"
      meta={[
        { name: 'description', content: '体博会纸张大小,体博会历史,体博会容差' },
        { name: 'keywords', content: '体博会尺寸,体博会, 体博会网址导航' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">体博会知多少</span>
    </div>
    <h1>体博会知多少</h1>
    <p style={{ marginTop: 15}}>
	    <strong>纸张大小</strong><br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;许多纸张尺寸标准的惯例已经存在于不同的时间和不同的国家。 今天，包括常用的A4尺寸的ISO216的A和B系列是几乎所有国家都使用的国际标准。 然而，在美洲和菲律宾的许多国家，“信封”等北美系列纸张尺寸更为普遍。

		纸张尺寸会影响书写纸张，文具，卡片和一些打印文档。 信封的国际标准是ISO 269的C系列。
    </p>
    <p style={{ marginTop: 15}}>
	    <strong>ISO 216</strong><br />   

	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 216规定了当今世界大多数国家使用的国际标准（ISO）纸张尺寸，尽管不在加拿大，美国，墨西哥或多米尼加共和国。 该标准定义了“A”和“B”系列纸张尺寸，其中<strong>A4是最常用的尺寸（210毫米 × 297毫米）</strong>。 两个补充标准ISO 217和ISO 269定义了相关的纸张尺寸; ISO 269“C”系列通常与A和B尺寸一起列出。
		<br /><br />  
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 所有ISO 216，ISO 217和ISO 269纸张尺寸（除了某些信封外）在四舍五入至毫米的范围内具有相同的纵横比为2的平方根。 这个比例具有独特的性质，当以半宽方式切割或折叠时，半部分也具有相同的纵横比。 每个ISO纸张尺寸是同一系列中下一个较大尺寸面积的一半。
    </p>
    <p style={{ marginTop: 15}}>
	    <strong>历史</strong><br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1786年，德国科学家克里斯托弗·利希滕伯格（Georg Christoph Lichtenberg）在致约翰·贝克曼（Johann Beckmann）的一封信中描述了将纸张尺寸设置为纵横比2的平方根的优点。成为ISO纸张尺寸A2，A3，B3，B4和B5的格式是在法国开发的。他们被列入1798年关于出版物征税的法律，这部分是基于页面大小。

		<br />  
		<br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A4（灰色阴影）和C4尺寸与一些相似纸张和相纸尺寸的比较。
		<br /><br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个系统的主要优点是它的缩放。长宽比为2的平方根的长方形纸张具有独特的属性，在其短边中间切割或折叠一半时，每一半都具有相同的2的平方根纵横比和整个表格的一半面积。等价地，如果将长宽比为2的平方根的两张相同大小的纸张沿着它们的长边并排放置，则会形成一个更大的矩形， 2的平方根的纵横比和每个单独表单面积的两倍。

		<br /><br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纸张尺寸的ISO系统利用2的平方根长宽比的这些属性。在每个尺寸系列（例如，系列A）中，最大尺寸编号为0（例如A0），并且每个连续尺寸（例如，A1，A2等）具有前一页面积的一半，并且可以通过减小前面尺寸纸张的长度来切割。新的测量值向下舍入到最近的毫米。可以使用下一张较大尺寸的纸张来制作折叠的小册子（例如，将一张体博会折叠成一张尺寸为A5页的小册子，可以设计一个办公室复印机或打印机，以将页面从A4减少到A5或将页面从A4放大到A3;同样，可以缩小两张体博会张以适合一张体博会张，而没有多余的空白纸张。

			<br /><br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个系统也简化了计算纸张的重量。根据ISO 536，纸的克重定义为每平方米（g / m<sup>2</sup>或gsm）的单位面积克数（g）。由于A0板材的面积为1平方米，其克重与克重相同。可以通过算术除法得到其他大小的克重（g / m<sup>2</sup>）。由80克/平方米纸张制成的标准体博会张重量为5克，因为它是四分之一，忽略四舍五入）的A0页面。因此，通过计算所使用的纸张的数量，重量和相关的邮资率可以很容易地近似。

		<br /><br />   		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1975年至1995年间首次发布了ISO 216及其相关标准：

		<br /> 		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 216：2007，定义A和B系列的纸张尺寸
		<br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 269：1985，定义信封的C系列
		<br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 217：2013，定义RA和SRA系列原始（“未修剪”）纸张尺寸
	</p>
    <p style={{ marginTop: 15}}>
	    <strong>容差</strong><br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准中规定的容差是：<br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、尺寸达150毫米时为±1.5毫米，<br />   
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、对于150至600毫米范围内的尺寸为±2.0毫米，<br />   
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、600毫米以上的尺寸为±3.0毫米。<br />   
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些与A，B和C系列之间的比较有关。
    </p>	
  </div>
)

export default SecondPage
