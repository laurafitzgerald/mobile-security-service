import React from 'react';
import { Page, PageSection, PageSectionVariants } from '@patternfly/react-core';

class Header extends React.Component {
  render () {
    return (
      <Page>
        <PageSection variant={PageSectionVariants.darker}>Mobile Security Service</PageSection>
      </Page>
    );
  }
}

export default Header;
