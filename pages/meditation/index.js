import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>心念冥想：科学的心智健身体系</title>
      </Head>
      <div className="page-content">
        <h1 className="rich-media-title">心念冥想：科学的心智健身体系</h1>

        {introduction()}
        <br></br>
        {teamIntro()}
        <br></br>
        {purposeOfMeditation()}
        <br></br>
        {keysToHappiness()}
        <br></br>
        {feedbacksFromStudents()}
        <br></br>
        {introToCourse()}
        <br></br>
        <section className="section-title">
          <img src="https://cdn.yibencezi.com/Fmvc1FXjfq9xYb5HLfp1ET4_QVKr?imageView2/2/w/700/q/75|imageslim"></img>
        </section>
      </div>
    </div>
  );
}

function introduction() {
  return <div><section className="section-content">
    <span className="content-normal">心念冥想的名字，一半借用了倡导 “知行合一” 的王阳明心学的 “心”，也来自于佛学和禅宗对 “念” 的解读。</span>
  </section>
  <br></br>

  <section className="section-content">
    <strong><span className="content-emphasis">每一次起心动念，都承载了我们的主观感受，也参与造就了我们的现实。借助神经科学揭露的意识规律，我们可以观察和把握自己心念的变化，帮助自己认知到更贴合现实的真相。</span></strong>
  </section>
  <br></br>

  <section className="section-content">
    <span className="content-normal">
    理顺自己的诉求和边界，从而增加对生活的掌控，拥有幸福高效的生活。
    </span>
  </section>
  <br></br>

  <section className="section-content">
    <span className="content-normal">
    心念冥想是科学的心智健身体系，帮助更多人获得这样的能力，不断提升自洽和内外的平衡，获得平静和力量。
    </span>
  </section>
  </div>
}

function teamIntro() {
  return <div>
    <section className="section-title">
      <img src="https://cdn.yibencezi.com/b49e796f4a57e0f002e77250e7382c2e?imageView2/2/w/700/q/75|imageslim"></img>
    </section>

    <section className="section-profile">
      <section className="section-profile-head">
        <section className="section-avatar">
          <section className="section-avatar-img" style={{
            backgroundImage: "url('https://cdn.yibencezi.com/9c8b35038c6dbd8c84a8567cfd146c16?imageView2/2/w/700/q/75|imageslim')"
          }}>
            <img src="https://cdn.yibencezi.com/9c8b35038c6dbd8c84a8567cfd146c16?imageView2/2/w/700/q/75|imageslim"></img>
          </section>
        </section>
        <section className="section-name">
          <span>{"创始人&讲师：宅宇"}</span>
        </section>
      </section>
      <br></br>

      <section>
        <span className="content-normal">毕业于清华大学和斯坦福大学硕士。建立冥想的神经科学解释。教授、名企创始人、高管、投资人、白领、学生等众多学员背书推荐。</span>
      </section>
    </section>

    <section className="section-profile">
      <section className="section-profile-head">
        <section className="section-avatar">
          <section className="section-avatar-img" style={{
            backgroundImage: "url('https://cdn.yibencezi.com/7410fb698c9eddca01ac7c7fb1708594?imageView2/2/w/700/q/75|imageslim')"
          }}>
            <img src="https://cdn.yibencezi.com/7410fb698c9eddca01ac7c7fb1708594?imageView2/2/w/700/q/75|imageslim"></img>
          </section>
        </section>
        <section className="section-name">
          <span>{"教学研发：周逸"}</span>
        </section>
      </section>
      <br></br>

      <section>
        <span className="content-normal">毕业于范德堡大学教育心理学硕士（USNEWS 美国学院排名第一），美国心理咨询学会会长 Erford 教授的研究生。</span>
      </section>
    </section>
  </div>
}

function purposeOfMeditation() {
  return <div>
    <section className="section-title">
      <img src="https://cdn.yibencezi.com/240f36462747c2fdc4304bdbc08b5f84?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">来学心念冥想的学员们，学习的理由形形色色。</span>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">有些同学是为了解决问题来的。</span></strong>
      <span className="content-normal">焦虑、失眠、注意力分散、情绪不稳定、没有动力，都会给人们的生活带来失控的感觉。</span>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">人在不同需求和别人的期待中拉扯，找不到自己的边界和方向。面对环境的负反馈和不确定，需要重新提升生活的秩序。</span>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">更多的学员是为了更主动地规划自己的人生。</span></strong>
      <span className="content-normal">他们探索底层的情绪和思绪，拆解过去的经历、当下的选择，和未来的可能性。帮助自己看清边界和方向，更好地活在当下，迎接未来。</span>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">心念冥想的学员中，有形形色色的社会角色：</span>
      <strong><span className="content-emphasis">更多的学员是为了更主动地规划自己的人生。</span></strong>
      <span className="content-normal">等等</span>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">他们面临的环境和挑战不同。有面临工作和情绪挫折时，希望从抑郁、焦虑或者失眠中恢复；有面临市场变化时，希望保持心态稳定；有面临任务繁杂时，希望思路清晰；有希望工作生活保持平衡；也有希望通过提升身体感受，而帮助减肥和调节肩颈。</span>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">无论什么样的角色，一套好的心智管理方法，都能帮助人恢复内外的和谐统一，从而让生活更加幸福高效。</span></strong>
    </section>
  </div>

}

function keysToHappiness() {
  return <div>
    <section className="section-title">
      <img src="https://cdn.yibencezi.com/54ee2431ee4417e197116ea0c781a7a3?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">人脑分为情绪系统和认知系统。情绪系统驱动我们追逐目标，满足需求，不断地 “向外求”。认知系统对满足这些需求需要的时间、精力、资源有大致的判断。</span>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">然而，随着生活，我们的认知和情绪系统会出现很多 “内部矛盾”。例如：不能兼得的诉求，难以取舍；贪恋太多，已经超出了自己的边界，却难以放下；无法改变的事实却无法接纳，等等。</span>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">这些 “内部矛盾” 是我们焦虑，担心，纠结，迷茫的真正原因，</span></strong>
      <span className="content-normal">让我们轻则做事无法专注，没有动力，重则导致抑郁，失眠。而且，我们常常陷在这些矛盾中，就像零件卡住一样，效率下降，甚至停摆。如</span>
      <strong><span className="content-emphasis">王阳明所说：“破山中贼易，破心中贼难”。</span></strong>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">因此，</span>
      <strong><span className="content-emphasis">人要学会 “向内求”，通过自我取舍，才能消除内部矛盾，进一步发展自己。</span></strong>
      <span className="content-normal">冥想就是绵延了几千年的研究 ”向内求“ 的法门。从古至今，从东方到西方，都受人青睐。</span>
    </section>
    <br></br>


    <section className="section-content">
    <strong><span className="content-emphasis">曾国藩，王阳明，乔布斯</span></strong>
      <span className="content-normal">等等无数名人智士推崇备至。《原则》的作者，桥水基金创始人</span>
      <strong><span className="content-emphasis">瑞·达利欧（Ray Dalio）</span></strong>
      <span className="content-normal">，从白手起家到福布斯估值身价 130 亿的金融大佬，认为他”人生各方面获得的成功最大的原因“，就是练习了 50 年的冥想，并说</span>
      <strong><span className="content-emphasis">“冥想给了我一个能够把事物看的很透彻的能力。“</span></strong>
    </section>
    <br></br>

    <section className="section-image">
      <img style={{
        borderRadius: '7px',
        width: '350px',
        height: 'auto'
      }} src="https://cdn.yibencezi.com/4f8c3a9b10efa10ac0ceb4837dcbe7fc?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">冥想相当于让大脑拥有了一个管理员，让人能平静下来。</span></strong>
      <span className="content-normal">在拥有安定的能力之后，能够从更高的视角，和不同的角度发现自己，发现忽略的思绪，审视思维的惯性。这样很容易获得启发和智慧，从而解开自己的内部矛盾。这也就是佛学中讲的 ”由定生慧“。</span>
    </section>
    <br></br>

    <section className="section-content">
    <span className="content-normal">当我们过去、当下和未来不同的诉求和谐自洽，自己想要的也在自己的掌控之内。</span>
      <strong><span className="content-emphasis">这样就认为自己该做的事情，也就是当下想做的事情。这样就达到了王阳明提到的 “知行合一” 的状态。</span></strong>
    </section>
    <br></br>

    <section className="section-content">
    <span className="content-normal">而这时，对当下的选择笃定、按部就班、有条不紊，也就达到了禅宗常说的 “活在当下” 的状态。人生向外求的过程中会不断遇到艰难困苦，快速的消解内部矛盾的能力，就让人不被卡住，也就成了人幸福高效，以及长期在自己的道路上成功的关键。</span>

    </section>
    <br></br>

  </div>
}

function introToXinNian() {
  return <div>
    <section className="section-title">
      <img src="https://cdn.yibencezi.com/0d7f9f37607a99caeb1a5df8ae96ee86?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">冥想作为向内探索的心智训练，影响很大，科学严谨，才能获得最佳的效果。</span></strong>
      <span className="content-normal">如果理论玄乎不清，就容易没有效果，甚至引导人躺平，逃避，甚至迷信。</span>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">心念冥想经历数年的时间，通过神经科学的底层规律，融会贯通传统的冥想练法，和心理疗愈，为社会提供一套科学和系统的心智健身体系。</span></strong>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">在心念课程中，每个练习动作和概念，都要说清为什么，如何改善生活，以及效果怎么衡量。</span>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">这样，心智训练就可以像科学健身一样，成为人受益一生的习惯。</span></strong>
      <span className="content-normal">也因为这样的理念，心念冥想吸引到专业的人才，教学也受到知名公司和学员的推荐和青睐。</span>
    </section>
    <br></br>

  </div>
}

function feedbacksFromStudents() {
  return <div>
    <section className="section-title">
      <img src="https://cdn.yibencezi.com/c9c73429b5ffcd7acc521a0440a2d368?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">早期的研发和教学中，不少学员觉得对自己有帮助，也反过来帮助心念的发展。很多同学报名当了心念的志愿者，承担了课程运营设计推广的工作，今天的心念团队就是从他们转化而来。</span>
    </section>
    <br></br>

    <section className="section-content">
      <span className="content-normal">学员还推荐给朋友家人，也邀请我们去线上线下讲座推广，让更多人了解。心念受邀在很多优秀的线上线下机构举办科普讲座和访谈，包括，</span>
      <strong><span className="content-emphasis">清华大学、北京大学、真格基金、阿里巴巴、王小卤，飞书官方播客、钛媒体等等。</span></strong>
    </section>
    <br></br>

    {feedbackPhotos()}

    <section className="section-content">
      <span className="content-normal">在教学过程中，心念冥想受到了很多学员的喜爱和推荐，以下是部分学员的反馈：</span>
    </section>
    <br></br>

    {endorsements()}

  </div>
}

function feedbackPhotos() {
  return <div style={{
    margin: '10px auto'
  }}>
    <section className="photo-album-container">
      <section className="photo-album">
        <section className="photo-album-body">
          <section className="photo-album-body-container">
            <section className="photo-album-img">
              <img src="https://cdn.yibencezi.com/6ad750f5e2ce2d7e110ef2591ca57186?imageView2/2/w/700/q/75|imageslim"></img>
            </section>
            <section className="photo-album-img">
              <img src="https://cdn.yibencezi.com/d52f6d40fb3b69bb69e67f491ee974bf?imageView2/2/w/700/q/75|imageslim"></img>
            </section>
            <section className="photo-album-img">
              <img src="https://cdn.yibencezi.com/3d94f31b5f01428b5ecf0a7c4b6ecb07?imageView2/2/w/700/q/75|imageslim"></img>
            </section>
            <section className="photo-album-img">
              <img src="https://cdn.yibencezi.com/a383f8439fc5fca8c4747071afa9d60d?imageView2/2/w/700/q/75|imageslim"></img>
            </section>
          </section>
        </section>

        <section className="photo-album-footer">
          <section className="photo-album-footer-text">
            <span>{"<左右滑动查看更多>"}</span>
          </section>
        </section>
      </section>
    </section>
  </div>
}

function endorsements() {
  return <div>
    {endorsementTitle('肖盾 | 一起教育科技（纳斯达克上市公司）联合创始人')}
    {endorsementContent(endorsementContentTextXiaoDun())}

    {endorsementTitle('杨灵 | 清华大学经管学院副教授')}
    {endorsementContent(endorsementContentTextYangLing())}

    {endorsementTitle('唐海程 | 前乐纯战略官，现创业者，福布斯 30 位 30 岁以下精英')}
    {endorsementContent(endorsementContentTextTangHaicheng())}

    {endorsementTitle('高孟 | 前聚美优品 CFO，三友资本合伙人')}
    {endorsementContent(endorsementContentTextGaoMeng())}

    {endorsementTitle('俞丽颖 | 轻松冥想创始人')}
    {endorsementContent(endorsementContentTextYuLiying())}
  </div>
}

function endorsementTitle(titleText) {
  return <section style={{
    color: '#5f9cef'
  }}>
    <span><strong>{titleText}</strong></span>
  </section>
}

function endorsementContent(contentText) {
  return <section style={{
    height: '152px',
    overflow: 'auto',
    margin: '10px 0px -50px',
    lineHeight: '1.75em',
    fontFamily: '-apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif',
    marginRight: '5px',
    marginLeft: '5px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgb(95, 156, 239)',
    padding: '15px 20px 25px',
    marginBottom: '20px',
    backgroundColor: '#ebeeed'
  }}>
    {contentText}
  </section>
}

function endorsementContentTextXiaoDun() {
  return <div>
    <p>感恩宅宇老师每天传道授业解惑，我作为一个多年一直想尝试冥想又一直没行动的懒学生迈出了第一小步。尽管今年过得并不平静，近期心态自我感觉良好，每次静心冥想杂念也不多，基本能进入3-5级，有过几次“入定”的感觉。</p>
    <br></br>
    <p>关于意识状态，我一直知道自己有“心急”的特点，最近在起心动念处有了更深更敏锐地自我感知，期待未来可以及时设置断点，少情绪化一些。另外我的各感官似乎都不够锐利，今后也将时常将注意力放在感受上。</p>
    <br></br>
    <p>每个人都想生活更幸福，而幸福的钥匙在心里。如何能更好地提升专注、缓解焦虑，活得平和坚定有方向？如何能更好地认识自己、改变自己，活得真诚通透有力量？感恩过去21天宅宇老师的分享和指点，从一心一念做起，开启幸福的大门。期待心念冥想给更多生命带来智慧、喜悦和幸福。</p>
  </div>
}

function endorsementContentTextYangLing() {
  return <div>
    <p>如果不是宅宇用平实的方式教授冥想，我可能不会去接近这个看上去很神秘玄乎的领域。在教学和练习中，老师并没有灌输哲学，而是鼓励学员注意脑海中冒出的念头、情绪及其出现的规律，并且多提问。</p>
    <br></br>
    <p>我的工作需要处理很多资料，练习冥想之后专注很多，结合主动管理注意力，大大加快了信息处理的速度。练习冥想后还对体感的觉察更敏锐，累了知道提醒自己及时休息和放松，也能合理调节饮食。</p>
    <br></br>
    <p>进一步说，在冥想中梳理心理认知和社会关系，是一次反求诸己、观照人生的奇妙旅程。</p>
  </div>
}

function endorsementContentTextTangHaicheng() {
  return <div>
    <p>从 16 年开始接触冥想，在冥想上掉进过各种坑，归根结底是玄学太多，可证伪，可被不断测试优化的部分太少。宅宇在这件事上的思考极为硬核，能非常好的把原理讲清楚，所以在生活和工作中的应用，会更加直切目标，而没有常见冥想过于身心灵的那一部分，帮助我们更好的看到这个世界的实相。</p>
  </div>
}

function endorsementContentTextGaoMeng() {
  return <div>
    <p>作为家有小童的职业女性，平时时间非常紧张。宅宇的这一套冥想体系有几点我非常认可：

1）对冥想的原理有一个符合逻辑、科学的解释，对功效也有一个比较客观的描述，不去强调一堆没用的。

2）练习的方法务实，抓重点。这样可以让学员在理解要点之后，根据自己的状态和时间去做个性化调整。

3）静心、意识管理、自我梳理这3个步骤循序渐进，能理解和体会冥想在不同层次和阶段的好处。

4）微信课程给学员充分的提问时间，我觉得有些学员做的总结和提的问题非常有帮助，加深了对冥想的体会和认知。

5）微信群的方式比较适合工作繁忙的人。</p>
  </div>
}

function endorsementContentTextYuLiying() {
  return <div>
    <p>很感谢认识了宅宇老师，极大地促进了我在冥想练习上的进步，也带动了我们轻松冥想数万粉丝的进步。</p>
  </div>
}

function introToCourse() {
  return <div>
    <section className="section-title">
      <img src="https://cdn.yibencezi.com/b08a9f37f7aa184e42af25fa37f3b787?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">冥想是实操技能，需要连续多天的练习上手，因此需要系统的课程规划和练习跟进。</span></strong>
      <span className="content-normal">基于此，心念冥想研发了系统的线上冥想课程。</span>
    </section>
    <br></br>

    <section className="section-content">
    <span className="content-normal">在课程期间，学员每天需要 15 分钟的理论学习时间，以及根据个人状态 20 - 40 分钟的冥想练习时间，而</span>
      <strong><span className="content-emphasis">期间讲师会给到针对每一个人的情况有个性化的指导和答疑。</span></strong>
    </section>
    <br></br>

    <section className="section-content">
      <strong><span className="content-emphasis">了解更多课程详情，识别海报二维码，或文末咨询助教。</span></strong>
    </section>
    <br></br>

    <section className="section-image">
      <img style={{
        width: '350px',
        height: 'auto'
      }} src="https://cdn.yibencezi.com/ca07d59f71839cc51333a2be0001448a?imageView2/2/w/700/q/75|imageslim"></img>
    </section>
    <br></br>
  </div>
}