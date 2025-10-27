const questions = [
  // Foundations of Democracy (20 Questions)
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which Enlightenment thinker argued that government's legitimacy comes from the consent of the governed?",
    options: ["Thomas Hobbes", "John Locke", "Montesquieu", "Rousseau"],
    correct: 1,
    explanation: "John Locke argued that governments exist to protect natural rights and derive power from consent of the governed."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "In a representative democracy, who makes policy decisions?",
    options: ["Citizens directly", "Elected officials", "The judiciary", "Bureaucrats"],
    correct: 1,
    explanation: "Elected representatives make decisions on behalf of citizens in a representative democracy."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which document first established a government with limited powers in the US?",
    options: ["Declaration of Independence", "Articles of Confederation", "US Constitution", "Federalist 10"],
    correct: 1,
    explanation: "The Articles of Confederation created a weak central government with limited authority."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which form of democracy emphasizes citizen participation in decision-making?",
    options: ["Pluralist democracy", "Participatory democracy", "Elite democracy", "Direct democracy"],
    correct: 1,
    explanation: "Participatory democracy stresses direct citizen involvement in politics."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "A pluralist democracy is distinguished by:",
    options: ["Direct citizen voting on all issues", "Competition among interest groups", "Centralized power in one branch", "Minimal citizen input"],
    correct: 1,
    explanation: "Pluralist democracy relies on multiple organized groups competing to influence policy."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which principle ensures government derives authority from the people?",
    options: ["Popular sovereignty", "Federalism", "Judicial review", "Separation of powers"],
    correct: 0,
    explanation: "Popular sovereignty means government authority comes from the people."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Elite democracy emphasizes:",
    options: ["Direct citizen control", "Influence of interest groups", "Decisions made by a small, educated elite", "Majority rule without restrictions"],
    correct: 2,
    explanation: "Elite democracy holds that a small group of educated leaders make policy decisions."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which document influenced the US Constitution with the idea of separation of powers?",
    options: ["Magna Carta", "English Bill of Rights", "Montesquieu’s writings", "Federalist 10"],
    correct: 2,
    explanation: "Montesquieu’s writings advocated the separation of powers among branches of government."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "The concept of 'natural rights' refers to:",
    options: ["Rights granted by government", "Rights inherent to all humans", "Rights of only citizens", "Rights limited to property ownership"],
    correct: 1,
    explanation: "Natural rights are inherent to all humans, such as life, liberty, and property."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "The Declaration of Independence primarily serves to:",
    options: ["Outline the new Constitution", "Justify separation from Britain", "Establish the Bill of Rights", "Define state governments"],
    correct: 1,
    explanation: "It justified separation from Britain by explaining natural rights violations."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which system allows citizens to vote directly on laws and policies?",
    options: ["Representative democracy", "Participatory democracy", "Elite democracy", "Federalism"],
    correct: 1,
    explanation: "Participatory democracy emphasizes direct citizen voting on laws."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "What is the primary goal of a constitutional democracy?",
    options: ["Unlimited governmental power", "Protection of individual rights", "Absolute monarchy", "Single-party rule"],
    correct: 1,
    explanation: "Constitutional democracies aim to protect individual liberties within the framework of law."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "What is the term for a political system where multiple groups compete for influence?",
    options: ["Pluralism", "Elite theory", "Direct democracy", "Federalism"],
    correct: 0,
    explanation: "Pluralism is a system in which multiple organized groups compete for policy influence."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which principle limits government by law and ensures accountability?",
    options: ["Judicial review", "Rule of law", "Federalism", "Popular sovereignty"],
    correct: 1,
    explanation: "Rule of law means no one is above the law, ensuring government accountability."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "The social contract theory suggests that:",
    options: ["Citizens surrender some freedoms for government protection", "Government is divinely ordained", "Only elites should govern", "Laws do not need citizen approval"],
    correct: 0,
    explanation: "The social contract implies citizens consent to be governed in exchange for protection of rights."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which system prioritizes direct citizen influence over decisions?",
    options: ["Elite democracy", "Participatory democracy", "Pluralist democracy", "Monarchy"],
    correct: 1,
    explanation: "Participatory democracy emphasizes direct citizen involvement."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "What was a major criticism of direct democracy in early America?",
    options: ["It allowed elite rule", "It was impractical for a large population", "It ignored citizen participation", "It centralized power"],
    correct: 1,
    explanation: "Direct democracy was considered impractical for the large and diverse population of the U.S."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which type of democracy emphasizes policy influence through organized groups rather than direct citizen voting?",
    options: ["Participatory democracy", "Elite democracy", "Pluralist democracy", "Autocracy"],
    correct: 2,
    explanation: "Pluralist democracy relies on interest groups to influence government policy."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "The Declaration of Independence asserts that governments exist to:",
    options: ["Accumulate wealth", "Protect natural rights", "Centralize power", "Control state governments"],
    correct: 1,
    explanation: "Governments exist to protect citizens' natural rights."
  },
  {
    unit: "Unit 1",
    topic: "Foundations of Democracy",
    question: "Which concept is central to legitimacy in American democracy?",
    options: ["Divine right", "Consent of the governed", "Elite dominance", "Monarchic authority"],
    correct: 1,
    explanation: "Consent of the governed is key to a government's legitimacy in democracy."
  },

  // Constitutional Principles (20 Questions)
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Checks and balances prevent:",
    options: ["Judicial review", "Any branch from becoming too powerful", "Federalism", "Popular sovereignty"],
    correct: 1,
    explanation: "Checks and balances distribute power so no single branch dominates."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Separation of powers divides government into:",
    options: ["Federal and state governments", "Legislative, executive, and judicial branches", "Elected and appointed officials", "Citizens and elites"],
    correct: 1,
    explanation: "Separation of powers creates three branches with distinct functions."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Judicial review allows courts to:",
    options: ["Override the executive", "Declare laws unconstitutional", "Make new laws", "Enforce state constitutions"],
    correct: 1,
    explanation: "Courts can declare laws unconstitutional, ensuring checks on legislative power."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Federalism divides power between:",
    options: ["Legislature and executive", "National and state governments", "President and Congress", "Judiciary and Congress"],
    correct: 1,
    explanation: "Federalism divides authority between state and national governments."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Popular sovereignty means:",
    options: ["Government rules without consent", "Government authority comes from the people", "Citizens obey laws blindly", "Judges control the government"],
    correct: 1,
    explanation: "Popular sovereignty ensures that ultimate power rests with the people."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Which principle prevents any branch from dominating others?",
    options: ["Separation of powers", "Federalism", "Checks and balances", "Judicial review"],
    correct: 2,
    explanation: "Checks and balances allow each branch to limit the power of the others."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "The Constitution establishes a system of government with:",
    options: ["Absolute monarchy", "Limited government", "No rules", "State supremacy over federal government"],
    correct: 1,
    explanation: "Limited government ensures that governmental powers are restricted by law."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Which principle divides power between the national and state governments?",
    options: ["Separation of powers", "Federalism", "Checks and balances", "Popular sovereignty"],
    correct: 1,
    explanation: "Federalism creates shared power between levels of government."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "The idea of a government accountable to the people reflects:",
    options: ["Popular sovereignty", "Judicial review", "Federalism", "Separation of powers"],
    correct: 0,
    explanation: "Government accountability is rooted in popular sovereignty."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Checks and balances are most evident when:",
    options: ["The president vetoes a law", "Citizens vote in an election", "States pass local laws", "Judges hear cases in state court"],
    correct: 0,
    explanation: "The presidential veto is an example of the executive checking legislative power."
  },
  // --- Added Trickier Questions ---
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Which of these powers is explicitly denied to Congress?",
    options: ["Coin money", "Declare war", "Grant titles of nobility", "Regulate commerce"],
    correct: 2,
    explanation: "The Constitution forbids Congress from granting titles of nobility."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "The Elastic Clause is also known as the:",
    options: ["Necessary and Proper Clause", "Supremacy Clause", "Commerce Clause", "Full Faith and Credit Clause"],
    correct: 0,
    explanation: "The Elastic Clause allows Congress to make laws necessary to carry out its enumerated powers."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Which scenario demonstrates federalism in action?",
    options: ["A state legalizes marijuana despite federal law", "The president vetoes a bill", "Congress declares war", "Supreme Court reviews a law"],
    correct: 0,
    explanation: "Federalism allows states to exercise powers independent of the federal government."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "Which principle is most directly challenged if a law violates the Bill of Rights?",
    options: ["Federalism", "Judicial review", "Checks and balances", "Popular sovereignty"],
    correct: 1,
    explanation: "Judicial review can declare laws unconstitutional, protecting individual rights."
  },
  {
    unit: "Unit 1",
    topic: "Constitutional Principles",
    question: "If Congress passes a law and the president vetoes it, which principle is demonstrated?",
    options: ["Separation of powers", "Federalism", "Judicial review", "Popular sovereignty"],
    correct: 0,
    explanation: "The veto shows separation of powers and the checks and balances system."
  },
  // Federalism (20 Questions)
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which clause allows Congress to stretch its powers beyond those listed in the Constitution?",
    options: ["Supremacy Clause", "Necessary and Proper Clause", "Commerce Clause", "Full Faith and Credit Clause"],
    correct: 1,
    explanation: "The Necessary and Proper Clause allows Congress to pass laws necessary to execute its enumerated powers."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Dual federalism is often described as a 'layer cake' because:",
    options: ["Federal and state governments share powers", "Powers are separate with minimal overlap", "Federal government dominates", "States dominate"],
    correct: 1,
    explanation: "Dual federalism means clear separation of powers between federal and state governments."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which clause establishes that federal law is supreme over state law?",
    options: ["Supremacy Clause", "Commerce Clause", "Necessary and Proper Clause", "Full Faith and Credit Clause"],
    correct: 0,
    explanation: "The Supremacy Clause ensures that federal law takes precedence over conflicting state laws."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "What is the term for powers held only by the state governments?",
    options: ["Concurrent powers", "Reserved powers", "Enumerated powers", "Implied powers"],
    correct: 1,
    explanation: "Reserved powers are powers specifically left to the states by the Constitution."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Concurrent powers are:",
    options: ["Held only by the federal government", "Shared by federal and state governments", "Reserved for the president", "Granted to the judiciary"],
    correct: 1,
    explanation: "Concurrent powers can be exercised by both federal and state governments."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which clause requires states to recognize each other's public acts and judicial decisions?",
    options: ["Full Faith and Credit Clause", "Commerce Clause", "Supremacy Clause", "Necessary and Proper Clause"],
    correct: 0,
    explanation: "The Full Faith and Credit Clause ensures states respect laws and court rulings from other states."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which type of federalism is often called 'marble cake' federalism?",
    options: ["Dual federalism", "Cooperative federalism", "Competitive federalism", "Layered federalism"],
    correct: 1,
    explanation: "Cooperative federalism describes a mix of state and federal powers with shared responsibilities."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "What is an example of federal government power under the Commerce Clause?",
    options: ["Regulating interstate trade", "Education policy", "Local zoning laws", "Conducting elections"],
    correct: 0,
    explanation: "The Commerce Clause gives Congress power to regulate trade between states."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which scenario demonstrates federalism in action?",
    options: ["A state legalizes marijuana despite federal law", "The president vetoes a bill", "Congress declares war", "Supreme Court reviews a law"],
    correct: 0,
    explanation: "Federalism allows states to exercise powers independently of the federal government."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Block grants give states:",
    options: ["No money from the federal government", "Funds with few restrictions", "Funds with strict usage rules", "Exclusive federal oversight"],
    correct: 1,
    explanation: "Block grants provide states with federal funds for general purposes with flexibility in spending."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Categorical grants differ from block grants because they:",
    options: ["Require the money to be spent for a specific purpose", "Provide more flexibility to states", "Are only given to local governments", "Cannot be challenged by courts"],
    correct: 0,
    explanation: "Categorical grants are provided by the federal government for narrowly defined purposes."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which power is reserved for the federal government only?",
    options: ["Coining money", "Education", "Issuing licenses", "Local law enforcement"],
    correct: 0,
    explanation: "Coining money is an enumerated power reserved exclusively for the federal government."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "States refusing to enforce a federal law is an example of:",
    options: ["Nullification", "Judicial review", "Implied powers", "Concurrent powers"],
    correct: 0,
    explanation: "Nullification occurs when a state declares a federal law invalid within its borders."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which type of federalism emphasizes a strong federal government dominating states?",
    options: ["Dual federalism", "Cooperative federalism", "Centralized federalism", "Competitive federalism"],
    correct: 2,
    explanation: "Centralized federalism increases federal control over state governments."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "The Necessary and Proper Clause is also called the:",
    options: ["Elastic Clause", "Supremacy Clause", "Commerce Clause", "Privileges and Immunities Clause"],
    correct: 0,
    explanation: "The Elastic Clause gives Congress flexibility to enact laws required to execute its enumerated powers."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which Supreme Court case expanded federal power through the Commerce Clause?",
    options: ["McCulloch v. Maryland", "Gibbons v. Ogden", "Marbury v. Madison", "Brown v. Board of Education"],
    correct: 1,
    explanation: "Gibbons v. Ogden broadened Congress’s power to regulate interstate commerce."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which concept is demonstrated when federal and state governments share responsibility for funding and administering programs?",
    options: ["Dual federalism", "Cooperative federalism", "Centralized federalism", "Layered federalism"],
    correct: 1,
    explanation: "Cooperative federalism is when federal and state governments work together on policies."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Which of these is a state responsibility?",
    options: ["Issuing passports", "Maintaining public schools", "Printing money", "Declaring war"],
    correct: 1,
    explanation: "Education is primarily a state responsibility under the U.S. federal system."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "When federal law conflicts with state law, which is supreme?",
    options: ["State law", "Federal law", "Local law", "Both have equal power"],
    correct: 1,
    explanation: "The Supremacy Clause ensures federal law overrides conflicting state law."
  },
  {
    unit: "Unit 1",
    topic: "Federalism",
    question: "Devolution refers to:",
    options: ["Increasing state power relative to federal government", "Expanding federal authority", "A system without checks and balances", "Eliminating state governments"],
    correct: 0,
    explanation: "Devolution is the transfer of certain powers from the federal government to the states."
  },
   // Challenges of the Articles of Confederation (10 Questions)
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "Under the Articles of Confederation, which branch of government was essentially non-existent?",
    options: ["Legislative", "Executive", "Judicial", "State"],
    correct: 1,
    explanation: "The Articles lacked a strong executive branch, limiting centralized leadership."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "What was a major financial weakness of the Articles of Confederation?",
    options: ["States could not tax citizens directly", "Congress could tax states heavily", "The federal government could print unlimited money", "States had no power to borrow money"],
    correct: 0,
    explanation: "Under the Articles, the federal government could not directly tax citizens and relied on state contributions."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "Which problem was caused by the federal government’s inability to regulate commerce under the Articles?",
    options: ["States imposing trade barriers on each other", "Rapid industrial growth", "Strong national military", "Unified foreign policy"],
    correct: 0,
    explanation: "Without federal authority, states often taxed or restricted trade with one another."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "What event highlighted the weaknesses of the Articles of Confederation by showing a lack of federal enforcement?",
    options: ["Shays’ Rebellion", "Whiskey Rebellion", "French Revolution", "Boston Tea Party"],
    correct: 0,
    explanation: "Shays’ Rebellion showed that the federal government could not maintain public order or fund a national army."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "Why was amending the Articles of Confederation nearly impossible?",
    options: ["All 13 states had to agree", "Congress could unilaterally amend it", "Only the president could approve amendments", "Judicial review controlled amendments"],
    correct: 0,
    explanation: "Amendments required unanimous approval from all 13 states, making changes extremely difficult."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "Which of these powers did Congress have under the Articles of Confederation?",
    options: ["Declare war and make treaties", "Enforce laws directly on citizens", "Impose taxes on individuals", "Regulate interstate commerce"],
    correct: 0,
    explanation: "Congress could declare war and make treaties but lacked power to enforce laws or collect taxes."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "What was a major diplomatic weakness under the Articles?",
    options: ["States negotiated independently with foreign powers", "The president handled all foreign affairs", "Congress had a strong military to back diplomacy", "The judiciary enforced international treaties"],
    correct: 0,
    explanation: "States often negotiated treaties independently, weakening national unity and credibility abroad."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "How did the Articles of Confederation address the military?",
    options: ["Relied on state militias", "Established a strong national army", "Allowed the president to conscript soldiers", "Created a federal navy only"],
    correct: 0,
    explanation: "The federal government had no authority to maintain a standing army and relied on state militias."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "Which principle limited the power of the central government under the Articles?",
    options: ["State sovereignty", "Federal supremacy", "Separation of powers", "Judicial review"],
    correct: 0,
    explanation: "The Articles emphasized state sovereignty, leaving the federal government weak."
  },
  {
    unit: "Unit 1",
    topic: "Articles of Confederation",
    question: "Which of these was a direct consequence of the weaknesses of the Articles of Confederation?",
    options: ["Calls for a stronger federal government", "Expansion of the executive branch", "Ratification of the Bill of Rights", "Creation of the electoral college"],
    correct: 0,
    explanation: "The weaknesses of the Articles led to the Constitutional Convention to create a stronger federal government."
  },

  // Ratification of the U.S. Constitution (10 Questions)
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "What was the main concern of the Anti-Federalists regarding the new Constitution?",
    options: ["It gave too much power to the states", "It lacked a Bill of Rights", "It weakened the federal government", "It abolished elections"],
    correct: 1,
    explanation: "Anti-Federalists opposed the Constitution because it lacked explicit protections for individual rights."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Which collection of essays supported ratification of the Constitution?",
    options: ["Federalist Papers", "Anti-Federalist Papers", "Common Sense", "The Declaration of Independence"],
    correct: 0,
    explanation: "The Federalist Papers, written by Hamilton, Madison, and Jay, argued for ratification."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Which principle was added to the Constitution to address Anti-Federalist concerns?",
    options: ["Bill of Rights", "Elastic Clause", "Supremacy Clause", "Commerce Clause"],
    correct: 0,
    explanation: "The Bill of Rights was added to protect individual liberties."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "How many states were required to ratify the Constitution for it to become effective?",
    options: ["9 of 13", "All 13", "7 of 13", "10 of 13"],
    correct: 0,
    explanation: "The Constitution required ratification by 9 of the 13 states to take effect."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Which state’s ratification was considered critical to ensure legitimacy and momentum for the Constitution?",
    options: ["New York", "Rhode Island", "Vermont", "Georgia"],
    correct: 0,
    explanation: "New York’s ratification was pivotal due to its size and influence."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Brutus 1 was an example of:",
    options: ["Anti-Federalist writing", "Federalist argument", "State law", "Judicial review precedent"],
    correct: 0,
    explanation: "Brutus 1 criticized the Constitution for creating too strong a central government."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Federalist 10 addresses which key concern?",
    options: ["Factions and controlling their effects", "Limiting state power", "Judicial review", "Executive overreach"],
    correct: 0,
    explanation: "Madison argued that a large republic can control factions and protect minority rights."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Which compromise resolved the dispute between large and small states over representation?",
    options: ["Great Compromise", "Three-Fifths Compromise", "Commerce Compromise", "Electoral Compromise"],
    correct: 0,
    explanation: "The Great Compromise created a bicameral legislature balancing population-based and equal representation."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "The Three-Fifths Compromise addressed:",
    options: ["Representation and taxation of enslaved people", "Trade regulation", "Bill of Rights", "Federal judiciary powers"],
    correct: 0,
    explanation: "It counted enslaved individuals as three-fifths of a person for representation and taxation purposes."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Which compromise allowed Congress to regulate commerce but prohibited taxing exports?",
    options: ["Commerce Compromise", "Great Compromise", "Three-Fifths Compromise", "Elastic Clause Compromise"],
    correct: 0,
    explanation: "The Commerce Compromise allowed federal regulation of trade while protecting agricultural exports."
  },
  {
    unit: "Unit 1",
    topic: "Ratification of the Constitution",
    question: "Why did some states refuse to ratify the Constitution initially?",
    options: ["Lack of Bill of Rights", "Excessive state power", "Weak federal government", "Too much popular voting"],
    correct: 0,
    explanation: "States feared individual liberties would be at risk without a Bill of Rights."
  },
   {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "In McCulloch v. Maryland (1819), the Supreme Court ruled that:",
    options: ["States could tax federal institutions", "Congress has implied powers under the Necessary and Proper Clause", "The president can override state laws", "States have authority over federal banks"],
    correct: 1,
    explanation: "The Court held that Congress has implied powers and that states cannot tax federal institutions, reinforcing federal supremacy."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "What principle was reinforced in McCulloch v. Maryland regarding state and federal powers?",
    options: ["Federalism limits Congress entirely", "Federal law is supreme over state law", "States can nullify federal laws", "Congress cannot establish banks"],
    correct: 1,
    explanation: "The Supremacy Clause was reinforced: federal law prevails over conflicting state laws."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "In U.S. v. Lopez (1995), the Supreme Court ruled that:",
    options: ["Congress exceeded its Commerce Clause powers by regulating guns in schools", "States cannot regulate commerce", "Congress can regulate any activity affecting the economy", "The president can enforce gun laws nationwide"],
    correct: 0,
    explanation: "The Court limited Congress’s power under the Commerce Clause, ruling that carrying a gun in a school zone was not an economic activity."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which case limited the power of the federal government for the first time in decades?",
    options: ["McCulloch v. Maryland", "U.S. v. Lopez", "Gibbons v. Ogden", "Marbury v. Madison"],
    correct: 1,
    explanation: "U.S. v. Lopez was a rare modern case where the Supreme Court restricted Congress’s commerce power."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which clause did McCulloch v. Maryland (1819) interpret to justify federal action?",
    options: ["Supremacy Clause", "Commerce Clause", "Necessary and Proper Clause", "Full Faith and Credit Clause"],
    correct: 2,
    explanation: "The Necessary and Proper Clause allowed Congress to establish a national bank, even though it wasn’t explicitly listed in the Constitution."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which scenario is most similar to the reasoning in U.S. v. Lopez?",
    options: [
      "A state tries to tax a federal post office",
      "Congress passes a law regulating wearing uniforms in schools unrelated to economic activity",
      "The federal government enforces immigration laws",
      "Congress regulates interstate highways"
    ],
    correct: 1,
    explanation: "Like Lopez, this scenario involves federal overreach into an area not connected to commerce or enumerated powers."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Gibbons v. Ogden (1824) primarily addressed:",
    options: ["Federal control over interstate commerce", "State taxation of banks", "Presidential veto power", "Judicial review authority"],
    correct: 0,
    explanation: "The case reinforced federal power to regulate interstate commerce under the Commerce Clause."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which type of federalism is demonstrated by McCulloch v. Maryland?",
    options: ["Dual federalism (layer cake)", "Cooperative federalism (marble cake)", "Competitive federalism", "Centralized federalism"],
    correct: 3,
    explanation: "The case reflects centralized federalism, where federal power is asserted over states to carry out national purposes."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which type of federalism is illustrated by U.S. v. Lopez?",
    options: ["Dual federalism (layer cake)", "Cooperative federalism (marble cake)", "Competitive federalism", "Centralized federalism"],
    correct: 0,
    explanation: "Lopez reflects dual federalism, emphasizing boundaries between federal and state powers."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which modern example represents federalism in action?",
    options: [
      "States legalizing marijuana despite federal prohibition",
      "Congress passing a law to regulate all schools nationwide",
      "President declaring war without Congress",
      "Supreme Court ignoring state laws"
    ],
    correct: 0,
    explanation: "This shows states exercising powers independently of federal restrictions, a federalism example."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "Which statement best captures the impact of Supreme Court federalism cases?",
    options: [
      "They define the balance of power between national and state governments",
      "They allow states to ignore the Constitution",
      "They only affect presidential power",
      "They replace state constitutions entirely"
    ],
    correct: 0,
    explanation: "Supreme Court rulings clarify limits and powers for federal and state governments."
  },
  {
    unit: "Unit 1",
    topic: "Federalism in Action",
    question: "When Congress passes laws that stretch the Commerce Clause, which case is most likely cited by opponents?",
    options: ["U.S. v. Lopez", "McCulloch v. Maryland", "Gibbons v. Ogden", "Marbury v. Madison"],
    correct: 0,
    explanation: "Lopez limits Congress from using the Commerce Clause to regulate non-economic activity."
  }
];
