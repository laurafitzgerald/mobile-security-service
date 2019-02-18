import React from 'react';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-table';

class PF4Table extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Apps', transforms: [ sortable ] },
        { title: 'Verions', transforms: [ sortable ] },
        { title: 'Clients', transforms: [ sortable ] },
        { title: 'Startups', transforms: [ sortable ] }
      ],
      rows: [
        [ 'App-A', 3, 245, 4 ],
        [ 'App-B', 4, 655, 5 ],
        [ 'App-C', 1, 970, 6 ],
        [ 'App-D', 6, 255, 7 ],
        [ 'App-E', 5, 120, 8 ]
      ],

      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
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
    const { columns, rows, sortBy } = this.state;

    return (
      <Table caption="Mobile Apps" sortBy={sortBy} onSort={this.onSort} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default PF4Table;
