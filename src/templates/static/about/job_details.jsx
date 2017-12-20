import React from 'react';

const JobDetails = () => (
[% PROCESS _common/components/elements.html.tt %]

[% BLOCK invisible_heading %]
    <div className='center-text' id='title'>
        [% FOREACH header IN headers %]
            <h1 className='[% header.class %] invisible'>[% header.string %]</h1>
        [% END %]
    </div>
[% END %]

[% BLOCK ul_text %]
    <p><strong>[% text %]</strong></p>
    [% IF paragraph %]
        <p>[% paragraph %]</p>
    [% END %]
    [% IF items %]
        [% INCLUDE list class items %]
    [% END %]
[% END %]

[% BLOCK sidebar %]
    <div className='sidebar invisible [% class %]'>
        <ul id='sidebar-nav'>
            [% FOREACH sidebar_item IN sidebar_items %]
                <li><a href='#[% sidebar_item.href %]'>[% sidebar_item.string %]</a></li>
            [% END %]
        </ul>
    </div>
[% END %]

[% BLOCK invisible_image %]
    <div className='gr-12 center-text' id='image'>
        [% FOREACH class IN classes %]
            <img className='responsive invisible dept-image [% class %]' src={it.url_for('images/pages/careers/\' _ class _ \'.svg')} />
        [% END %]
    </div>
[% END %]

<div className='job-details container'>
    <div className='gr-parent static_full'>
        <div className='gr-row'>
            <div className='gr-3 gr-padding-10 gr-hide-m gr-hide-p'>
                [% INCLUDE invisible_image classes=[
                    'information_technology',
                    'quality_assurance',
                    'quantitative_analysis',
                    'marketing',
                    'accounting',
                    'compliance',
                    'customer_support',
                    'human_resources',
                    'administrator',
                    'internal_audit',
                ] %]
                <div className='gr-12 gr-padding-10'>
                    [% INCLUDE invisible_heading headers=[
                        { className='information_technology', string=l(\'Information Technology\') },
                        { className='quality_assurance',      string=l(\'Quality Assurance\') },
                        { className='quantitative_analysis',  string=l(\'Quantitative Analysis\') },
                        { className='marketing',              string=l(\'Marketing\') },
                        { className='accounting',             string=l(\'Accounting\') },
                        { className='compliance',             string=l(\'Compliance\') },
                        { className='customer_support',       string=l(\'Customer Support\') },
                        { className='human_resources',        string=l(\'Human Resources\') },
                        { className='administrator',          string=l(\'Administrator\') },
                        { className='internal_audit',         string=l(\'Internal Audit\') },
                    ] %]
                </div>
                <div className='gr-12 gr-padding-10 sidebar-container'>
                    [% INCLUDE sidebar className='information_technology' sidebar_items=[
                        { href => \'devops_manager\',            string => l(\'DevOps Manager\') }
                        { href => \'senior_frontend_developer\', string => l(\'Senior Front-End Developer\') }
                        { href => \'senior_perl_developer\',     string => l(\'Senior Perl Developer\') }
                    ] %]

                    [% INCLUDE sidebar className='quantitative_analysis' sidebar_items=[
                        { href => \'quantitative_developer\', string => l(\'Quantitative Developer\') }
                        { href => \'quantitative_analyst\',   string => l(\'Quantitative Analyst\') }
                    ] %]

                    [% INCLUDE sidebar className='marketing' sidebar_items=[
                        { href => \'marketing_project_coordinator\', string => l(\'Marketing Project Coordinator\') }
                        { href => \'social_media_executive\',        string => l(\'Social Media Executive\') }
                        { href => \'affiliate_manager\',             string => l(\'Affiliate Manager\') }
                        { href => \'graphic_designers\',             string => l(\'Graphic Designers\') }
                        { href => \'marketing_executives\',          string => l(\'Marketing Executives\') }
                        { href => \'copywriter\',                    string => l(\'Copywriter\') }
                        { href => \'translator\',                    string => l(\'Translator\') }
                        { href => \'proofreader\',                   string => l(\'Proofreader\') }
                    ] %]

                    [% INCLUDE sidebar className='compliance' sidebar_items=[
                        { href => \'compliance_executive\', string => \'Compliance Executive\' }
                        { href => \'anti_fraud_officer\',   string => \'Anti-Fraud Officer\' }
                    ] %]
                </div>
            </div>

            <div className='gr-9 gr-padding-10 gr-12-m gr-12-p sections'>
                <div className='information_technology'>
                    <div className='invisible' id='devops_manager'>
                        <h1>{it.L(\'DevOps Manager\')}</h1>

                        <p>{it.L('[_1]\'s IT Operations Group is responsible for the design, development and operation of the company\'s high-traffic networks. Its responsibilities include hardware and software deployment, up-time and reliability testing, incident response reporting, network security, intrusion detection, and load balancing.', it.website_name)}</p>
                        <p>{it.L('As our DevOps Manager/Team Lead, you\'ll be responsible for the training, development and direction of a world class Linux-based Systems Administration team.')}</p>
                        <p>{it.L('To be considered for this mission critical leadership role, you\'ll need to demonstrate a passion for open source technologies and a desire to test your talents in a dynamic and challenging work environment.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Translate the ongoing business needs of the company into a suitable IT infrastructure') },
                            { text=l('Monitor hardware and software deployment and manage our worldwide network of servers and office networks') },
                            { text=l('Oversee incident responses for our production servers and take the necessary measures to correct and enhance IT operations') },
                            { text=l('Manage security, intrusion detection, DDoS protection and PCI compliance measures related to each of our deployed servers') },
                            { text=l('Conduct disaster and recovery planning and execution') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Expertise in cloud solutions') },
                            { text=l('Experience with, and enthusiasm for, Linux and open-source products such as Apache, mod proxy, mod_perl, Squid, Bind, DHCP, iptables and Postfix') },
                            { text=l('Familiarity with virtualization concepts (openvz / Xen / vmware)') },
                            { text=l('Knowledge of hardware and software firewalls, intrusion detection methods, security systems and DDoS protection') },
                            { text=l('Extensive experience with TCP/IP networking, VPNs and IPSEC') },
                            { text=l('Thorough knowledge of bash scripting, as well as experience with scripting languages such as Perl and PHP') },
                        ] %]
                    </div>

                    <div className='invisible' id='senior_frontend_developer'>
                        <h1>{it.L(\'Senior Front-End Developer\')}</h1>

                        <p>{it.L('Binary Group Services is searching for talented and motivated front-end developers who are looking for a chance to excel.')}</p>
                        <p>{it.L('If you have the skill set we seek, you\'ll become a valued member of a highly competent front end development team engaged in driving our binary options trading systems to new heights.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') %]
                        <p>{it.L('As a Senior Front-End Developer, you\'ll be tasked with writing robust, high-quality, production-ready code; refactoring and optimizing a large and complex legacy code base; and contributing to the architecture that drives our high-traffic global website.')}</p>

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Extensive experience in the application of advanced coding principles and standards') },
                            { text=l('The ability to write high-quality, self-documenting code, using test-driven development techniques') },
                            { text=l('Extensive knowledge of Javascript, HTML, CSS, AJAX, JSON') },
                            { text=l('Experience working with client-side JavaScript frameworks such as jQuery, ReactJS, and/or AngularJS') },
                            { text=l('Strong knowledge of developing cross-platform/browser-compatible applications for web and mobile') },
                            { text=l('A preference and passion for Linux and open-source platforms') },
                        ] %]
                    </div>

                    <div className='invisible' id='senior_perl_developer'>
                        <h1>{it.L(\'Senior Perl Developer\')}</h1>

                        <p>{it.L('Binary Group Services is searching for talented and motivated Perl developers who are looking for a chance to excel. If you have the skill set we seek, you\'ll become a valued member of a highly competent back-end development team engaged in driving our binary options trading systems to new heights.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') %]
                        <p>{it.L('As a Senior Perl Developer, you\'ll be tasked with writing robust, high-quality, production-ready code and contributing to the architecture that drives our high-traffic global website.')}</p>

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Deep Perl expertise') },
                            { text=l('Fluency with Linux administration') },
                            { text=l('Familiarity with Perl, DBI, Mason, Moose, Sereal, Plack/PSGI, nginx, Javascript, MySQL/Postgres, Memcached, Redis, RabbitMQ, git') },
                            { text=l('Experience with relational database design and/or open-source RDBMS (Postgres, MySQL, etc.) systems') },
                            { text=l('The ability to write high-quality, self-documenting code, using test-driven development techniques') },
                            { text=l('A preference and passion for Linux and open-source platforms') },
                        ] %]
                    </div>
                </div>

                <div className='quality_assurance'>
                    <div className='invisible' id='quality_assurance_engineer'>
                        <h1>{it.L(\'Quality Assurance Engineer\')}</h1>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Execute and update manual and automated test plans') },
                            { text=l('Work with members of the QA team to ensure the integrity of releases') },
                            { text=l('Investigate and reproduce client-reported issues') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('A Bachelor\'s degree in Computer Science, or an equivalent combination of technical education, training and work experience') },
                            { text=l('2-3 years of applicable experience in a web application testing role') },
                            { text=l('Hands-on test automation experience a plus') },
                            { text=l('The ability to work in a Linux/Unix based environment') },
                            { text=l('Proficiency in a scripting language - Perl preferred') },
                            { text=l('Excellent oral and written communication skills') },
                            { text=l('Strong analytical and problem solving abilities') },
                            { text=l('Experience with Postgres or another RDBMS a plus') },
                            { text=l('Strong attention to detail') },
                            { text=l('Experience with Git') },
                        ] %]
                    </div>
                </div>

                <div className='quantitative_analysis'>
                    <div className='invisible' id='quantitative_developer'>
                        <h1>{it.L(\'Quantitative Developer\')}</h1>

                        <p>{it.L('The [_1] Quantitative Analytics group is responsible for the pricing of binary options offered on our website, as well as the risk management and profitability of its options book. Processing over a million transactions each day, the company manages a book of exotic options which arguably exceeds in complexity that of the typical derivatives desk.', it.website_name)}</p>
                        <p>{it.L('Since all dealing on the [_1] website is fully automated, our pricing and risk management algorithms must take full account of real-time pricing parameters, data feed irregularities and latencies.', it.website_name)}</p>
                        <p>{it.L('As a developer in the [_1] Quant Group, you will be responsible for the implementation and maintenance of the company\'s risk management and derivatives pricing software. You and the members of your team will develop software designed to study the market micro-structure, optimize existing code, manage financial data feeds and ensure the continuous running of our automated trading platform.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Work closely with other members of the team to develop software that would drive prices on our trading platform') },
                            { text=l('Review, develop and enhance codes used in option pricing and real time risk management programs') },
                            { text=l('Creating interfaces and tools to access market information, real-time and historical analysis of trading strategies') },
                            { text=l('Engage in data mining using SQL databases, R/S-Plus, OLAP and other analytical tools') },
                            { text=l('Monitor and optimize website trading activity') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('An advanced university degree in Mathematics, Physics or Engineering') },
                            { text=l('Advanced knowledge of software design principles') },
                            { text=l('Perl knowledge and/or readiness to learn is a must') },
                            { text=l('Experience with programming languages like Perl, Python, or Ruby coupled with the ability to produce high quality, self-documenting code, using test driven development techniques') },
                            { text=l('A preference and passion for Linux and open-source platforms') },
                            { text=l('Experience with languages like C/C++/R/Python/VBA/Mat lab/SQL would be a plus') },
                            { text=l('Knowledge of probability theory, numerical methods, Monte-Carlo simulation, statistical modeling, and time series analysis would be a plus') },
                        ] %]
                    </div>

                    <div className='invisible' id='quantitative_analyst'>
                        <h1>{it.L(\'Quantitative Analyst\')}</h1>

                        <p>{it.L('[_1]\'s Quantitative Analytics group is responsible for the pricing of binary options offered on its website, as well as the risk management and profitability of its options book. Since all dealing on the company\'s website is fully automated, our pricing and risk management algorithms must take full account of real-time pricing parameters, data feeds irregularities and latencies.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Develop derivatives pricing, risk management models and algorithms using C/C++, R, MATLAB, Perl, Python and Java') },
                            { text=l('Review, develop and enhance Perl, C++ and R codes used in options pricing, volatility forecasts, and risk management program') },
                            { text=l('Maintain accurate system pricing parameters') },
                            { text=l('Engage in data mining using SQL databases, R/S-Plus, OLAP and other analytical tools') },
                            { text=l('Monitor website trading activity and minimize abuse') },
                            { text=l('Generate periodic and special reports summarizing client trading trends') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('To qualify, you\'ll need an advanced university degree in Physics, Financial Engineering or Mathematics') },
                            { text=l('Experience in exotic options pricing, volatility forecasts, high-frequency trading and the analysis of market inefficiencies') },
                            { text=l('Knowledge of probability theory, stochastic calculus, numerical methods, Monte-Carlo simulation, differential equations, econometrics, and statistical modeling') },
                            { text=l('Skill in the application of object-oriented programming languages (C++, Perl and Java) coupled with the ability to produce high quality code') },
                            { text=l('Skill in the use of financial information sources such as Bloomberg and Reuters') },
                            { text=l('Relevant experience in the use of Quant programming libraries and frameworks (Quantlib, PricingPartners, FINCAD, and NumeriX), and quant pricing platforms (SuperDerivatives and FENICS) would be a plus') },
                        ] %]
                    </div>
                </div>

                <div className='marketing'>
                    <div className='invisible' id='marketing_project_coordinator'>
                        <h1>{it.L(\'Marketing Project Coordinator\')}</h1>

                        <p>{it.L('[_1] seeks a Project Coordinator to help drive the production of promotional content and rollout of marketing campaigns, designed to engage new prospects and current customers based throughout the globe.', it.website_name)}</p>
                        <p>{it.L('Join our team of bright, talented professionals. Work collaboratively with us to enhance and promote a high-tech platform that has been one of the most recognised in the binary options trading industry for over 15 years.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Work with senior staff to coordinate project delivery; develop and update schedules; maintain task lists; and hold team members accountable for assigned deliverables') },
                            { text=l('Prepare project requirements, as needed to clarify expectations and deliverables') },
                            { text=l('Document department processes, to enhance the marketing team\'s ability to execute repeated tasks efficiently and effectively') },
                            { text=l('Assist marketing team members with additional tasks and initiatives') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Exceptional organizational skills; detail orientation; strong work ethic; and efficient multi-tasking capabilities') },
                            { text=l('Effective interpersonal skills, with the ability to mediate situations, resolve disputes, and implement effective solutions') },
                            { text=l('Strong, passionate interest in Marketing and Advertising') },
                            { text=l('The ability to communicate fluently in English, in both oral and written form') },
                            { text=l('A university degree in Marketing, Communication, Business Administration, or related discipline') },
                        ] %]

                        [% INCLUDE ul_text text=l('Preferences:') className=\'bullet\' items=[
                            { text=l('Previous knowledge and experience in Marketing or Advertising') },
                            { text=l('Related experience in the financial services industry') },
                            { text=l('The ability to speak multiple languages') },
                        ] %]
                    </div>

                    <div className='invisible' id='social_media_executive'>
                        <h1>{it.L(\'Social Media Executive\')}</h1>

                        <p>{it.L('[_1] seeks a Social Media Executive to enhance and proactively manage the company\'s social-media efforts. This role requires effective utilisation of a variety of social media channels to attract and nurture prospects, clients, partners, and recruits based throughout the world.', it.website_name)}</p>
                        <p>{it.L('Join our team of bright, talented professionals. Work collaboratively with us to enhance and promote a high-tech platform that has been one of the most recognised in the binary options trading industry for over 15 years.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Develop and maintain a consistent, engaging brand voice throughout all social-media channels') },
                            { text=l('Leverage social-media tools and channels to identify, engage, and convert potential new customers and partners') },
                            { text=l('Strengthen relationships with current clients and foster greater loyalty through a variety of social-media outlets') },
                            { text=l('Develop content as necessary to promote the company through social media') },
                            { text=l('Set up and manage social-media advertising campaigns, effectively micro-targeting potential clients and partners') },
                            { text=l('Brainstorm new ways of using social media to connect meaningfully with prospects, clients, and partners') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('A strong and passionate interest in Social Media, Marketing, and Advertising') },
                            { text=l('The ability to communicate effectively in English, in both oral and written form') },
                            { text=l('A university degree in Marketing, Communication, Business Administration, or related discipline') },
                        ] %]

                        [% INCLUDE ul_text text=l('Preferences:') className=\'bullet\' items=[
                            { text=l('Significant experience in Social Media, Marketing, and / or Advertising') },
                            { text=l('Knowledge and experience with the financial services industry') },
                            { text=l('The ability to speak multiple languages') },
                        ] %]
                    </div>

                    <div className='invisible' id='affiliate_manager'>
                        <h1>{it.L(\'Affiliate Manager\')}</h1>

                        <p>{it.L('[_1] now seeks Affiliate Managers to drive rapid growth and business development in key areas of the world. Successful recruits for this telecommuting role will actively increase [_1]\'s market presence, expanding its network of affiliate partners from particular countries, geographic regions, and / or languages as needed.', it.website_name)}</p>
                        <p>{it.L('We are currently accepting applications from skilled, ambitious affiliate marketers based virtually all over the globe. Each applicant\'s skills and experience will be evaluated against the company\'s potential for growth in a particular segment, to determine the best-fit business cases for engagement.')}</p>
                        <p>{it.L('Expand our network of active affiliates in your local market. Contribute your energy, skills, and knowledge of the local business culture to help further our rapid rate of growth worldwide.')}</p>
                        <p>{it.L('Join our team of bright, talented professionals. Work collaboratively with us to promote a high-tech platform that has been one of the most recognised in the binary options trading industry for over 15 years.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Responsible for recruiting, training, and nurturing affiliates from particular countries, geographic regions, and / or languages, leveraging your direct knowledge and experience of the local market') },
                            { text=l('Drive rapid growth and business development, to support the company\'s sales and marketing objectives') },
                            { text=l('Coordinate business-development activities and generate high-quality partnership leads') },
                            { text=l('Adapt affiliate-marketing tactics and promotional materials as needed, to localise all content for maximum effectiveness') },
                            { text=l('Utilise a variety of tactics - both online and offline - to grow and support the company\'s network of partners in your designated market') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('At least five years of experience with affiliate marketing, growth hacking, business development, and other closely related skills') },
                            { text=l('An assertive, sales-driven personality, able to adapt quickly and achieve powerful results') },
                            { text=l('Strong oral and written communication skills in both the regional language and English') },
                            { text=l('A Bachelor\'s degree in Marketing, Business Administration, or related discipline') },
                        ] %]

                        [% INCLUDE ul_text text=l('Preferences:') className=\'bullet\' items=[
                            { text=l('Knowledge and experience with the financial services industry and / or binary options trading') },
                            { text=l('Prior knowledge and experience with IT development') },
                            { text=l('The ability to speak multiple languages') },
                        ] %]
                    </div>

                    <div className='invisible' id='graphic_designers'>
                        <h1>{it.L(\'Graphic Designers\')}</h1>

                        <p>{it.L('[_1] is looking to recruit highly skilled, experienced designers who are passionate about developing attractive visuals for both online and offline applications.', it.website_name)}</p>
                        <p>{it.L('Create the graphics required to support our global marketing and advertising campaigns. The team\'s creative efforts span a number of channels, including online marketing, affiliate networks, print advertising, tradeshows, special events, and promotional projects.')}</p>
                        <p>{it.L('Join our team of bright, talented professionals. Work collaboratively with us to enhance and promote a high-tech platform that has been one of the most recognised in the binary options trading industry for over 15 years.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Work directly with members of our marketing and IT teams to produce graphics for the company website, blog, social media outlets, and marketing materials') },
                            { text=l('Create content to support our international marketing campaigns in a variety of different formats and languages') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Strong, passionate interest in Graphic Design, Marketing, and Advertising') },
                            { text=l('Ability to communicate fluently in the English language, in both oral and written forms') },
                            { text=l('University degree, preferably in Graphic Design or a related discipline') },
                        ] %]

                        [% INCLUDE ul_text text=l('Preferences:') className=\'bullet\' items=[
                            { text=l('UX / UI experience') },
                            { text=l('Web design / development experience') },
                            { text=l('Prior knowledge and experience with the financial industry') },
                            { text=l('Ability to speak multiple languages') },
                        ] %]
                    </div>

                    <div className='invisible' id='marketing_executives'>
                        <h1>{it.L(\'Marketing Executives\')}</h1>

                        <p>{it.L('[_1] is seeking several highly skilled Marketing Executives, eager to contribute their energy, passion, and specialised strengths in connecting with prospects and clients based throughout the globe.', it.website_name)}</p>
                        <p>{it.L('Join our team of bright, talented professionals. Work collaboratively with us to enhance and promote a high-tech platform that has been one of the most recognised in the binary options trading industry for over 15 years.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Assist senior members of the marketing team in implementing a broad array of promotional campaigns') },
                            { text=l('Produce content for the company\'s website, blog, social media outlets, and marketing materials') },
                            { text=l('Adapt communication appropriately to suit a variety of different formats and target audiences') },
                            { text=l('Demonstrate the ability to think / act quickly and multi-task as needed to execute effective campaigns') },
                            { text=l('Contribute your ideas, energy, and creativity to further the company\'s dynamic branding efforts') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('A strong and passionate interest in Marketing and Advertising') },
                            { text=l('Exceptional communication skills in English, in both oral and written form') },
                            { text=l('A university degree in Marketing, Journalism, Communications, or other business-related discipline') },
                        ] %]

                        [% INCLUDE ul_text text=l('Preferences:') className=\'bullet\' items=[
                            { text=l('Ability to speak, read, and write multiple languages') },
                            { text=l('Firsthand knowledge of other cultures through direct experience') },
                            { text=l('Previous experience in the financial services industry') },
                            { text=l('Prior knowledge and experience in Information Technology and/or Software Development') },
                        ] %]
                    </div>

                    <div className='invisible' id='copywriter'>
                        <h1>{it.L(\'Copywriter\')}</h1>

                        <p>{it.L('[_1] seeks a sharp Copywriter to produce content that actively engages new prospects and current customers based throughout the world.', it.website_name)}</p>
                        <p>{it.L('Join our team of bright, talented professionals. Work collaboratively with us to enhance and promote a high-tech platform that has been one of the most recognised in the binary options trading industry for over 15 years.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Create clear, concise and engaging content for display on the company\'s website, blog, social media outlets, and marketing materials') },
                            { text=l('Develop text that promotes the company\'s product offerings in a variety of formats') },
                            { text=l('Educate prospects, clients, and partners regarding the benefits of [_1]\'s innovative online trading platform', it.website_name) },
                            { text=l('Adapt tone of voice as appropriate to suit specified target audiences') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('The ability to translate information into clear, concise, and engaging content') },
                            { text=l('Effective English language skills, with precise attention to detail regarding punctuation, spelling, grammar, and syntax') },
                            { text=l('The ability to multi-task, balance deadlines, and reliably deliver high-quality content') },
                            { text=l('University degree in Marketing, Communications, Journalism, or related discipline') },
                        ] %]

                        [% INCLUDE ul_text text=l('Preferences:') className=\'bullet\' items=[
                            { text=l('The ability to speak and write in multiple languages') },
                            { text=l('Knowledge and experience in the financial services industry') },
                            { text=l('A background in IT development') },
                        ] %]
                    </div>

                    <div className='invisible' id='translator'>
                        <h1>{it.L(\'Translator\')}</h1>

                        <p>{it.L('[_1] is seeking qualified translation professionals familiar with specific target markets, languages, and cultures. By delivering high-quality translation to support our customers in a particular language, you will serve as the company\'s voice to clients in certain key areas of the world. You\'ll work with colleagues in IT, Customer Support, and Marketing to provide localised text and translation services through a web-based tool. This position will report to our Translation Project Manager.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Process website content translations regularly and efficiently, delivering high-quality work on a dependable basis') },
                            { text=l('Assist in the proofreading and recording of video presentations') },
                            { text=l('Ensure compliance with quality control standards governing website content') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('A native speaker with strong command of the English language, in both oral and written form') },
                            { text=l('Ability to work with a simple web-based translation tool') },
                            { text=l('Previous experience with financial / binary options website services') },
                            { text=l('A university degree or accredited translation certification preferred') },
                        ] %]
                    </div>

                    <div className='invisible' id='proofreader'>
                        <h1>{it.L(\'Proofreader\')}</h1>

                        <p>{it.L('[_1] is seeking a qualified proofreader with a flair for language and a meticulous eye for detail. You must be able to interact with our staff using a web-based translator interface. You\'ll work with colleagues in IT, Customer Support and Marketing to provide localised text and translation services.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\'
                            paragraph=l('Under the supervision of [_1]\'s Translation Project Manager, you will:', it.website_name)
                            items=[
                                { text=l('Proofread and correct the content appearing on the company\'s website, blog, social media outlets, and marketing materials, from English to the regional language and vice versa') },
                                { text=l('Use appropriate terminology, taking into account the style and nuance of the original text') },
                                { text=l('Maintain adequate speed and volume of output') },
                                { text=l('Process website content translations when a full time translator is unavailable') },
                                { text=l('Ensure compliance with the quality standards that govern our website content') },
                            ]
                        %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Strong command of the English language, in both oral and written form') },
                            { text=l('Previous experience with financial and/or binary options trading websites') },
                            { text=l('A university degree or accredited translation certification preferred') },
                        ] %]
                    </div>
                </div>

                <div className='accounting'>
                    <div className='invisible' id='accounts_and_payments_executive'>
                        <h1>{it.L(\'Accounts And Payments Executive\')}</h1>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') %]
                        <p>{it.L('As an Accounts And Payments Executive, you will be responsible for the processing of client payments, handling and resolving client payment queries, assisting with the management accounts of the companies within our group, performing reconciliations, preparing reports, and constantly liaising with all other departments within the company in relation to client payments and accounts. You will work within a multi-national team, using the proprietary accounting and backoffice systems provided by the company.')}</p>

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Life-long career interest in the Accounting field') },
                            { text=l('A degree major in Accounting or other relevant professional qualifications') },
                            { text=l('At least 1 year working experience is required for this position') },
                            { text=l('Excellent English language (written and oral) communication skills') },
                            { text=l('Excellent IT/office skills') },
                            { text=l('Ability to work in a multicultural and international environment') },
                            { text=l('Motivated, accurate, organized and a self-starter') },
                        ] %]
                    </div>
                </div>

                <div className='compliance'>
                    <div className='invisible' id='compliance_executive'>
                        <h1>{it.L(\'Compliance Executive\')}</h1>

                        <p>{it.L('In order to support its continued growth, [_1] is seeking to recruit and place a qualified Compliance Executive. In this newly created role, to be based in Malta, the incumbent will report to our Head of Regulatory and Legal Compliance')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Ensuring that the Binary Group of companies are in full compliance with the regulatory regimes to which they are subject') },
                            { text=l('Working closely with the Head of Compliance to implement Know your Client (KYC), Anti-Money Laundering (AML), and data protection regulations') },
                            { text=l('Preparing the periodic and special reports required to ensure legal and regulatory compliance in the jurisdictions within which we operate') },
                            { text=l('Assisting the Head of Compliance in applying for the licenses required for group companies in new jurisdictions') },
                            { text=l('Assisting with the regulatory and statutory audit of Binary Group companies worldwide') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('A tertiary level education') },
                            { text=l('A full understanding of, and a keen interest in, corporate legal compliance') },
                            { text=l('Experience working within an international environment') },
                            { text=l('The ability to acquire knowledge of compliance matters in a multitude of international jurisdictions') },
                            { text=l('A proactive approach to solving problems and delivering client solutions') },
                            { text=l('Work experience in a similar role') },
                        ] %]
                    </div>

                    <div className='invisible' id='anti_fraud_officer'>
                        <h1>{it.L(\'Anti-Fraud Officer\')}</h1>

                        <p>{it.L('[_1]\'s principal Anti-Fraud Officer is responsible for the exercise of exceptional client relationship management skills applied to the prevention of fraudulent activities in payments processing and business transactions. He or she will be expected to partner with our payments and compliance teams in resolving payment queries; administering chargebacks; conducting anti-money laundering audits, and implement a broad array of fraud prevention measures.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Effectively monitor daily client activity') },
                            { text=l('Audit deposit patterns and take action on fraud or abuse') },
                            { text=l('Review suspicious account transactions') },
                            { text=l('Follow up on rejected deposits') },
                            { text=l('Run daily payments reports and report suspected fraud') },
                            { text=l('Liaise with banks and payment providers') },
                            { text=l('Set client deposit and loss limits') },
                            { text=l('Analyze data regarding fraud, risk assessment, and anti-money laundering') },
                            { text=l('Document account chargebacks') },
                            { text=l('Manage the company\'s cashier system') },
                            { text=l('Update the Anti-Fraud Manual and other related documents') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Excellent English language skills (both oral and written)') },
                            { text=l('Experience in an anti-fraud or risk management role') },
                            { text=l('Effective analytical and administrative skills') },
                            { text=l('A detail orientation with the ability to detect patterns') },
                            { text=l('A university degree in a related field is a plus') },
                        ] %]
                    </div>
                </div>

                <div className='customer_support'>
                    <div className='invisible' id='global_customer_service_representatives'>
                        <h1>{it.L(\'Global Customer Service Representatives\')}</h1>
                        <p>{it.L('[_1] has several exceptional career opportunities for Customer Service Professionals.', it.website_name)}</p>
                        <p>{it.L('As a member of our global Client Service Team you will serve as the voice of our customers by resolving and reducing client service issues.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('Resolve complex customer care issues in the best interest of our global clients and the company') },
                            { text=l('Respond to client queries using our state of the art telephone and electronic mail') },
                            { text=l('Work to expand our international client base by applying creative marketing and customer support strategies') },
                            { text=l('Collaborate with members of our IT Group to identify innovative ways to improve our website\'s capability and performance') },
                        ] %]

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('Excellent English language skills, both oral and written') },
                            { text=l('Proficiency in a second language (oral and written) is preferred') },
                            { text=l('Previous work experience in a client service and/or marketing role') },
                            { text=l('Experience in the financial services industry is preferred') },
                            { text=l('A university degree in marketing or computer science is a plus') },
                        ] %]
                    </div>
                </div>

                <div className='human_resources'>
                    <div className='invisible' id='human_resource_executive'>
                        <h1>{it.L(\'Human Resource Executive\')}</h1>

                        <p>{it.L('In order to support its continued growth, the Human Resources Group at [_1] is seeking to place a highly competent administrator in a senior recruitment role. Please note that this is not a position suitable for an HR generalist, but should be of keen interest to a high level administrator with extensive experience in the global recruitment of managers and single technical contributors. A background in financial services and experience in the recruitment of senior professionals in IT and Quantitative Analytics would be ideal.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') className=\'bullet\' items=[
                            { text=l('In this newly created role, to be based on our offices in Cyberjaya, Malaysia, you will be responsible for:') },
                            { text=l('Supporting the Group\'s global recruiting and talent management needs') },
                            { text=l('Advising senior managers regarding salary negotiations and job offers') },
                            { text=l('Administering the company\'s semi-annual performance appraisal process') },
                            { text=l('A broad array of HR-related administrative tasks') },
                        ] %]

                        <p>{it.L('Qualified applicants should have global experience in recruitment administration, excellent administrative skills, and the ability to work in a fast-paced entrepreneurial environment. We are seeking a true professional capable of making an impact by supporting and advancing HR best practices throughout the company\'s global operations.')}</p>
                    </div>
                </div>

                <div className='administrator'>
                    <div className='invisible' id='administrative_executive'>
                        <h1>{it.L(\'Administrative Executive\')}</h1>

                        <p>{it.L('[_1] is seeking a junior to mid-career professional with exceptional administrative and organization skills to join its General Affairs Team.', it.website_name)}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') %]
                        <p>{it.L('As a General Affairs Executive, you will provide administrative support to several departments in areas related to vendor management, event planning, accounting, and human resources administration to name a few.')}</p>

                        [% INCLUDE ul_text text=l('Requirements:') className=\'bullet\' items=[
                            { text=l('An Advanced/Higher/Graduate Diploma or a Bachelor\'s Degree') },
                            { text=l('Relevant work experience in a related field (financial services preferred)') },
                            { text=l('Effective PC skills with extensive experience in MS Office applications') },
                            { text=l('Well-developed organizational, administrative, and/or accounting skills') },
                            { text=l('Excellent written and verbal communication skills in both English and Bahasa Malaysia') },
                        ] %]

                        <p>{it.L('Fresh graduates who meet our basic requirements and are passionate about pursuing a professional career in administrative services are welcome to apply.')}</p>
                    </div>
                </div>

                <div className='internal_audit'>
                    <div className='invisible' id='internal_auditor'>
                        <h1>{it.L(\'Internal Auditor\')}</h1>

                        <p>{it.L('We are looking for energetic and enthusiastic individuals who love challenges, are detail-oriented and highly analytical to join our Internal Audit team.')}</p>

                        [% INCLUDE ul_text text=l('Duties and Responsibilities:') %]
                        <p>{it.L('As Internal Auditor, you will perform unique, risk-based internal audits on the Binary Ltd. Group of companies. You will also be involved in risk management, evaluation of regulatory compliance, as well as work with the Head of Departments to improve business processes and support the realization of audit recommendations.')}</p>

                        [% INCLUDE ul_text text=l('Requirements:')className=\'bullet\' items=[
                            { text=l('A degree in Accounting or Finance, and at least three years of experience working in Internal Audit or Corporate Governance') },
                            { text=l('Strong MS Office skills and experience working with accounting software and databases') },
                            { text=l('Proven knowledge of auditing standards, procedures, laws, rules and regulations are an added advantage') },
                            { text=l('IT audit experience is a plus') },
                        ] %]
                    </div>
                </div>
            </div>
        </div>

        <div className='gr-row'>
            <div className='gr-3 gr-hide-m gr-hide-p'></div>
            <div className='gr-9 gr-12-m gr-12-p center-text gr-centered'>
                <div className='gr-12'>
                    <a className='button' href='mailto:hr@binary.com'>
                        <span>{it.L('Submit your CV and Cover Letter')}</span>
                    </a>
                </div>

                <div className='gr-12 gr-padding-10 senior_perl_message invisible'>
                    <p>{it.L('Vs 407 zrnaf nalguvat fcrpvny gb lbh lbh znl pbcl lbhe nccyvpngvba gb wl+ebg13@ovanel.pbz sbe snfg-genpx pbafvqrengvba.')}</p>
                </div>

                <div className='gr-12 gr-padding-10'>
                    <a id='back-button'>{it.L('<< Back to Job Descriptions')}</a>
                </div>
            </div>
        </div>
    </div>
</div>

);

export default JobDetails;
