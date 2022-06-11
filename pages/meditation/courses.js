import Head from 'next/head'

export default function CoursesPage() {

    return <div>
        <Head>
            <title>心念冥想课程体系介绍</title>
        </Head>
        <div className="page-content">
      <h1 className="rich-media-title">心念冥想课程体系介绍</h1>

      <section className="section-title">
        <img src="https://cdn.yibencezi.com/803bf0e7aaa5683fd8280d5165328731?imageView2/2/w/700/q/75|imageslim"></img>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">学习和练习心念冥想，是为了消除内在矛盾，达到幸福、平和、高效的状态。这需要两个能力，分别通过基础课，进阶课完成。长按识别二维码可以跳转报名页面。</span>
      </section>
      <br></br>

      {sectionTitle('01', '心念基础课：安静与觉察')}
      <section className="section-content">
        <span className="content-normal" style={{color: 'rgb(255, 41, 65)'}}>注：基础课为新人必修课，是体系学习根基</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">学员可以掌握通过静坐，弱化并清空念头，从而达到安定的能力，并以定力为基础，提升生活中的注意力管理：大脑清明、有条理、专注、自律、平和、感官灵敏、安心入眠。</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal" >这些类似健身中的基础体能训练，训练心智的基础能力。冥想中的安定能力，可以帮助人从情绪中抽离出来，从更高的视角看待自己的边界和取舍，从而具备初步地消解内部矛盾的能力。</span>
      </section>
      <br></br>


      {courseQrcode('1.心念基础：21 天小班训练营（ 1499 元，2 人以上团购 1399 元 ）：',
       'https://cdn.yibencezi.com/2952c9c5dda5134207202de702fc2023?imageView2/2/w/700/q/75|imageslim')}

      {courseQrcode('2.心念基础：30 天私教课 （ 5999 元，2 人以上团购 4999 元 ）：',
       'https://cdn.yibencezi.com/dc721c0048188afce70f1c369bf869e4?imageView2/2/w/700/q/75|imageslim')}

      {sectionTitle('02', '心念进阶课：消除内部矛盾')}
      <section className="section-content">
        <span className="content-normal" style={{color: 'rgb(255, 41, 65)'}}>注：进阶课需要在基础课之后才能学习</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">学习进一步强化消除内部矛盾的能力，掌握探索潜意识中的念头和需求，放慢思维惯性并审视，从而获得灵感和智慧（由定生慧）。帮助找到并看清自我的边界和矛盾，并合理取舍，消除内部矛盾。</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">这个能力能够帮助我们更加和谐统一，从根本上消除焦虑，幸福高效。</span>
      </section>
      <br></br>

      {courseQrcode('1.心念进阶：14 天小班训练营（ 999 元 ）：',
       'https://cdn.yibencezi.com/a49042fde00ad3e8845850ce4a79c3a7?imageView2/2/w/700/q/75|imageslim')}
      {courseQrcode('2.心念进阶：21天私教课（ 3999 元 ）：',
       'https://cdn.yibencezi.com/f28b2df5d9531aac688174ed720985d2?imageView2/2/w/700/q/75|imageslim')}


      {sectionText('上课形式与时间投入')}
      <section className="section-content">
        <span className="content-normal">学冥想像学游泳，是一个技能，不能只学理论，要边学边练。教练在不同的阶段，引导纠正，就能快速上手。</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">每天课程也分为三个部分：</span>
      </section>
      <section className="section-content">
        <span className="content-normal">1.课程理论学习：每天约 10 - 15 分钟</span>
      </section>
      <section className="section-content">
        <span className="content-normal">2.冥想实操练习：每天约 20 - 40 分钟疑</span>
      </section>
      <section className="section-content">
        <span className="content-normal">3.微信群内记录感受 + 老师点评答疑</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">注：4天体验，不满意无条件退款</span>
      </section>

      {sectionText('选择小班，还是私教？')}
      <section className="section-content">
        <span className="content-normal">两者的知识是一致的，大部分学员可选小班课。</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">私教课适合平时比较忙，或者焦虑较重，需要更长时间安静下来，可以按照自己的学习节奏，更注重信息私密度和阅读效率的学员。</span>
      </section>
      <br></br>

      <section className="section-content">
        <span className="content-normal">1.开课时间上，小班课等待固定时间开营，私教课灵活随需报名上课。</span>
      </section>
      <section className="section-content">
        <span className="content-normal">2.教学指导上，私教课有3次助教视频陪练的服务，小班课没有。</span>
      </section>
      <section className="section-content">
        <span className="content-normal">3.学习节奏上，私教课可以根据自己情况灵活暂定，小班课是集体固定节奏。</span>
      </section>
      <section className="section-content">
        <span className="content-normal">4.学习时长上，私教课30天，小班课21天。整体学习吸收周期更长。</span>
      </section>
      <br></br>


      {sectionText('冥想班级类型')}
      <br></br>
      {courseTable()}

      {customCientQrcode()}


      <section className="section-title">
        <img src="https://cdn.yibencezi.com/1d29e425f43d3ea998de8f3ddc43091a?imageView2/2/w/700/q/75|imageslim"></img>
      </section>
      <br></br>
      <section className="section-content">
        <span className="content-normal">为了帮助不太熟悉心念冥想的同学，低成本地了解心念的原理，简单地尝试练习。我们写了一本科普的小册子。册子约为心念冥想体系课程 1/10 的内容，不含实操练习和纠偏服务。</span>
      </section>
      <br></br>
      <section className="section-content">
        <span className="content-normal">已经确定报课的学员就没有必要看这个册子了。课程内容已包含册子内容，且更容易练习。</span>
      </section>
      <br></br>
      {courseQrcode('长按二维码获取小册子',
       'https://cdn.yibencezi.com/e1b65ebb6668c283cb5662af0c21e1f4?imageView2/2/w/700/q/75|imageslim')}


      <section className="section-title">
        <img src="https://cdn.yibencezi.com/91af3bfd14729b8136e3fe226c38a5aa?imageView2/2/w/700/q/75|imageslim"></img>
      </section>
      <br></br>
      <section className="section-content">
        <span className="content-normal">我们的生活中会不断积累内在矛盾。在掌握心智调节的方法后，学员可以自行练习，也可以来复训，在老师点评、答疑下，帮助自己消除内在矛盾。复训我们提供很低的折扣，帮助大家坚持练习。</span>
      </section>
      <br></br>
      {courseQrcode('1.基础课 21 天小班复训（ 299 元 ）：',
       'https://cdn.yibencezi.com/8b779cdd945686fba5e0d7e839fc800f?imageView2/2/w/700/q/75|imageslim')}
{courseQrcode('2.基础课 30 天私教复训 （ 999 元 ）：',
       'https://cdn.yibencezi.com/ac2cd5575124bd0fc173e2baea7badf0?imageView2/2/w/700/q/75|imageslim')}
{courseQrcode('3.进阶课 14 天小班复训（ 199 元 ）：',
       'https://cdn.yibencezi.com/986a4b44171bc1db6a820b609b640e27?imageView2/2/w/700/q/75|imageslim')}
{courseQrcode('4.进阶课 21 天私教复训（ 666 元 ）：',
       'https://cdn.yibencezi.com/35541b8d28a66b922b7ea64b237d04ed?imageView2/2/w/700/q/75|imageslim')}
    </div>
    </div>

}

function courseQrcode(text, qrcodeUrl) {
    return <div>
      <section className="section-content">
        <strong><span className="content-emphasis">{text}</span></strong>
      </section>
      <br></br>
      <section style={{textAlign: 'center'}}>
        <img style={{
          width: '160px',
          height: 'auto',
        }} src={qrcodeUrl}></img>
      </section>
      <br></br>
    </div>
  }

  function customCientQrcode() {
    return <div>
      <section className="section-content">
        <strong><span className="content-emphasis">{'报名咨询'}</span></strong>
      </section>
      <section className="section-content">
        <strong><span className="content-emphasis">{'长按识别添加助教'}</span></strong>
      </section>
      <br></br>
      <section style={{textAlign: 'center'}}>
        <img style={{
          width: '160px',
          height: 'auto',
        }} src='https://cdn.yibencezi.com/a5474b71817910219db110476c7bd420?imageView2/2/w/700/q/75|imageslim'></img>
      </section>
      <br></br>
    </div>
  }




  function sectionTitle(titleNo, titleText) {
    return <section style={{
      textAlign: 'center',
      margin: '10px auto',
    }}>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>


      <section style={{
        textAlign: 'center',
        margin: '10px auto',
      }}>

        <section style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'flex-end',
visibility: 'visible'
        }}>


          <section style={{
            boxSizing: 'border-box',
            width: '60px',
            lineHeight: '0',
            visibility: 'visible'
          }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
              x="0px" y="0px" viewBox="0 0 93.71 22.73">
              <g>
            <rect  y="10.86" style={
              {fill: 'rgb(114, 193, 244)'}
            } width="77.77" height="1" ></rect>
            <polygon style={
              {fill: 'rgb(114, 193, 244)'}
            } points="76.27,19.56 72.52,19.56 77.99,3.16 81.75,3.16 	" ></polygon>
            <polygon style={
              {fill: 'rgb(255, 174, 40)'}
            } points="86.19,22.73 80.55,22.73 88.07,0 93.71,0 	"  ></polygon>
              </g>
              </svg>

          </section>

          <section style={{
            fontSize: '28px',
            color: 'rgb(255, 174, 40)',
            fontStyle: 'italic',
            lineHeight: '22px',
            marginRight: '8px',
            marginLeft: '8px',
            visibility: 'visible'
          }}>

            <span style={{
              fontSize: '17px'
            }}>
              <strong>{titleNo}</strong>
            </span>

          </section>

          <section style={{
            boxSizing: 'border-box',
            width: '60px',
            lineHeight: '0',
            visibility: 'visible'
          }}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" viewBox="0 0 94.71 22.73">
              <g>
            <rect x="16.18" y="10.86" style={
              {fill: 'rgb(114, 193, 244)'}
            } width="77.77" height="1" ></rect>
            <polygon style={
              {fill: 'rgb(114, 193, 244)'}
            } points="17.44,3.16 21.2,3.16 15.72,19.56 11.97,19.56 	" ></polygon>
            <polygon style={
              {fill: 'rgb(255, 174, 40)'}
            } points="7.52,0 13.16,0 5.64,22.73 0,22.73 	"  ></polygon>
              </g></svg>

          </section>
        </section>

        <section style={{
fontSize: '16px',
letterSpacing: '1px',
color: 'rgb(11, 67, 209)',
marginTop: '6px',
visibility: 'visible'
        }}>
          <span style={{
            color: 'rgb(0, 122, 170)',
            fontSize: '15px',
            visibility: 'visible'
          }}>

            <strong>{titleText}</strong>
          </span>

        </section>

      </section>


      </section>
    </section>
  }

  function sectionText(text) {
    return <section style={{
      margin: '10px auto',
      textAlign: 'center'
    }}>

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <section style={{
          boxSizing: 'border-box',
          width: '60px',
          lineHeight: '0',
        }}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" viewBox="0 0 93.71 22.73">
              <g>
                <rect style={{
                  fill: '#72c1f4'
                }} width="80" height="1"></rect>
                <polygon style={{
                  fill: '#72c1f4'
                }} points="76.27,16.4 72.52,16.4 77.99,0 81.75,0 	"></polygon>
                <polygon style={{
                  fill: '#ffae28'
                }} points="86.19,22.73 80.55,22.73 88.07,0 93.71,0 	"></polygon>
              </g>
              </svg>
        </section>

        <section style={{
          marginRight: '10px',
          marginLeft: '10px',
          fontSize: '16px',
          letterSpacing: '1px',
          color: 'rgb(11, 67, 209)'
        }}>
          <span style={{
            color: 'rgb(0, 122, 170)',
            fontSize: '15px'
          }}>
            <strong>{text}</strong>
          </span>
        </section>

        <section style={{
          boxSizing: 'border-box',
          width: '60px',
          lineHeight: '0',
        }}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" viewBox="0 0 94.71 22.73">
              <g>
                <rect style={{
                  fill: '#72c1f4'
                }} x="14.71" y="21.73" width="80" height="1"></rect>
                <polygon style={{
                  fill: '#72c1f4'
                }} points="17.44,6.32 21.2,6.32 15.72,22.73 11.97,22.73 	"></polygon>
                <polygon style={{
                  fill: '#ffae28'
                }} points="7.52,0 13.16,0 5.64,22.73 0,22.73 	"></polygon>
              </g>
              </svg>
        </section>

      </section>

    </section>
  }

  function courseTable() {
    return <table style={{
      marginBottom: '10px',
      borderCollapse: 'collapse',
      display: 'table',
      width: '100%',
    }}>
        <tbody>
          <tr>
            <td style={{width: '147.66666666666666px'}}><br></br></td>
            <td style={{width: '192.66666666666669px'}}>
              <span>
                <strong>小班训练课</strong>
              </span>
            </td>
            <td style={{width: '173px'}}>
              <span>
                <strong>私教课</strong>
              </span>
            </td>
          </tr>

          {courseTableRow('开课时间', '循环开营，加助教咨询', '随需开课')}
          {courseTableRow('学员人数', '15人以内', '1-5人')}
          {courseTableRow('服务周期', '21天', '21+10天')}
          {courseTableRow('助教陪练服务', '无', '3次')}
        </tbody>
      </table>
  }

  function courseTableRow(colTitle, colClass, colTrainer) {
    return <tr>
    <td style={{width: '147.66666666666666px'}}>
      <span>{colTitle}</span>
    </td>
    <td style={{width: '192.66666666666669px'}}>
      <span>
        {colClass}
      </span>
    </td>
    <td style={{width: '173px'}}>
      <span>
        {colTrainer}
      </span>
    </td>
  </tr>
  }