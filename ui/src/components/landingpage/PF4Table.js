import React from 'react';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';
import { Redirect } from 'react-router-dom';

class PF4Table extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      columns: [
        { title: 'Apps', transforms: [ sortable ] },
        { title: 'Num of Deployed Versions', transforms: [ sortable ] },
        { title: 'Num of Clients', transforms: [ sortable ] },
        { title: 'Numb of App Sartups', transforms: [ sortable ] }
      ],
      rows: [
        [ 'App-A', 3, 245, 4 ],
        [ 'App-B', 4, 655, 5 ],
        [ 'App-C', 1, 970, 6 ],
        [ 'App-D', 6, 255, 7 ],
        [ 'App-E', 5, 120, 8 ]
      ],

      sortBy: {},
      redirect: false
    };
    this.onSort = this.onSort.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick (event, rowId, props) {
    console.log('navigate was called on row: ', rowId.apps.title);
    this.setState({ redirect: true });
  }

  onSort (_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => (a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0));
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render () {
    if (this.state.redirect === true) {
      return <Redirect to='/overview' />;
    }

    const { columns, rows, sortBy } = this.state;
    return (
      <Table aria-label="Mobile Apps" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody onRowClick={this.onRowClick}/>
      </Table>
    );
  }
}

export default PF4Table;
