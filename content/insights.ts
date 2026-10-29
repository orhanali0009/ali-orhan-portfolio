export const categories = ['Data Science', 'Banking & Finance', 'AI', 'Business Analytics', 'Technology'] as const;
export type Category = typeof categories[number];
type Base = {slug:string;category:Category;title:string;summary:string;sections:{heading:string;body:string;references?:number[];table?:{headers:string[];rows:string[][]}}[];sources:{title:string;url:string}[]};
export type Insight = Base & ({status:'draft';publishedAt?:never}|{status:'published';publishedAt:string});
export const insights: Insight[] = [
{
  "slug": "following-the-risk-in-participation-banking",
  "category": "Banking & Finance",
  "title": "Following the Risk in Participation Banking",
  "summary": "How contracts, funding pools, and governance shape the economics of interest-free finance.",
  "status": "published",
  "publishedAt": "2026-10-29",
  "sections": [
    {
      "heading": "Following the transaction",
      "body": "How does a participation bank earn money without charging interest?\n\nThe question opens a much broader discussion about financial intermediation. A bank must mobilize savings, assess customers, finance economic activity, manage liquidity, and generate enough income to cover its costs. Participation banking performs these functions through a particular set of contractual and Shariah requirements.\n\nMy starting point is to follow the transaction: what creates the bank’s income, which obligations arise, and who bears the risk at each stage?"
    },
    {
      "heading": "A similar payment can arise from a different contract",
      "body": "Consider a simplified equipment purchase. A business needs a machine costing TRY 600,000 and agrees to pay TRY 720,000 after twelve months.\n\nA conventional loan could provide the purchase money in exchange for principal plus interest. A murabaha transaction instead involves the bank acquiring the machine and reselling it to the customer at a disclosed cost and agreed profit.\n\nTKBB’s explanation of participation financing describes this purchase-and-resale mechanism. The customer’s eventual payment may resemble a loan repayment, while the contractual basis is a deferred sale.\n\nAssuming a single payment at maturity and excluding taxes, fees, and other differences, both examples imply a 20% one-year financing return on the initial amount.\n\nThat calculation describes the cash flows. It does not establish contractual equivalence or determine Shariah compliance.\n\nA meaningful assessment must also examine whether the acquisition and resale actually occurred, how ownership and possession were established, and which responsibilities the bank assumed. TÜBİTAK’s overview places murabaha alongside leasing and partnership arrangements, illustrating why participation financing cannot be reduced to one universal contract.",
      "references": [
        0,
        1
      ],
      "table": {
        "headers": [
          "Illustrative transaction",
          "Initial financing amount or asset cost",
          "Payment after twelve months",
          "Gross financing income"
        ],
        "rows": [
          [
            "Conventional loan",
            "TRY 600,000",
            "TRY 720,000",
            "TRY 120,000"
          ],
          [
            "Murabaha sale",
            "TRY 600,000",
            "TRY 720,000",
            "TRY 120,000"
          ]
        ]
      }
    },
    {
      "heading": "Risk changes as a transaction progresses",
      "body": "The distinction becomes clearer when the transaction is viewed over time.\n\nDuring acquisition and before resale, ownership-related responsibilities matter. Following a valid murabaha sale, the bank holds a receivable. The customer’s subsequent business losses do not automatically reduce the agreed sale debt.\n\nThis makes it important to distinguish murabaha from a partnership that exposes the financier to the venture’s operating results.\n\nFor credit analysis, my approach would be to map the transaction in stages: acquisition, ownership or possession, resale, and collection. Each stage raises different questions about documentation, responsibility, and potential loss.\n\nThe TRY 120,000 difference in the example is also gross income. Funding costs, operating expenses, and credit losses still affect the bank’s net profitability."
    },
    {
      "heading": "Profit-sharing percentages need a denominator",
      "body": "The funding side introduces another distinction: a share of profit and a return on invested capital are different percentages.\n\nArticle 3 of Türkiye’s Banking Law defines a participation account through participation in the results of funds employed by the institution, without a predetermined return or a guarantee that the principal will be repaid unchanged. Special current accounts are a separate category and do not pay account holders a return.\n\nConsider a simplified profit-sharing pool with total capital of TRY 1,000,000, an account holder’s contribution of TRY 100,000, distributable pool profit of TRY 80,000, and an account holders’ contractual share of profit of 70%.\n\nAssuming the contribution remains invested throughout the same period, the illustrative allocation is:\n\nTRY 80,000 × 10% × 70% = TRY 5,600\n\nThe account holder’s return is therefore 5.6% for that period, before tax. The 70% figure describes the division of distributable profit.\n\nThis arithmetic is deliberately simplified; actual allocation also depends on account terms, timing, and pool accounting. Its analytical value is the distinction between an agreed allocation rule and an uncertain financial outcome.",
      "references": [
        2
      ]
    },
    {
      "heading": "Partnership finance creates an information problem",
      "body": "Equity-style financing requires the bank to understand the performance of the underlying business. That involves verifying earnings, monitoring decisions, and identifying whether a loss reflects commercial conditions or misconduct.\n\nThe IFSB’s 2019 working paper on risk sharing identifies monitoring costs, information asymmetry, regulatory capital treatment, and specialized staffing needs among the constraints on mudarabah and musharakah financing. It also examines governance concerns for unrestricted profit-sharing investment account holders.\n\nThese are exploratory findings from a historical cross-jurisdictional study, rather than a measurement of today’s Turkish market. They nevertheless identify a useful problem: allocating financial risk requires adequate information and mechanisms to protect the parties bearing it.\n\nFrom a business analytics perspective, this raises a practical research question: could better transaction data and more reliable reporting reduce the cost of monitoring partnership finance?\n\nThat would require testing. More data alone would not resolve contractual or governance problems.",
      "references": [
        3
      ]
    },
    {
      "heading": "Funding pools connect the contract to the balance sheet",
      "body": "TKBB’s September 2023 decision on multiple funding pools offers a concrete example of the operational challenge.\n\nThe request accompanying the decision described how returns from previously originated financing could lag changing market conditions, creating pressure on fund retention.\n\nThe decision permitted separate pools while requiring fairness among comparable account holders, transparency, proper information, and access to new pools for existing holders who meet the relevant criteria.\n\nMy interpretation is that pool design belongs within both asset-liability management and customer governance. It influences how financing income reaches account holders and how competing interests are handled.\n\nA pool structure can improve the organization of funding. It still needs transparent allocation rules and careful liquidity management.",
      "references": [
        4
      ]
    },
    {
      "heading": "Governance makes the distinction observable",
      "body": "TKBB’s 2019 principles decision set out a hierarchy for participation banking standards, referring first to its advisory decisions and standards, then to specified earlier decisions and AAOIFI standards where relevant guidance was absent.\n\nFor an analyst, the practical implication is to examine how those requirements become observable controls: transaction sequencing, acquisition evidence, contractual disclosures, and pool allocation records.\n\nThe framework I would carry into further study has three parts:\n\nTrace the contract. Locate the risk. Test the governance.\n\nTogether, they provide a more precise way to evaluate a participation banking product than comparing its quoted return with another bank’s rate.",
      "references": [
        5
      ]
    }
  ],
  "sources": [
    {
      "title": "TKBB — Frequently Asked Questions",
      "url": "https://tkbb.org.tr/kurumsal/sikca-sorulan-sorular"
    },
    {
      "title": "TÜBİTAK — Participation Banking",
      "url": "https://ansiklopedi.tubitak.gov.tr/ansiklopedi/katilim_bankaciligi"
    },
    {
      "title": "Banking Law No. 5411 — Article 3, original parliamentary text",
      "url": "https://www5.tbmm.gov.tr/tutanaklar/KANUNLAR_KARARLAR/kanuntbmmc090/kanuntbmmc090/kanuntbmmc09005411.pdf"
    },
    {
      "title": "IFSB — Working Paper 10: Risk Sharing in Islamic Banking (2019)",
      "url": "https://www.ifsb.org/wp-content/uploads/2023/10/WP-10_En.pdf"
    },
    {
      "title": "TKBB — Decision No. 72, 14 September 2023",
      "url": "https://tkbb.org.tr/merkezi-danisma-komitesi/kararlar/Kar_Zarar_Ortakligina_Dayanan_Katilma_Hesaplarina_Toplanan_Fonlarin_Birden_Fazla_Havuzda_Yonetilmesi"
    },
    {
      "title": "TKBB — Decision No. 8, 28 February 2019",
      "url": "https://tkbb.org.tr/merkezi-danisma-komitesi/kararlar/Katilim_Bankalarinin_Faaliyetlerinde_Esas_Alacagi_Ilkeler"
    }
  ]
},
{slug:'customer-lifetime-value-in-banking',category:'Banking & Finance',title:'Why customer lifetime value matters in banking',summary:'An outline exploring retention, responsible segmentation and long-term customer relationships.',status:'draft',sections:[{heading:'The question',body:'How could a bank assess a customer relationship beyond the next product sale? This planned essay will examine the assumptions behind lifetime value.'},{heading:'Planned analysis',body:'The full article will distinguish revenue from contribution margin and consider retention, acquisition costs and uncertainty. A worked example and supporting references still need to be added.'}],sources:[]},
{slug:'models-to-business-impact',category:'Data Science',title:'From models to business impact',summary:'A working outline on connecting model evaluation to decisions that matter.',status:'draft',sections:[{heading:'The question',body:'What must happen between a model score and a useful decision? This outline proposes starting with the decision, then defining an evaluation plan.'},{heading:'Planned analysis',body:'The completed article will compare a baseline and a candidate model, examine data leakage and explore decision thresholds. No experiment has been performed for this draft.'}],sources:[{title:'scikit-learn — Model selection and evaluation (planned reading)',url:'https://scikit-learn.org/stable/model_selection.html'}]},
{slug:'evaluating-ai-beyond-the-demo',category:'AI',title:'Evaluating AI beyond the demo',summary:'Questions for a future research note about reliable evaluation and useful failure analysis.',status:'draft',sections:[{heading:'Research direction',body:'This planned note will ask how an AI prototype should be evaluated before it becomes part of a workflow. The research and examples have not yet been completed.'},{heading:'Questions to investigate',body:'Which tasks belong in the evaluation set? What constitutes an unacceptable error? How should human review and operating costs enter the comparison? References and findings will be added after research.'}],sources:[]},
{slug:'metrics-that-inform-decisions',category:'Business Analytics',title:'Metrics that inform decisions',summary:'An editorial outline on choosing measures that lead to a concrete next step.',status:'draft',sections:[{heading:'The question',body:'Which decision should change when a metric changes? This outline will explore the connection between a business question, a measurement and an action.'},{heading:'Planned example',body:'A future worked example will define a metric, document its denominator and observation period, and compare it with a counter-metric. No case study or result is being claimed here.'}],sources:[]},
{slug:'building-a-thoughtful-web-presence',category:'Technology',title:'Building a thoughtful web presence',summary:'A planned note on readable interfaces, clear navigation and maintainable content.',status:'draft',sections:[{heading:'Editorial direction',body:'This draft will examine the choices behind a small personal website: content structure, readable typography, accessibility and a repeatable publishing process.'},{heading:'To develop',body:'The final note will include a reviewed implementation example and a discussion of trade-offs. The linked documentation is a starting point for research, not evidence of a completed study.'}],sources:[{title:'Next.js — Metadata documentation (planned reading)',url:'https://nextjs.org/docs/app/api-reference/functions/generate-metadata'}]}
];
export function readingMinutes(e:Insight){return Math.max(1,Math.ceil([e.title,e.summary,...e.sections.flatMap(s=>[s.heading,s.body,...(s.table?[...s.table.headers,...s.table.rows.flat()]:[])])].join(' ').split(/\s+/).length/200));}
export function dateLabel(e:Insight){return e.status==='draft'?'Not published':new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(e.publishedAt));}
