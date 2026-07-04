const questions = [
  {
    id: 'age',
    title: '你的年龄阶段是？',
    help: '只用于让建议更贴近你的学习和工作状态。',
    options: [
      ['A', '18 岁以下'], ['B', '18-25 岁'], ['C', '26-35 岁'], ['D', '36-45 岁'], ['E', '46 岁以上']
    ]
  },
  {
    id: 'job',
    title: '你目前的身份/职业是什么？',
    help: '比如：学生、运营、销售、老师、程序员、设计师、老板、自由职业者、管理者等。',
    type: 'text',
    placeholder: '请输入你的职业或身份'
  },
  {
    id: 'goal',
    title: '你目前最想用 AI 改善哪方面？',
    help: '选一个最想优先解决的方向就好。',
    options: [
      ['A', '提高工作效率'], ['B', '学习新知识'], ['C', '内容创作/写作/运营'], ['D', '副业赚钱/接单/做账号'],
      ['E', '职业转型'], ['F', '管理团队/辅助决策'], ['G', '编程/数据/自动化'], ['H', '图片/视频/设计'], ['I', '生活效率'], ['J', '还不确定']
    ]
  },
  {
    id: 'frequency',
    title: '你现在使用 AI 的频率是？',
    help: '不用精确，选最接近的一项。',
    options: [
      ['A', '从没用过'], ['B', '偶尔用过几次'], ['C', '每周会用几次'], ['D', '几乎每天都会用'], ['E', '已经离不开 AI 工具']
    ]
  },
  {
    id: 'tools',
    title: '你主要用过哪些 AI 工具？',
    help: '如果用过多个，选最常用或最接近的一类。',
    options: [
      ['A', '没用过'], ['B', '豆包 / Kimi / 通义 / 文心一言'], ['C', 'ChatGPT / Claude / Gemini'],
      ['D', '剪映 AI / 即梦 / 可灵 / Midjourney / Runway'], ['E', 'Notion AI / 飞书妙记 / WPS AI'], ['F', 'Cursor / GitHub Copilot / Coze / Dify / Zapier'], ['G', '其他']
    ]
  },
  {
    id: 'prompting',
    title: '你平时一般怎么向 AI 提问？',
    help: '这会影响你的成长阶段判断。',
    options: [
      ['A', '只会问很简单的问题，比如“帮我写一篇文章”'], ['B', '会补充一些背景信息'],
      ['C', '会告诉 AI 目标、角色、要求和格式'], ['D', '会多轮追问，让 AI 不断修改'],
      ['E', '会让 AI 先问我问题，再给我方案'], ['F', '会设计固定提示词或工作流']
    ]
  },
  {
    id: 'ability',
    title: '你觉得 AI 主要能帮你做什么？',
    help: '选你最认可或最常用的一项。',
    options: [
      ['A', '查资料、回答问题'], ['B', '写文案、写总结、写邮件'], ['C', '做 PPT、表格、方案、报告'],
      ['D', '分析问题、辅助决策'], ['E', '生成图片、视频、声音'], ['F', '写代码、做自动化'], ['G', '设计工作流程或商业方案'], ['H', '其实不太清楚 AI 到底能干什么']
    ]
  },
  {
    id: 'realTask',
    title: '你有没有用 AI 完成过一个真实任务？',
    help: '真实任务可以是工作、学习、生活或创作中的具体事情。',
    options: [
      ['A', '没有，只是随便试过'], ['B', '有，用 AI 写过文章/总结/邮件'], ['C', '有，用 AI 帮我完成过工作任务'],
      ['D', '有，用 AI 做过图片/视频/内容'], ['E', '有，用 AI 帮我做过方案、分析或决策'], ['F', '有，我已经把 AI 固定用在某些工作流程里']
    ]
  },
  {
    id: 'blocker',
    title: '你现在使用 AI 最大的问题是什么？',
    help: '选最困扰你的一项。',
    options: [
      ['A', '不知道 AI 能干什么'], ['B', '不知道怎么提问'], ['C', 'AI 回答太空泛，不好用'], ['D', '不知道哪些工具适合我'],
      ['E', '学了很多，但用不到工作/生活里'], ['F', '信息太多，不知道从哪学'], ['G', '想用 AI 赚钱，但没有方向'], ['H', '担心被 AI 替代'], ['I', '没有时间系统学习']
    ]
  },
  {
    id: 'time',
    title: '你每天愿意花多少时间学习/练习 AI？',
    help: '行动计划会按你的时间来安排。',
    options: [
      ['A', '10 分钟以内'], ['B', '10-30 分钟'], ['C', '30-60 分钟'], ['D', '1 小时以上'], ['E', '不确定，希望越轻量越好']
    ]
  }
];

const typeInfo = {
  'AI 新手村勇者': {
    keywords: ['好奇', '入门', '探索', '轻量开始'],
    state: '你正站在 AI 世界的新手村门口。现在最重要的不是学复杂工具，而是先知道 AI 能帮你解决哪些真实小问题。',
    advantage: '你没有太多旧习惯包袱，反而更容易用轻量方式建立正确的 AI 使用习惯。',
    blocker: '容易被各种工具和教程淹没，不知道第一步该做什么。',
    directions: ['先建立 AI 基础认知', '从日常小任务开始练习', '学会描述背景和目标'],
    tools: ['豆包：中文日常问答和轻量写作', 'Kimi：长文档阅读和资料总结', 'ChatGPT：复杂问题拆解和学习陪练'],
    quote: '不用一上来就学会所有 AI，先让它帮你完成一个小任务就赢了。'
  },
  '提问小法师': {
    keywords: ['会用一点', '需要提问术', '重视反馈', '可快速进步'],
    state: '你已经拿到了 AI 魔法棒，但还需要学会“念咒语”。你的核心提升点不是换工具，而是把问题问清楚。',
    advantage: '你已经有使用经验，只要掌握目标、背景、要求、格式这几个要素，效果会明显变好。',
    blocker: '容易直接丢一个大问题给 AI，导致回答泛泛而谈。',
    directions: ['学习结构化提问', '练习多轮追问和修改', '沉淀常用提示词模板'],
    tools: ['ChatGPT：练习多轮对话和复杂任务拆解', '豆包：日常中文表达和文案优化', 'Kimi：结合资料做总结和改写'],
    quote: 'AI 好不好用，很多时候不是工具问题，而是问题还没被问清楚。'
  },
  '效率加速侠': {
    keywords: ['职场提效', '任务导向', '实用主义', '高频场景'],
    state: '你适合把 AI 当作职场加速器，从邮件、总结、方案、资料整理这些高频任务开始提效。',
    advantage: '你有明确的效率需求，只要找到重复场景，很快就能感受到 AI 的价值。',
    blocker: '容易只在临时想起时用 AI，没有把高频任务沉淀成固定流程。',
    directions: ['梳理每天重复任务', '建立办公提示词库', '用 AI 辅助总结、汇报和方案'],
    tools: ['Kimi：资料阅读和长文总结', 'WPS AI：文档、表格、PPT 辅助', '飞书妙记：会议纪要和行动项整理', 'ChatGPT：方案拆解和表达优化'],
    quote: '先别追求全能 AI，先让它每天帮你省下 20 分钟。'
  },
  '灵感捕手': {
    keywords: ['创意', '表达', '选题', '内容生产'],
    state: '你适合把 AI 当作灵感搭子，而不是只把它当成代写工具。它可以陪你做选题、标题、脚本和内容迭代。',
    advantage: '你有内容场景，AI 很容易帮你放大创意数量和表达效率。',
    blocker: '容易让 AI 直接写成品，结果内容不够像你，也不够有观点。',
    directions: ['建立选题库', '练习爆款拆解', '用 AI 做初稿，再加入个人判断'],
    tools: ['豆包/ChatGPT：选题、标题、脚本和文案', 'Kimi：资料整理和内容拆解', '剪映 AI：短视频字幕和剪辑辅助', '即梦/Midjourney：视觉灵感生成'],
    quote: 'AI 负责给你 100 个灵感，你负责挑出最像你的那一个。'
  },
  '知识探险家': {
    keywords: ['学习', '拆解', '笔记', '长期成长'],
    state: '你适合把 AI 当成私人老师、陪练和知识翻译器，用它帮你把复杂知识讲清楚、拆明白。',
    advantage: '你有学习目标，AI 能帮你降低理解门槛，并把知识变成可复习的结构。',
    blocker: '容易只是看 AI 解释，但缺少练习、复述和输出。',
    directions: ['用 AI 拆解概念', '建立学习计划', '让 AI 出题陪练和检查理解'],
    tools: ['ChatGPT：概念讲解和学习陪练', 'Kimi：论文、资料和长文阅读', 'Notion AI：整理笔记和知识库'],
    quote: '把 AI 当老师还不够，要让它当你的陪练。'
  },
  '职场外挂玩家': {
    keywords: ['真实任务', '零散使用', '待沉淀', '效率升级'],
    state: '你已经不是新手了，AI 已经帮你完成过真实任务。下一步是把零散用法变成稳定的职场外挂。',
    advantage: '你已经知道 AI 有用，接下来只需要把好用的场景复制、复用、流程化。',
    blocker: '容易每次从零开始问，缺少自己的模板和工作流。',
    directions: ['复盘成功使用案例', '沉淀 3 个高频模板', '建立任务前中后流程'],
    tools: ['ChatGPT/Claude：复杂任务拆解和方案优化', 'Kimi：资料和文档处理', '飞书/Notion：沉淀模板和知识库'],
    quote: '你要做的不是多试几个工具，而是把已经有效的方法固定下来。'
  },
  '工作流建筑师': {
    keywords: ['系统搭建', '流程化', '知识库', '自动运行'],
    state: '你不满足于让 AI 回答问题，你更想让它参与一整套流程。你适合从单次提问升级到系统搭建。',
    advantage: '你已经具备流程意识，能把 AI 从聊天工具变成工作系统的一部分。',
    blocker: '容易一上来想搭大系统，反而迟迟无法落地。',
    directions: ['先选一个高频流程', '拆成输入、处理、输出三段', '逐步加入知识库和自动化'],
    tools: ['Coze/Dify：搭建智能体和工作流', 'Notion/飞书：知识库和团队协作', 'Zapier/Make：连接工具自动化', 'ChatGPT：流程设计和测试'],
    quote: '别先造大厦，先搭一个每天真的会用的小房间。'
  },
  '自动化驯龙师': {
    keywords: ['技术', '代码', '自动化', '工具构建'],
    state: '你适合把 AI 当成技术放大器，用它帮你写代码、处理数据、搭工具、做自动化。',
    advantage: '你有技术或逻辑基础，AI 能直接放大你的开发和问题解决能力。',
    blocker: '容易停留在“让 AI 写一段代码”，没有把它接入完整开发流程。',
    directions: ['用 AI 辅助代码生成和重构', '把重复操作脚本化', '尝试做一个小工具或自动化流程'],
    tools: ['Cursor：AI 辅助开发', 'GitHub Copilot：代码补全和开发效率', 'ChatGPT/Claude：架构设计和 Debug', 'Dify/Coze：AI 应用原型'],
    quote: '你不是在让 AI 替你写代码，而是在给自己的技术能力加外挂。'
  },
  '副业寻宝者': {
    keywords: ['变现', '试错', '小场景', '行动验证'],
    state: '你不是缺机会，而是需要先找到一个能交付、能验证、能持续的小场景。',
    advantage: '你有明确的变现动机，这会推动你更快从学习走向实践。',
    blocker: '容易被各种 AI 赚钱案例吸引，方向太多，反而没有真正验证一个。',
    directions: ['选择一个细分服务场景', '做 1 个可展示样品', '用 7 天验证是否有人需要'],
    tools: ['豆包/ChatGPT：服务方案、文案和交付模板', '剪映 AI：短视频内容制作', '即梦/可灵：图片视频素材', '飞书/Notion：客户需求和案例管理'],
    quote: '先别问 AI 怎么赚大钱，先用 AI 做出一个别人愿意要的小交付。'
  },
  '创意导演型玩家': {
    keywords: ['视觉', '表达', '作品', '导演思维'],
    state: '你适合用 AI 把脑子里的画面快速变成作品，从想法、脚本、分镜到视觉成片。',
    advantage: '你关注作品表达，AI 可以帮你大幅降低从想法到视觉草稿的成本。',
    blocker: '容易沉迷工具效果，但缺少清晰的主题、脚本和审美方向。',
    directions: ['练习提示词描述画面', '建立风格参考库', '从脚本、分镜到成片跑一遍'],
    tools: ['即梦/Midjourney：图片和视觉风格', '可灵/Runway：视频生成和动态效果', '剪映 AI：剪辑、字幕和包装', 'ChatGPT：脚本和分镜设计'],
    quote: 'AI 可以生成画面，但真正的导演感来自你的选择。'
  },
  '决策参谋官': {
    keywords: ['管理', '判断', '分析', '团队效率'],
    state: '你适合把 AI 当成战略参谋，而不是单纯的办公工具。它可以帮你做信息整理、方案比较和决策推演。',
    advantage: '你有真实决策场景，AI 能在信息密度和思考角度上帮你扩展视野。',
    blocker: '容易把 AI 当成万能答案机，而不是让它帮你提出假设、风险和备选方案。',
    directions: ['用 AI 做决策前的信息整理', '让 AI 输出多方案对比', '沉淀团队会议和知识库流程'],
    tools: ['ChatGPT/Claude：决策推演和方案对比', 'Kimi：行业资料和报告总结', '飞书妙记：会议纪要和行动项', 'Notion/飞书：团队知识沉淀'],
    quote: '好的 AI 参谋不替你拍板，但会帮你看见更多选项。'
  },
  'AI 斜杠探索家': {
    keywords: ['多方向', '好奇', '待聚焦', '探索欲'],
    state: '你不是没有方向，而是方向太多。现在最重要的是做减法，先用 7 天验证一个最值得投入的方向。',
    advantage: '你的好奇心强，容易发现 AI 的多种可能性。只要聚焦，会进步很快。',
    blocker: '容易今天学提效，明天看副业，后天又想做视频，最后没有一个方向跑通。',
    directions: ['先选一个主方向', '做 7 天小实验', '用结果决定是否继续投入'],
    tools: ['ChatGPT：方向拆解和计划制定', '豆包：日常中文任务和轻量练习', 'Kimi：资料整理', 'Notion：记录实验和复盘'],
    quote: '方向多不是问题，不做取舍才是问题。先让一个方向跑起来。'
  }
};


const typeThemes = {
  'AI 新手村勇者': ['#22c55e', '#14b8a6'],
  '提问小法师': ['#8b5cf6', '#ec4899'],
  '效率加速侠': ['#2563eb', '#06b6d4'],
  '灵感捕手': ['#f97316', '#f43f5e'],
  '知识探险家': ['#0ea5e9', '#6366f1'],
  '职场外挂玩家': ['#4f46e5', '#7c3aed'],
  '工作流建筑师': ['#0f766e', '#2563eb'],
  '自动化驯龙师': ['#111827', '#2563eb'],
  '副业寻宝者': ['#f59e0b', '#ef4444'],
  '创意导演型玩家': ['#db2777', '#7c3aed'],
  '决策参谋官': ['#0f172a', '#b45309'],
  'AI 斜杠探索家': ['#06b6d4', '#8b5cf6']
};

const stageEmoji = {
  '萌芽期': '🌱',
  '上手期': '🛠️',
  '进阶期': '🚀',
  '系统期': '🏗️'
};

const stageInfo = {
  '萌芽期': '刚开始接触 AI，还在建立基本认知。',
  '上手期': '已经用过 AI，但主要还是零散使用。',
  '进阶期': '已经能用 AI 完成真实任务，开始追求质量和效率。',
  '系统期': '已经开始搭建流程、智能体、自动化或稳定方法论。'
};

const state = {
  current: 0,
  answers: {}
};

const $ = (id) => document.getElementById(id);

$('startBtn').addEventListener('click', () => {
  $('startScreen').classList.add('hidden');
  $('quizScreen').classList.remove('hidden');
  renderQuestion();
});

$('backBtn').addEventListener('click', () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

$('restartBtn').addEventListener('click', () => {
  state.current = 0;
  state.answers = {};
  $('resultScreen').classList.add('hidden');
  $('startScreen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('copyBtn').addEventListener('click', async () => {
  const text = buildResultText();
  try {
    await navigator.clipboard.writeText(text);
    $('copyBtn').textContent = '已复制';
    setTimeout(() => $('copyBtn').textContent = '复制结果', 1600);
  } catch {
    alert(text);
  }
});

function renderQuestion() {
  const q = questions[state.current];
  $('stepNow').textContent = state.current + 1;
  $('progressBar').style.width = `${((state.current + 1) / questions.length) * 100}%`;
  $('questionKicker').textContent = `第 ${state.current + 1} 题`;
  $('questionTitle').textContent = q.title;
  $('questionHelp').textContent = q.help || '';
  $('backBtn').disabled = state.current === 0;

  const area = $('answerArea');
  area.innerHTML = '';

  if (q.type === 'text') {
    const wrap = document.createElement('div');
    wrap.className = 'text-answer';
    const input = document.createElement('input');
    input.value = state.answers[q.id]?.text || '';
    input.placeholder = q.placeholder || '请输入';
    input.autofocus = true;
    const btn = document.createElement('button');
    btn.className = 'primary';
    btn.textContent = '下一题';
    btn.addEventListener('click', () => {
      const value = input.value.trim();
      if (!value) {
        input.focus();
        return;
      }
      answer(q.id, { value: value, text: value });
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') btn.click();
    });
    wrap.append(input, btn);
    area.appendChild(wrap);
    setTimeout(() => input.focus(), 0);
    return;
  }

  q.options.forEach(([value, text]) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-label">${value}</span>${text}`;
    btn.addEventListener('click', () => answer(q.id, { value, text }));
    area.appendChild(btn);
  });
}

function answer(id, payload) {
  state.answers[id] = payload;
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResult();
  }
}

function showResult() {
  const result = calculateResult();
  window.latestResult = result;
  $('quizScreen').classList.add('hidden');
  $('resultScreen').classList.remove('hidden');

  applyResultTheme(result.type);
  $('resultType').textContent = result.type;
  $('stagePill').textContent = `${stageEmoji[result.stage] || '✨'} ${result.stage}`;
  $('resultSub').textContent = `辅助人格：${result.secondary || '暂不明显'}｜${stageInfo[result.stage]}`;
  $('keywords').textContent = result.info.keywords.join('｜');
  $('currentState').textContent = result.info.state;
  $('advantage').textContent = result.info.advantage;
  $('blocker').textContent = result.info.blocker;
  renderList('directions', result.info.directions);
  renderList('plan', buildPlan(result));
  renderList('tools', result.info.tools);
  $('quote').textContent = result.info.quote;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


function applyResultTheme(type) {
  const [a, b] = typeThemes[type] || ['#2563eb', '#8b5cf6'];
  const hero = $('resultHero');
  hero.style.setProperty('--theme-a', a);
  hero.style.setProperty('--theme-b', b);
  hero.style.setProperty('--theme-shadow', `${hexToRgba(a, 0.32)}`);
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderList(id, items) {
  const el = $(id);
  el.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    el.appendChild(li);
  });
}

function calculateResult() {
  const a = state.answers;
  const job = (a.job?.text || '').toLowerCase();
  const goal = a.goal?.value;
  const freq = a.frequency?.value;
  const tools = a.tools?.value;
  const prompting = a.prompting?.value;
  const ability = a.ability?.value;
  const realTask = a.realTask?.value;
  const blocker = a.blocker?.value;

  const scores = Object.fromEntries(Object.keys(typeInfo).map(k => [k, 0]));
  const add = (type, n = 1) => { scores[type] += n; };

  if (/老板|创始|创业|管理|负责人|总监|经理|ceo|founder/.test(job)) add('决策参谋官', 5);
  if (/程序|开发|工程|数据|算法|产品|技术|it|前端|后端/.test(job)) add('自动化驯龙师', 5);
  if (/设计|视频|剪辑|摄影|导演|视觉|美术|插画|品牌/.test(job)) add('创意导演型玩家', 5);
  if (/运营|新媒体|市场|文案|编辑|内容|策划|小红书|公众号/.test(job)) add('灵感捕手', 4);
  if (/学生|老师|教师|研究|考研|自学/.test(job)) add('知识探险家', 4);

  const goalMap = {
    A: '效率加速侠', B: '知识探险家', C: '灵感捕手', D: '副业寻宝者', E: '知识探险家',
    F: '决策参谋官', G: '自动化驯龙师', H: '创意导演型玩家', I: '效率加速侠', J: 'AI 斜杠探索家'
  };
  if (goalMap[goal]) add(goalMap[goal], 5);

  if (freq === 'A') add('AI 新手村勇者', 4);
  if (freq === 'B') add('提问小法师', 2);
  if (freq === 'D') add('职场外挂玩家', 2);
  if (freq === 'E') add('工作流建筑师', 3);

  if (tools === 'A') add('AI 新手村勇者', 3);
  if (tools === 'D') add('创意导演型玩家', 3);
  if (tools === 'E') add('效率加速侠', 2);
  if (tools === 'F') { add('自动化驯龙师', 3); add('工作流建筑师', 3); }

  if (prompting === 'A') add('提问小法师', 4);
  if (prompting === 'B') add('提问小法师', 2);
  if (prompting === 'D' || prompting === 'E') add('职场外挂玩家', 2);
  if (prompting === 'F') add('工作流建筑师', 5);

  const abilityMap = { A:'AI 新手村勇者', B:'效率加速侠', C:'效率加速侠', D:'决策参谋官', E:'创意导演型玩家', F:'自动化驯龙师', G:'工作流建筑师', H:'AI 新手村勇者' };
  if (abilityMap[ability]) add(abilityMap[ability], 3);

  if (realTask === 'A') add('AI 新手村勇者', 3);
  if (realTask === 'B') add('提问小法师', 1);
  if (realTask === 'C') add('职场外挂玩家', 4);
  if (realTask === 'D') add('创意导演型玩家', 3);
  if (realTask === 'E') add('决策参谋官', 3);
  if (realTask === 'F') add('工作流建筑师', 5);

  const blockerMap = { A:'AI 新手村勇者', B:'提问小法师', C:'提问小法师', D:'AI 斜杠探索家', E:'职场外挂玩家', F:'AI 斜杠探索家', G:'副业寻宝者', H:'知识探险家', I:'效率加速侠' };
  if (blockerMap[blocker]) add(blockerMap[blocker], 4);

  const sorted = Object.entries(scores).sort((x, y) => y[1] - x[1]);
  const type = sorted[0][0];
  const secondary = sorted[1][1] >= Math.max(3, sorted[0][1] - 2) ? sorted[1][0] : '';
  const stage = calculateStage(freq, prompting, realTask, tools);
  return { type, secondary, stage, scores, info: typeInfo[type] };
}

function calculateStage(freq, prompting, realTask, tools) {
  let points = 0;
  points += ({ A:0, B:1, C:2, D:3, E:4 })[freq] ?? 1;
  points += ({ A:0, B:1, C:2, D:3, E:3, F:4 })[prompting] ?? 1;
  points += ({ A:0, B:1, C:2, D:2, E:3, F:4 })[realTask] ?? 1;
  if (tools === 'F') points += 2;
  if (points <= 3) return '萌芽期';
  if (points <= 7) return '上手期';
  if (points <= 10) return '进阶期';
  return '系统期';
}

function buildPlan(result) {
  const time = state.answers.time?.value;
  const light = time === 'A' || time === 'E';
  const type = result.type;

  const base = {
    'AI 新手村勇者': ['让 AI 列出 10 个你生活/工作中能用的小场景', '选一个小场景，让 AI 帮你完成一次', '学习“背景+目标+要求”提问法', '让 AI 总结一篇你感兴趣的文章', '让 AI 帮你改写一段消息或文案', '整理 3 个你觉得有用的提问模板', '复盘：哪个场景最值得继续练'],
    '提问小法师': ['把一个问题补充背景后再问一次', '练习给 AI 指定角色和输出格式', '对同一个回答追问 3 次', '让 AI 先问你问题再给方案', '保存 2 个好用提示词', '用模板完成一个真实任务', '复盘：你的提问哪里变清楚了'],
    '效率加速侠': ['列出 5 个重复办公任务', '用 AI 优化一封邮件或通知', '用 AI 总结一份资料', '用 AI 生成一个汇报大纲', '沉淀一个办公提示词模板', '用 AI 完成一次真实工作辅助', '复盘：哪个任务最能省时间'],
    '灵感捕手': ['让 AI 生成 20 个选题', '挑 3 个选题让 AI 拆标题', '让 AI 分析一篇你喜欢的内容', '生成一版脚本/文案初稿', '加入你的观点重新改写', '整理一个选题库', '复盘：哪个选题最值得做'],
    '知识探险家': ['让 AI 解释一个复杂概念', '让 AI 给你做 7 天学习计划', '让 AI 把知识点变成表格', '让 AI 出 5 道练习题', '用自己的话复述并让 AI 纠错', '整理一页学习笔记', '复盘：哪个知识点真的学会了'],
    '职场外挂玩家': ['复盘 3 次 AI 帮过你的任务', '选一个高频任务做模板', '用模板完成一次真实任务', '让 AI 帮你优化输出质量', '把流程写成步骤清单', '再跑一次同类任务', '复盘：能否固定成工作流'],
    '工作流建筑师': ['选一个最小工作流场景', '拆出输入、处理、输出', '写出每一步的提示词', '找一个工具承载流程', '跑一次端到端测试', '修正流程卡点', '复盘：是否值得自动化'],
    '自动化驯龙师': ['选一个重复技术任务', '让 AI 帮你写脚本思路', '用 AI 生成第一版代码', '让 AI 帮你 Debug/重构', '写 README 或使用说明', '把脚本用于真实任务', '复盘：下一步如何自动化'],
    '副业寻宝者': ['列出 5 个你能交付的小服务', '选一个最容易验证的方向', '用 AI 做一个样品', '写一段服务介绍文案', '找 3 个潜在用户反馈', '根据反馈修改样品', '复盘：是否有人愿意继续了解'],
    '创意导演型玩家': ['写一个 30 秒作品想法', '让 AI 拆成脚本和分镜', '生成 3 个视觉风格方向', '做一张/一段视觉草稿', '优化提示词和画面描述', '整理风格参考库', '复盘：哪个风格最像你'],
    '决策参谋官': ['选一个真实决策问题', '让 AI 整理已知信息', '让 AI 列出 3 个备选方案', '让 AI 分析风险和机会', '补充你的判断标准', '形成一页决策备忘录', '复盘：AI 哪个角度有启发'],
    'AI 斜杠探索家': ['列出你最想学的 5 个方向', '只选一个方向做 7 天实验', '定义一个小成果', '用 AI 完成第一版成果', '找人看一次反馈', '根据反馈调整方向', '复盘：继续、暂停还是换方向']
  }[type];

  if (!light) return base;
  return base.map(item => item.replace('完成一次真实任务', '完成一个很小的真实任务').replace('整理一个', '简单整理一个'));
}

function buildResultText() {
  const r = window.latestResult;
  if (!r) return '';
  return [
    `我的 AI 使用者人格是：${r.type} · ${r.stage}`,
    `辅助人格：${r.secondary || '暂不明显'}`,
    `人格关键词：${r.info.keywords.join('｜')}`,
    `当前状态：${r.info.state}`,
    `隐藏优势：${r.info.advantage}`,
    `容易卡住：${r.info.blocker}`,
    `一句话提醒：${r.info.quote}`
  ].join('\n');
}
