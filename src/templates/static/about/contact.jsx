import React from 'react';

const Contact = () => (
[% PROCESS _common/components/elements.html.tt %]

<div className='container' id='contact_content'>
    <div className='gr-row gr-parent static_full border-bottom gr-padding-30'>
        <div className='gr-2 gr-hide-m ja-hide'>
            <img className='responsive' src={it.url_for('images/pages/contact/contact-icon.svg')}/>
        </div>
        <div className='gr-10 gr-12-m gr-padding-10 gr-parent'>
            <h1>{it.L('Contact us')}</h1>
            <div className='gr-row'>
                <div className='gr-6 gr-12-t gr-12-p gr-12-m'>
                    <div className='gr-padding-10 invisible ja-show gr-parent'>
                        {it.L('JAPAN ONLY CONTACT TEXT')}
                        <p>[% '<a href=\'mailto:%\' rel=\'nofollow\'>%</a>' | replace(\'%\', \'support@binary.com\') %]</p>
                    </div>
                    <div className='gr-padding-10 ja-hide gr-parent'>
                        <div className='gr-row'>
                            <div className='gr-4'>
                                <label for='cs_telephone_number'>{it.L('Telephone:')}</label>
                            </div>
                            <div className='gr-7 gr-no-gutter'>
                                [% INCLUDE select id=\'cs_telephone_number\' options=[
                                    { text=l('Australia'),      value=l(\'[_1] (Toll Free)\', \'+61 (02) 8294 5448, 1800 093570\') },
                                    { text=l('Canada'),         value='+1 (450) 823 1002' },
                                    { text=l('Indonesia'),      value=l(\'[_1] (Toll Free)\', \'0018030113641\') },
                                    { text=l('Ireland'),        value=l(\'[_1] (Toll Free)\', \'+353 (0) 76 888 7500, 1800931084\') },
                                    { text=l('Poland'),         value='+48 58 881 00 02' },
                                    { text=l('Russia'),         value=l(\'[_1] (Toll Free)\', \'8 10 8002 8553011\') },
                                    { text=l('United Kingdom'), value=l(\'[_1] (Toll Free)\', \'+44 (0) 1666 800042, 0800 011 9847\'), selected=1 },
                                ] %]
                            </div>
                        </div>
                        <span className='gr-8 gr-prefix-4 gr-12-t gr-12-p gr-padding-10 gr-12-m' id='display_cs_telephone'>
                            [% '+44 (0) 1666 800042' %]
                            <br />
                            {it.L('[_1] (Toll Free)', '0800 011 9847')}
                        </span>
                    </div>
                    <div className='gr-padding-10 hint calls_recording'>
                        {it.L('*All calls are recorded for training and monitoring purposes')}
                    </div>
                </div>
                <div className='gr-6 gr-12-t gr-12-p gr-12-m ja-hide'>
                    <div className='gr-padding-10 gr-parent'>
                        {it.L('Email: ')}
                    </div>
                    <div className='gr-padding-10 gr-parent'>
                        <span className='gr-row'>
                            <label className='gr-5'>{it.L('For general support:')}</label>
                            <label className='gr-7'>[% '<a href=\'mailto:%\' rel=\'nofollow\'>%</a>' | replace(\'%\', \'support@binary.com\') %]</label>
                        </span>
                    </div>
                    <div className='gr-padding-10'>
                        <span className='gr-row'>
                            <label className='gr-5'>{it.L('For payments-related queries:')}</label>
                            <label className='gr-7'><a href='mailto:payments@binary.com'>payments@binary.com</a></label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='gr-padding-30' id='company_addresses'>
        <div className='gr-padding-20 center-text gr-parent'>
            <h1>{it.L('Company addresses')}</h1>
        </div>
        <div className='gr-row'>
            [% INCLUDE info_box padding=\'6\' header=l('Malta')   text=l('Binary (Europe) Ltd & Binary Investments (Europe) Ltd, Mompalao Building, Suite 2, Tower Road, Msida MSD1825') %]
            [% INCLUDE info_box padding=\'6\' header=l('Japan')   text=l('Binary KK, Hiroo Miyata Bldg 3F, 9-16, Hiroo 1-chome, Shibuya-ku, Tokyo 150-0012, Japan') %]
        </div>

        <div className='gr-hide-p gr-hide-m gr-padding-20'></div>

        <div className='gr-row'>
            [% INCLUDE info_box padding=\'4\' header=l('Malaysia') sub_header=l('Cyberjaya Office')    text=l('Binary Group Services Sdn Bhd, C-13-02, iTech Tower, Jalan Impact, Cyber 6, 63000 Cyberjaya, Selangor Darul Ehsan') %]
            [% INCLUDE info_box padding=\'4\' header=l('Malaysia') sub_header=l('Kuala Lumpur Office') text=l('Binary Group Services Sdn Bhd, 30-10, Q Sentral, Jalan Stesen Sentral 2, 50470 Kuala Lumpur') %]
            [% INCLUDE info_box padding=\'4\' header=l('Isle of Man') text=l('Binary (IOM) Ltd, First Floor, Millennium House, Victoria Road, Douglas, IM2 4RW') %]
        </div>
    </div>
</div>

);

export default Contact;
