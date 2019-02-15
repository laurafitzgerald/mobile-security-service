import React from 'react';
import { Page, PageHeader, PageSection, PageSectionVariants } from '@patternfly/react-core';

class Header extends React.Component {
  render() {
    const logoProps = {
      href: 'https://patternfly.org',
      onClick: () => console.log('clicked logo'),
      target: '_blank'
    };
    const Header = (
      <PageHeader logo="Logo" logoProps={logoProps} toolbar="Toolbar" avatar=" | Avatar" topNav="Navigation" />
    );

    return (
      <Page>
        <PageSection variant={PageSectionVariants.darker}>Mobile Security Service</PageSection>
      </Page>
    );
  }
}

export default Header;
