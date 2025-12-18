const questions = [
  // Unit 5: Political Participation
  {
    unit: "Unit 5",
    topic: "Political Participation",
    question:
      "What is the main purpose of political participation in a democracy?",
    options: [
      "To limit government power",
      "To allow citizens to influence government decisions",
      "To increase the role of the judiciary",
      "To reduce political conflict",
    ],
    correct: 1,
    explanation:
      "Political participation allows citizens to influence public policy and government leadership.",
  },
  {
    unit: "Unit 5",
    topic: "Voting Behavior",
    question:
      "Which group has historically had the lowest voter turnout in U.S. elections?",
    options: [
      "College-educated voters",
      "Senior citizens",
      "Young adults",
      "Homeowners",
    ],
    correct: 2,
    explanation:
      "Young adults consistently have lower voter turnout compared to older age groups.",
  },
  {
    unit: "Unit 5",
    topic: "Elections",
    question: "What is the primary function of primary elections?",
    options: [
      "To elect members of Congress",
      "To choose party nominees for the general election",
      "To amend the Constitution",
      "To allocate electoral votes",
    ],
    correct: 1,
    explanation:
      "Primary elections determine each political party’s nominee for the general election.",
  },
  {
    unit: "Unit 5",
    topic: "Elections",
    question:
      "What does a winner-take-all system mean in presidential elections?",
    options: [
      "The popular vote winner becomes president",
      "The candidate with the most votes nationwide wins all electoral votes",
      "The candidate who wins a state wins all of that state’s electoral votes",
      "Congress chooses the president",
    ],
    correct: 2,
    explanation:
      "In most states, the candidate who wins the popular vote receives all of the state’s electoral votes.",
  },
  {
    unit: "Unit 5",
    topic: "Campaigns",
    question:
      "Which strategy is most commonly used by candidates during general elections?",
    options: [
      "Appealing only to party loyalists",
      "Appealing to moderate and independent voters",
      "Avoiding media coverage",
      "Ignoring swing states",
    ],
    correct: 1,
    explanation:
      "Candidates usually move toward the center to attract independent and moderate voters.",
  },
  {
    unit: "Unit 5",
    topic: "Campaign Finance",
    question: "What is the main role of Super PACs in elections?",
    options: [
      "Directly coordinating with candidates",
      "Donating unlimited funds directly to candidates",
      "Raising and spending unlimited money independently",
      "Managing voter registration",
    ],
    correct: 2,
    explanation:
      "Super PACs can raise and spend unlimited funds but cannot coordinate directly with campaigns.",
  },
  {
    unit: "Unit 5",
    topic: "Campaign Finance",
    question:
      "Which Supreme Court case significantly increased the role of money in politics?",
    options: [
      "McCulloch v. Maryland",
      "Brown v. Board of Education",
      "Citizens United v. FEC",
      "Marbury v. Madison",
    ],
    correct: 2,
    explanation:
      "Citizens United v. FEC allowed unlimited independent political expenditures by corporations and unions.",
  },
  {
    unit: "Unit 5",
    topic: "Media and Elections",
    question: "What is the primary impact of media on political campaigns?",
    options: [
      "It replaces political parties",
      "It limits voter choice",
      "It shapes public perception of candidates",
      "It eliminates campaign costs",
    ],
    correct: 2,
    explanation:
      "Media coverage strongly influences how voters perceive candidates and political issues.",
  },
  {
    unit: "Unit 5",
    topic: "Media and Elections",
    question: "What is selective exposure?",
    options: [
      "When media outlets limit political coverage",
      "When voters seek information that reinforces their beliefs",
      "When candidates control all media messaging",
      "When the government regulates media content",
    ],
    correct: 1,
    explanation:
      "Selective exposure occurs when individuals consume media that aligns with their existing views.",
  },
  {
    unit: "Unit 5",
    topic: "Interest Groups",
    question: "What is the primary goal of interest groups?",
    options: [
      "To elect judges",
      "To influence public policy",
      "To replace political parties",
      "To run government agencies",
    ],
    correct: 1,
    explanation:
      "Interest groups aim to influence policy decisions in favor of their members or causes.",
  },
  {
    unit: "Unit 5",
    topic: "Interest Groups",
    question:
      "Which tactic is most commonly used by interest groups to influence lawmakers?",
    options: ["Judicial review", "Lobbying", "Redistricting", "Filibustering"],
    correct: 1,
    explanation:
      "Lobbying involves direct interaction with lawmakers to influence legislation.",
  },
  {
    unit: "Unit 5",
    topic: "Political Parties",
    question: "What is a major function of political parties?",
    options: [
      "Enforcing court rulings",
      "Registering voters",
      "Organizing candidates and elections",
      "Writing laws independently",
    ],
    correct: 2,
    explanation:
      "Political parties organize candidates, mobilize voters, and help structure elections.",
  },
  {
    unit: "Unit 5",
    topic: "Political Parties",
    question: "Which trend has weakened party loyalty among voters?",
    options: [
      "Increased voter registration laws",
      "Growth of independent voters",
      "Stronger party platforms",
      "Expansion of the Electoral College",
    ],
    correct: 1,
    explanation:
      "More voters identify as independents, weakening traditional party loyalty.",
  },
  {
    unit: "Unit 5",
    topic: "Voter Turnout",
    question: "Which factor is most likely to increase voter turnout?",
    options: [
      "More frequent elections",
      "Stricter voter ID laws",
      "Higher political efficacy",
      "Longer ballots",
    ],
    correct: 2,
    explanation:
      "When citizens believe their vote matters, turnout tends to increase.",
  },
  {
    unit: "Unit 5",
    topic: "Voter Turnout",
    question:
      "Why is voter turnout typically higher in presidential elections than midterms?",
    options: [
      "Presidential elections receive more media attention",
      "Midterms are held less frequently",
      "Only certain voters can vote in midterms",
      "Presidents control Congress",
    ],
    correct: 0,
    explanation:
      "Presidential elections generate more attention and interest, leading to higher turnout.",
  },
  {
    unit: "Unit 5",
    topic: "Civil Rights and Voting",
    question: "Which amendment prohibited racial discrimination in voting?",
    options: [
      "13th Amendment",
      "14th Amendment",
      "15th Amendment",
      "19th Amendment",
    ],
    correct: 2,
    explanation:
      "The 15th Amendment prohibits denying the right to vote based on race.",
  },
  {
    unit: "Unit 5",
    topic: "Civil Rights and Voting",
    question: "What was a major effect of the Voting Rights Act of 1965?",
    options: [
      "It eliminated political parties",
      "It removed barriers like literacy tests",
      "It established voter ID laws",
      "It created the Electoral College",
    ],
    correct: 1,
    explanation:
      "The Voting Rights Act banned discriminatory practices such as literacy tests.",
  },
  {
    unit: "Unit 5",
    topic: "Political Socialization",
    question:
      "Which agent of political socialization has the strongest influence on young children?",
    options: ["Media", "Schools", "Family", "Interest groups"],
    correct: 2,
    explanation:
      "Family is the most influential agent of political socialization during early childhood.",
  },
  {
    unit: "Unit 5",
    topic: "Political Socialization",
    question:
      "Political socialization refers to the process by which individuals:",
    options: [
      "Register to vote",
      "Develop political beliefs and values",
      "Run for public office",
      "Join political parties",
    ],
    correct: 1,
    explanation:
      "Political socialization is how people form political attitudes and beliefs.",
  },
  {
    unit: "Unit 5",
    topic: "Campaign Finance & Courts",
    question:
      "How did the Supreme Court’s decision in Citizens United v. FEC (2010) affect political participation?",
    options: [
      "It allowed Congress to limit independent expenditures by corporations",
      "It expanded the ability of corporations and unions to spend money independently in elections",
      "It banned Super PACs from operating during elections",
      "It required full public financing of federal campaigns",
    ],
    correct: 1,
    explanation:
      "Citizens United v. FEC ruled that independent political expenditures are protected speech under the First Amendment.",
  },
  {
    unit: "Unit 5",
    topic: "Campaign Finance & Courts",
    question:
      "Which principle from Buckley v. Valeo (1976) continues to shape federal campaign finance laws?",
    options: [
      "Limits on campaign spending violate the Equal Protection Clause",
      "Money is considered a form of political speech",
      "Political parties must be publicly funded",
      "Corporations have no First Amendment rights",
    ],
    correct: 1,
    explanation:
      "Buckley v. Valeo established that spending money to influence elections is a form of protected political speech.",
  },
  {
    unit: "Unit 5",
    topic: "Voting Rights & Courts",
    question:
      "Which consequence resulted from the Supreme Court’s ruling in Shelby County v. Holder (2013)?",
    options: [
      "States were prohibited from changing voting laws",
      "The Voting Rights Act was fully repealed",
      "Preclearance requirements for certain states were weakened",
      "Literacy tests were reinstated nationwide",
    ],
    correct: 2,
    explanation:
      "Shelby County v. Holder invalidated the coverage formula, reducing federal oversight of state election laws.",
  },
  {
    unit: "Unit 5",
    topic: "Voting Rights & Courts",
    question:
      "A state implements strict voter ID laws shortly after Shelby County v. Holder. Supporters argue this reflects which principle?",
    options: [
      "Judicial supremacy",
      "Federalism and state control over elections",
      "Selective incorporation",
      "Congressional oversight",
    ],
    correct: 1,
    explanation:
      "Supporters argue states have authority to regulate elections under federalism.",
  },
  {
    unit: "Unit 5",
    topic: "Elections & Courts",
    question:
      "Which issue was central to the Supreme Court’s decision in Bush v. Gore (2000)?",
    options: [
      "Campaign finance limits",
      "The Equal Protection Clause in vote recount procedures",
      "Voter registration requirements",
      "Electoral College abolition",
    ],
    correct: 1,
    explanation:
      "The Court ruled that differing recount standards violated the Equal Protection Clause.",
  },
  {
    unit: "Unit 5",
    topic: "Elections & Courts",
    question:
      "Why is Bush v. Gore (2000) often described as a limited precedent?",
    options: [
      "It was overturned by a later case",
      "The Court explicitly stated it should not be widely applied",
      "It applied only to congressional elections",
      "It eliminated judicial review",
    ],
    correct: 1,
    explanation:
      "The Court stated the decision was limited to the specific circumstances of the case.",
  },
  {
    unit: "Unit 5",
    topic: "Political Parties & Courts",
    question:
      "Which Supreme Court decision protects political parties’ right to limit participation in their primaries?",
    options: [
      "Baker v. Carr",
      "California Democratic Party v. Jones",
      "McCulloch v. Maryland",
      "Shaw v. Reno",
    ],
    correct: 1,
    explanation:
      "California Democratic Party v. Jones ruled that parties have a First Amendment right of association.",
  },
  {
    unit: "Unit 5",
    topic: "Political Participation & Courts",
    question:
      "In Tinker v. Des Moines (1969), the Supreme Court most directly protected which form of political participation?",
    options: [
      "Campaign donations",
      "Symbolic speech",
      "Voting access",
      "Lobbying",
    ],
    correct: 1,
    explanation:
      "Tinker protected students’ right to symbolic political expression under the First Amendment.",
  },
  {
    unit: "Unit 5",
    topic: "Political Participation & Courts",
    question:
      "Which case best illustrates the tension between free speech and fair elections?",
    options: [
      "Citizens United v. FEC",
      "Gideon v. Wainwright",
      "Engel v. Vitale",
      "Roe v. Wade",
    ],
    correct: 0,
    explanation:
      "Citizens United highlights the debate between free speech rights and concerns over election fairness.",
  },
  {
    unit: "Unit 5",
    topic: "Voting Rights & Courts",
    question:
      "Which Supreme Court case upheld the constitutionality of literacy tests before the Voting Rights Act?",
    options: [
      "Giles v. Harris",
      "South Carolina v. Katzenbach",
      "Harper v. Virginia Board of Elections",
      "Reynolds v. Sims",
    ],
    correct: 0,
    explanation:
      "Giles v. Harris upheld state literacy tests prior to later civil rights reforms.",
  },
  {
    unit: "Unit 5",
    topic: "Voting Rights & Courts",
    question:
      "Harper v. Virginia Board of Elections (1966) strengthened political participation by:",
    options: [
      "Requiring federal oversight of elections",
      "Prohibiting poll taxes in state elections",
      "Mandating same-day voter registration",
      "Lowering the voting age to 18",
    ],
    correct: 1,
    explanation:
      "Harper ruled that poll taxes violated the Equal Protection Clause.",
  },
  {
    unit: "Unit 5",
    topic: "Redistricting & Participation",
    question: "How did Baker v. Carr (1962) affect political participation?",
    options: [
      "It limited campaign spending",
      "It made legislative apportionment justiciable",
      "It expanded presidential power",
      "It eliminated partisan gerrymandering",
    ],
    correct: 1,
    explanation:
      "Baker v. Carr allowed federal courts to hear redistricting cases, affecting representation.",
  },
  {
    unit: "Unit 5",
    topic: "Redistricting & Participation",
    question:
      "The principle established in Reynolds v. Sims (1964) most directly strengthened which democratic ideal?",
    options: [
      "Elite rule",
      "Judicial restraint",
      "One person, one vote",
      "Pluralism",
    ],
    correct: 2,
    explanation:
      "Reynolds v. Sims required legislative districts to have roughly equal populations.",
  },
];
