import { jsData } from "./js-data";

export interface Vocab {
  hanzi: string;
  pinyin: string;
  burmese: string;
  english: string;
}

export interface InterviewQuestion {
  id: number;
  category: string;
  question_hanzi: string;
  question_pinyin: string;
  question_burmese: string;
  answer_hanzi: string;
  answer_pinyin: string;
  answer_burmese: string;
  vocab: Vocab[];
}

export const categories = ["All", "HTML", "CSS", "JavaScript", "TypeScript", "React JS", "Next JS", "Git"] as const;

export const interviewQuestions: InterviewQuestion[] = [
  // HTML
  {
    id: 1,
    category: "HTML",
    question_hanzi: "什么是语义化HTML？为什么它很重要？",
    question_pinyin: "Shénme shì yǔyì huà HTML? Wèishénme tā hěn zhòngyào?",
    question_burmese: "Semantic HTML ဆိုတာဘာလဲ။ ဘာကြောင့် အရေးကြီးတာလဲ။",
    answer_hanzi: "语义化HTML是指使用有意义的标签来描述内容的结构。例如，使用header、nav、main、article、footer等标签，而不是只用div。它对SEO、可访问性和代码可读性都很重要。",
    answer_pinyin: "Yǔyì huà HTML shì zhǐ shǐyòng yǒu yìyì de biāoqiān lái miáoshù nèiróng de jiégòu. Lìrú, shǐyòng header, nav, main, article, footer děng biāoqiān, ér bùshì zhǐ yòng div. Tā duì SEO, kě fǎngwèn xìng hé dàimǎ kě dú xìng dōu hěn zhòngyào.",
    answer_burmese: "Semantic HTML ဆိုတာ အကြောင်းအရာရဲ့ ဖွဲ့စည်းပုံကို ဖော်ပြဖို့ အဓိပ္ပာယ်ရှိတဲ့ tag တွေကို အသုံးပြုခြင်းဖြစ်ပါတယ်။ ဥပမာ div တစ်ခုတည်းမသုံးဘဲ header, nav, main, article, footer စတဲ့ tag တွေကို သုံးပါတယ်။ SEO, accessibility နဲ့ code ဖတ်ရလွယ်ကူမှုအတွက် အရေးကြီးပါတယ်။",
    vocab: [
      { hanzi: "语义化", pinyin: "yǔyì huà", burmese: "အဓိပ္ပာယ်ဖွင့်ဆိုခြင်း", english: "semantic" },
      { hanzi: "标签", pinyin: "biāoqiān", burmese: "tag", english: "tag/label" },
      { hanzi: "结构", pinyin: "jiégòu", burmese: "ဖွဲ့စည်းပုံ", english: "structure" },
      { hanzi: "可访问性", pinyin: "kě fǎngwèn xìng", burmese: "အသုံးပြုနိုင်မှု", english: "accessibility" },
    ],
  },
 
  // CSS
  {
    id: 4,
    category: "CSS",
    question_hanzi: "请解释CSS盒模型。",
    question_pinyin: "Qǐng jiěshì CSS hé móxíng.",
    question_burmese: "CSS Box Model ကို ရှင်းပြပါ။",
    answer_hanzi: "CSS盒模型描述了元素在页面上占用的空间。它包括四个部分：内容区域、内边距(padding)、边框(border)和外边距(margin)。box-sizing: border-box可以让padding和border包含在元素的总宽度内。",
    answer_pinyin: "CSS hé móxíng miáoshùle yuánsù zài yèmiàn shàng zhànyòng de kōngjiān. Tā bāokuò sì gè bùfèn: nèiróng qūyù, nèi biānjù (padding), biānkuāng (border) hé wài biānjù (margin). box-sizing: border-box kěyǐ ràng padding hé border bāohán zài yuánsù de zǒng kuāndù nèi.",
    answer_burmese: "CSS Box Model က element တစ်ခုက page ပေါ်မှာ နေရာယူပုံကို ဖော်ပြပါတယ်။ content area, padding, border, margin ဆိုပြီး အပိုင်း ၄ ပိုင်း ပါဝင်ပါတယ်။ box-sizing: border-box က padding နဲ့ border ကို element ရဲ့ စုစုပေါင်း width ထဲမှာ ထည့်တွက်ပေးပါတယ်။",
    vocab: [
      { hanzi: "盒模型", pinyin: "hé móxíng", burmese: "Box Model", english: "box model" },
      { hanzi: "内边距", pinyin: "nèi biānjù", burmese: "အတွင်းအကွာအဝေး", english: "padding" },
      { hanzi: "外边距", pinyin: "wài biānjù", burmese: "အပြင်အကွာအဝေး", english: "margin" },
      { hanzi: "边框", pinyin: "biānkuāng", burmese: "ဘောင်", english: "border" },
    ],
  },

  // JavaScript   =======================================================================>
 ...jsData,

  // TypeScript
  {
    id: 10,
    category: "TypeScript",
    question_hanzi: "TypeScript中interface和type有什么区别？",
    question_pinyin: "TypeScript zhōng interface hé type yǒu shénme qūbié?",
    question_burmese: "TypeScript မှာ interface နဲ့ type ဘာကွာလဲ။",
    answer_hanzi: "interface可以被extends和implements，支持声明合并。type更灵活，可以定义联合类型、交叉类型和元组。interface适合定义对象形状，type适合定义复杂类型。两者在很多场景下可以互换使用。",
    answer_pinyin: "interface kěyǐ bèi extends hé implements, zhīchí shēngmíng hébìng. type gèng línghuó, kěyǐ dìngyì liánhé lèixíng, jiāochā lèixíng hé yuánzǔ. interface shìhé dìngyì duìxiàng xíngzhuàng, type shìhé dìngyì fùzá lèixíng.",
    answer_burmese: "interface ကို extends နဲ့ implements လုပ်နိုင်ပြီး declaration merging ကို support လုပ်ပါတယ်။ type က ပိုပြီး flexible ဖြစ်ပြီး union type, intersection type, tuple တွေ သတ်မှတ်နိုင်ပါတယ်။",
    vocab: [
      { hanzi: "接口", pinyin: "jiēkǒu", burmese: "interface", english: "interface" },
      { hanzi: "类型", pinyin: "lèixíng", burmese: "type", english: "type" },
      { hanzi: "联合", pinyin: "liánhé", burmese: "ပေါင်းစည်း", english: "union" },
      { hanzi: "灵活", pinyin: "línghuó", burmese: "ပြောင်းလွယ်", english: "flexible" },
    ],
  },

  // React JS
  {
    id: 13,
    category: "React JS",
    question_hanzi: "React中的虚拟DOM是什么？",
    question_pinyin: "React zhōng de xūnǐ DOM shì shénme?",
    question_burmese: "React ရဲ့ Virtual DOM ဆိုတာ ဘာလဲ။",
    answer_hanzi: "虚拟DOM是真实DOM的轻量级JavaScript表示。当状态改变时，React会创建一个新的虚拟DOM树，与旧树进行比较（diffing），然后只更新真实DOM中需要改变的部分。这使得UI更新更高效。",
    answer_pinyin: "Xūnǐ DOM shì zhēnshí DOM de qīngliàng jí JavaScript biǎoshì. Dāng zhuàngtài gǎibiàn shí, React huì chuàngjiàn yī gè xīn de xūnǐ DOM shù, yǔ jiù shù jìnxíng bǐjiào (diffing), ránhòu zhǐ gēngxīn zhēnshí DOM zhōng xūyào gǎibiàn de bùfèn.",
    answer_burmese: "Virtual DOM ဆိုတာ real DOM ရဲ့ lightweight JavaScript representation ဖြစ်ပါတယ်။ state ပြောင်းတဲ့အခါ React က virtual DOM tree အသစ်ဖန်တီးပြီး အဟောင်းနဲ့ ယှဉ်ပါတယ် (diffing)။ ပြီးတော့ ပြောင်းရမယ့် အပိုင်းကိုပဲ real DOM မှာ update လုပ်ပါတယ်။",
    vocab: [
      { hanzi: "虚拟", pinyin: "xūnǐ", burmese: "virtual", english: "virtual" },
      { hanzi: "状态", pinyin: "zhuàngtài", burmese: "state", english: "state" },
      { hanzi: "比较", pinyin: "bǐjiào", burmese: "နှိုင်းယှဉ်ခြင်း", english: "compare" },
      { hanzi: "更新", pinyin: "gēngxīn", burmese: "update", english: "update" },
    ],
  },
 
  // Next JS
  {
    id: 16,
    category: "Next JS",
    question_hanzi: "Next.js中的SSR和SSG有什么区别？",
    question_pinyin: "Next.js zhōng de SSR hé SSG yǒu shénme qūbié?",
    question_burmese: "Next.js မှာ SSR နဲ့ SSG ဘာကွာလဲ။",
    answer_hanzi: "SSR（服务器端渲染）在每次请求时生成页面。SSG（静态站点生成）在构建时生成页面。SSR适合数据经常变化的页面，SSG适合内容不常变化的页面。Next.js还支持ISR（增量静态再生成），结合了两者的优点。",
    answer_pinyin: "SSR (fúwùqì duān xuǎnrǎn) zài měi cì qǐngqiú shí shēngchéng yèmiàn. SSG (jìngtài zhàn diǎn shēngchéng) zài gòujiàn shí shēngchéng yèmiàn. SSR shìhé shùjù jīngcháng biànhuà de yèmiàn, SSG shìhé nèiróng bù cháng biànhuà de yèmiàn.",
    answer_burmese: "SSR (Server-Side Rendering) က request တိုင်းမှာ page ကို generate လုပ်ပါတယ်။ SSG (Static Site Generation) က build time မှာ page ကို generate လုပ်ပါတယ်။ SSR က data မကြာခဏ ပြောင်းတဲ့ page တွေအတွက် သင့်တော်ပြီး SSG က content မပြောင်းတဲ့ page တွေအတွက် သင့်တော်ပါတယ်။",
    vocab: [
      { hanzi: "服务器", pinyin: "fúwùqì", burmese: "server", english: "server" },
      { hanzi: "渲染", pinyin: "xuǎnrǎn", burmese: "render", english: "render" },
      { hanzi: "构建", pinyin: "gòujiàn", burmese: "build", english: "build" },
      { hanzi: "请求", pinyin: "qǐngqiú", burmese: "request", english: "request" },
    ],
  },
 
  // Git
  {
    id: 19,
    category: "Git",
    question_hanzi: "git merge和git rebase有什么区别？",
    question_pinyin: "git merge hé git rebase yǒu shénme qūbié?",
    question_burmese: "git merge နဲ့ git rebase ဘာကွာလဲ။",
    answer_hanzi: "git merge会创建一个新的合并提交，保留分支的完整历史。git rebase会把当前分支的提交移到目标分支的最新提交之后，创建线性历史。merge更安全，rebase让历史更整洁。不要对公共分支使用rebase。",
    answer_pinyin: "git merge huì chuàngjiàn yī gè xīn de hébìng tíjiāo, bǎoliú fēnzhī de wánzhěng lìshǐ. git rebase huì bǎ dāngqián fēnzhī de tíjiāo yí dào mùbiāo fēnzhī de zuìxīn tíjiāo zhīhòu, chuàngjiàn xiànxìng lìshǐ.",
    answer_burmese: "git merge က merge commit အသစ် ဖန်တီးပြီး branch ရဲ့ history ကို ပြည့်ပြည့်စုံစုံ ထိန်းသိမ်းပါတယ်။ git rebase က လက်ရှိ branch ရဲ့ commit တွေကို target branch ရဲ့ နောက်ဆုံး commit နောက်ကို ရွှေ့ပြီး linear history ဖန်တီးပါတယ်။",
    vocab: [
      { hanzi: "合并", pinyin: "hébìng", burmese: "ပေါင်းစည်းခြင်း", english: "merge" },
      { hanzi: "分支", pinyin: "fēnzhī", burmese: "branch", english: "branch" },
      { hanzi: "提交", pinyin: "tíjiāo", burmese: "commit", english: "commit" },
      { hanzi: "历史", pinyin: "lìshǐ", burmese: "သမိုင်း", english: "history" },
    ],
  },

];
