import Head from 'next/head'

import { Button } from '@carbon/react';
import { PhoneApplication16 } from '@carbon/icons-react';

import SchletterForm from '../components/schletter-form';

export default function Home() {
    return (
        <div className="main-container">
            <Head>
                <title>Schletter Tracking Systems</title>
                <meta property="og:title" content="Schletter Tracking Systems" key="title" />
            </Head>
            <img className="header-logo" src="/images/logo_muster_oben@2x.png" alt="logo" width="360" height="240" />
            <div className="spacing-header">
                <span>
                    <Button kind="tertiary" className="interactive-01-button" renderIcon={PhoneApplication16}>Book a support call</Button>
                </span>
            </div>
            <div className="spacing-12"></div>
            <div className='form-wrapper'>
                <SchletterForm />
            </div>
        </div>
    )
}
